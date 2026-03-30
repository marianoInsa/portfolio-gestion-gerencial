# Integracion Global de Cybernetic Grid Shader Implementation Plan

> **For agentic workers:** REQUIRED: Use the `subagent-driven-development` agent (recommended) or `executing-plans` agent to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrar un fondo WebGL animado (Cybernetic Grid Shader con Three.js) en todas las vistas del micrositio, manteniendo compatibilidad con App Router, accesibilidad, performance y sin romper interacciones ni overlays existentes.

**Architecture:** Introducir un componente cliente global de fondo montado una sola vez desde `src/app/layout.tsx`, con `position: fixed`, `inset: 0`, `pointer-events: none` y una capa de contenido por encima (`relative z-10`) para garantizar orden visual estable. El shader debe degradar de forma adaptativa segun capacidad del dispositivo y respetar `prefers-reduced-motion`.

**Tech Stack:** Next.js App Router, React Client Components, Three.js ya instalado, TypeScript estricto, CSS global existente.

---

## Scope Check

El alcance es transversal (layout global + estilos + componente visual). Se mantiene en un unico plan porque el cambio se concentra en el arbol raiz y no requiere backend. Si en una iteracion futura se agrega configuracion por usuario (intensidad, toggle persistente), se recomienda un plan separado.

## Decision Record

- Decision 1: Integrar en `src/app/layout.tsx` para cobertura total de rutas (`/`, `/desafios`, `/desafios/[slug]`, `/tpi`, `not-found`, `loading`).
- Decision 2: No reemplazar efectos locales de Hero; el shader global queda por debajo para composicion visual no intrusiva.
- Decision 3: Estrategia movil por defecto: **adaptive** (no apagar siempre). Bajar pixel ratio/FPS y desactivar en dispositivos con baja capacidad o `prefers-reduced-motion`.
- Decision 4: Fallback CSS obligatorio cuando WebGL no este disponible o falle inicializacion.

## Current Baseline (Evidence)

- `src/app/layout.tsx`: layout raiz con `NavBar` sticky `z-50`, `main`, `Footer`, `CommandPalette`, `Toaster`.
- `src/components/layout/NavBar.tsx`: barra con `bg-void-black/80` + `backdrop-blur-md`, sensible a legibilidad sobre fondo animado.
- `src/components/sections/HeroSection.tsx`: ya usa `GridBackground` + gradientes absolutos locales.
- `src/components/ui/GridBackground.tsx`: patron de fondo actual no interactivo (`pointer-events-none`).
- `src/app/globals.css`: tema dark y reglas base; lugar natural para estilos de capa global y fallback.

## File Structure

- Create: `src/components/ui/CyberneticGridShader.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Optional Modify: `src/components/sections/HeroSection.tsx`

Responsabilidad por archivo:
- `src/components/ui/CyberneticGridShader.tsx`: inicializacion de renderer, shaders, loop, eventos, limpieza, heuristicas de performance y fallback.
- `src/app/layout.tsx`: punto unico de montaje del fondo global, orden de capas y aislamiento del contenido.
- `src/app/globals.css`: clases de capa global, fallback visual y reglas para reduced motion.
- `src/components/sections/HeroSection.tsx` (opcional): ajuste fino de opacidad si hay exceso de ruido visual.

### Task 1: Definir contrato de capa global y no-regresion

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Introducir contenedor de fondo global y contenedor de contenido**

```tsx
// estructura objetivo en layout
<body className="...">
  <CyberneticGridShader />
  <div className="relative z-10">
    {/* TooltipProvider + contenido existente */}
  </div>
</body>
```

- [ ] **Step 2: Mantener skip-link y overlays por encima del fondo**

```text
Criterio: enlace "Saltar al contenido principal" (z-[100]) y overlays z-50 deben mantenerse funcionales e visibles.
```

- [ ] **Step 3: Verificar que no cambie la navegacion base**

```text
Criterio: NavBar sticky, menu mobile, CommandPalette y Toaster deben operar igual que antes.
```

### Task 2: Implementar componente shader robusto para App Router

**Files:**
- Create: `src/components/ui/CyberneticGridShader.tsx`

- [ ] **Step 1: Crear Client Component con inicializacion segura**

```tsx
'use client';

// 1) Guardas de entorno: window/document/WebGL
// 2) Renderer alpha + antialias con precision y dispose completo
// 3) ResizeObserver sobre contenedor (no solo window resize)
// 4) Animation loop con requestAnimationFrame o setAnimationLoop
```

- [ ] **Step 2: Corregir mapeo de mouse y coordenadas de viewport**

```tsx
// usar getBoundingClientRect del contenedor fixed
// iMouse.x = clientX - rect.left
// iMouse.y = rect.height - (clientY - rect.top)
```

- [ ] **Step 3: Integrar modo adaptive de performance**

```text
Heuristica minima:
- reduced motion => animacion desactivada o tiempo congelado
- devicePixelRatio cap (ej. <= 1.5 en movil)
- opcional throttling de FPS (ej. 30 en movil)
- auto-disable si init WebGL falla
```

- [ ] **Step 4: Implementar cleanup a prueba de fugas**

```text
Cleanup obligatorio:
- removeEventListener (resize/mouse/pointer/visibility)
- cancelar loop
- dispose material/geometry/renderer
- remover canvas del DOM
```

### Task 3: Fallback CSS y accesibilidad global

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Crear clase utilitaria del background global**

```css
.global-shader-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
```

- [ ] **Step 2: Definir fallback no-WebGL consistente con identidad visual**

```css
/* gradiente + malla sutil sin canvas */
.global-shader-fallback {
  background-image:
    radial-gradient(circle at 20% 20%, rgba(0, 245, 255, 0.12), transparent 42%),
    radial-gradient(circle at 80% 10%, rgba(155, 48, 255, 0.12), transparent 40%),
    linear-gradient(to right, rgba(30, 30, 58, 0.35) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(30, 30, 58, 0.35) 1px, transparent 1px);
  background-size: auto, auto, 40px 40px, 40px 40px;
}
```

- [ ] **Step 3: Respetar `prefers-reduced-motion`**

```css
@media (prefers-reduced-motion: reduce) {
  .global-shader-bg canvas {
    opacity: 0;
  }
}
```

### Task 4: Ajustes de composicion visual y legibilidad

**Files:**
- Optional Modify: `src/components/layout/NavBar.tsx`
- Optional Modify: `src/components/sections/HeroSection.tsx`

- [ ] **Step 1: Evaluar legibilidad real en navbar/cards/textos muted**

```text
Si hay ruido visual, aumentar opacidad de fondos semitransparentes clave (ej. navbar 80% -> 88/92%).
```

- [ ] **Step 2: Evitar doble protagonismo en Hero**

```text
Si la combinacion shader global + grid local satura la Hero, reducir opacidad de GridBackground local en HeroSection.
```

- [ ] **Step 3: Preservar contraste de texto**

```text
Validar titulos, texto star-light y botones neon sobre todas las secciones sin degradar AA visual.
```

### Task 5: Verificacion integral antes de cierre

**Files:**
- No code changes required (verification)

- [ ] **Step 1: Lint y build**

```bash
npm run lint
npm run build
```

- [ ] **Step 2: Smoke test por rutas (desktop + mobile)**

```text
Rutas:
- /
- /desafios
- /desafios/[slug]
- /tpi
- no encontrada (not-found)

Chequear:
- fondo visible y no bloquea clicks
- overlays/dialog/sheet/tooltips funcionan
- command palette y toaster visibles
- scroll y sticky navbar sin saltos
```

- [ ] **Step 3: Validacion de fallback y reduced motion**

```text
- Simular WebGL unavailable: se muestra fallback CSS
- Activar prefers-reduced-motion: animacion reducida/desactivada
```

- [ ] **Step 4: Prueba de estabilidad de recursos**

```text
Abrir/cerrar rutas varias veces y verificar ausencia de fugas aparentes (sin canvases duplicados).
```

---

## Risk Register

1. **Riesgo:** Degradacion de FPS en moviles de baja gama.
   **Mitigacion:** Cap de pixel ratio, throttling, auto-disable adaptativo.

2. **Riesgo:** Caida de legibilidad en capas semitransparentes.
   **Mitigacion:** Ajuste de opacidad en navbar/cards y ruido del shader.

3. **Riesgo:** Conflictos de stacking context con overlays.
   **Mitigacion:** Fondo fijo en `z-0`, contenido app en `relative z-10`, mantener overlays existentes.

4. **Riesgo:** Error de hidratacion SSR/client.
   **Mitigacion:** Componente shader como Client Component aislado sin acceso a window en render inicial.

5. **Riesgo:** Fugas de memoria por ciclos de montaje.
   **Mitigacion:** cleanup estricto de renderer/material/geometry/eventos/loop.

## Acceptance Criteria

- El shader se renderiza en todas las vistas sin bloquear interaccion de UI.
- No hay regresiones funcionales en menu mobile, command palette, dialogs, tooltips, toaster.
- `npm run lint` y `npm run build` pasan sin errores nuevos.
- Con `prefers-reduced-motion`, la experiencia se reduce o desactiva correctamente.
- Si WebGL falla, se mantiene un fallback visual consistente.

## Rollback Plan

Si aparece una regresion en produccion:

1. Quitar el montaje del shader en `src/app/layout.tsx`.
2. Mantener fallback CSS estatico para continuidad visual.
3. Reabrir investigacion de performance con profiling por dispositivo.

## Suggested Commit Strategy

1. `feat(ui): add global cybernetic shader background component`
2. `feat(layout): mount global shader layer in root layout`
3. `style: add fallback and reduced-motion rules for shader background`
4. `chore: tune visual contrast for navbar/hero after shader integration`
