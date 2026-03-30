# Ajustes de Navegacion y CRUD Cliente Implementation Plan

> **For agentic workers:** REQUIRED: Use the `subagent-driven-development` agent (recommended) or `executing-plans` agent to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplificar la UI actual y agregar CRUD cliente (sin backend) para Desafios, TPI y mapas conceptuales, manteniendo TypeScript estricto y sin nuevas dependencias.

**Architecture:** Mantener `src/data` como seed inicial de solo lectura y mover el estado editable a cliente con `useState` + `localStorage` mediante hooks reutilizables. Las paginas App Router seguiran siendo Server Components delgadas que delegan el CRUD a componentes cliente. Se evita introducir estado global complejo o librerias externas.

**Tech Stack:** Next.js App Router, React Client Components, TypeScript estricto, shadcn/ui existente, localStorage.

---

## Scope Check

El pedido mezcla 3 subsistemas (Home, Desafios, TPI/mapas). Se mantiene en un solo plan porque los cambios son pequenos y comparten la misma estrategia de estado cliente local; si crece alcance (persistencia real o sincronizacion multiusuario), separar en planes por subsistema.

## File Structure

- Modify: `src/app/page.tsx`
- Modify: `src/app/desafios/page.tsx`
- Modify: `src/app/tpi/page.tsx`
- Modify: `src/components/sections/ChallengesWorkbench.tsx`
- Modify: `src/components/sections/ConceptMapSection.tsx`
- Modify: `src/components/sections/RPASection.tsx`
- Modify: `src/types/index.ts`
- Create: `src/lib/storage-keys.ts`
- Create: `src/hooks/use-local-storage-state.ts`
- Create: `src/components/sections/ChallengesCrudSection.tsx`
- Create: `src/components/sections/TpiCrudSection.tsx`
- Create: `src/components/sections/ConceptMapsCrudSection.tsx`

Responsabilidad por archivo nuevo:
- `src/lib/storage-keys.ts`: claves unicas de almacenamiento local por recurso.
- `src/hooks/use-local-storage-state.ts`: hook generico, tipado, con hydration segura para App Router.
- `src/components/sections/ChallengesCrudSection.tsx`: CRUD cliente simple para lista de desafios.
- `src/components/sections/TpiCrudSection.tsx`: CRUD cliente para el recurso TPI (registro unico editable y eliminable).
- `src/components/sections/ConceptMapsCrudSection.tsx`: CRUD cliente para mapa de equipo y mapas individuales.

### Task 1: Remover bloques solicitados (Home y TPI)

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/tpi/page.tsx`

- [ ] **Step 1: Escribir chequeos de regresion rapidos (manuales)**

```text
Caso A: Home no debe renderizar InsightsSection.
Caso B: /tpi no debe renderizar ProgressFeedbackForm.
```

- [ ] **Step 2: Eliminar Insights de Home**

```tsx
// src/app/page.tsx
import HeroSection from '@/components/sections/HeroSection';
// quitar import InsightsSection

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* ...otras secciones... */}
      {/* quitar <InsightsSection /> */}
    </>
  );
}
```

- [ ] **Step 3: Eliminar reporte de avances de /tpi**

```tsx
// src/app/tpi/page.tsx
// quitar import ProgressFeedbackForm

export default function TpiPage() {
  return (
    <main>
      {/* contenido actual */}
      {/* quitar SectionWrapper con <ProgressFeedbackForm /> */}
    </main>
  );
}
```

- [ ] **Step 4: Validar compilacion y tipos**

Run: `bun run lint; bun run build`
Expected: PASS sin errores nuevos.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/app/tpi/page.tsx
git commit -m "refactor: remove insights from home and progress report from tpi"
```

### Task 2: Quitar sidebar en /desafios manteniendo workbench

**Files:**
- Modify: `src/components/sections/ChallengesWorkbench.tsx`
- Modify: `src/app/desafios/page.tsx`

- [ ] **Step 1: Escribir criterio de aceptacion**

```text
En /desafios debe existir seleccion de desafio sin usar componente Sidebar.
```

- [ ] **Step 2: Reemplazar Sidebar por selector simple**

```tsx
// src/components/sections/ChallengesWorkbench.tsx
// quitar imports de ui/sidebar
// usar Select o lista de botones para elegir desafio
const [activeId, setActiveId] = useState<string>(challenges[0]?.id ?? '');

<Select value={activeId} onValueChange={setActiveId}>
  {scopedChallenges.map((challenge) => (
    <SelectItem key={challenge.id} value={challenge.id}>
      {`#${String(challenge.number).padStart(2, '0')} ${challenge.title}`}
    </SelectItem>
  ))}
</Select>
```

- [ ] **Step 3: Mantener panel de detalle sin cambios funcionales**

```tsx
// conservar bloques Contexto / Solucion / Herramientas / Evidencias
// solo cambiar navegacion lateral por selector superior
```

- [ ] **Step 4: Validar pagina /desafios**

Run: `bun run lint; bun run build`
Expected: PASS y /desafios renderiza sin Sidebar.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/ChallengesWorkbench.tsx src/app/desafios/page.tsx
git commit -m "refactor: remove sidebar from desafios workbench"
```

### Task 3: Infra minima para CRUD cliente tipado

**Files:**
- Modify: `src/types/index.ts`
- Create: `src/lib/storage-keys.ts`
- Create: `src/hooks/use-local-storage-state.ts`

- [ ] **Step 1: Definir tipos faltantes para CRUD**

```ts
// src/types/index.ts
export interface PersonalConceptMap {
  id: string;
  memberId: string;
  title: string;
  resourceUrl: string;
  description?: string;
}

export interface TeamConceptMapRecord {
  id: string;
  title: string;
  resourceUrl: string;
  isPublished: boolean;
}
```

- [ ] **Step 2: Definir keys centralizadas de localStorage**

```ts
// src/lib/storage-keys.ts
export const STORAGE_KEYS = {
  challenges: 'stakeholders.challenges.v1',
  tpi: 'stakeholders.tpi.v1',
  teamConceptMap: 'stakeholders.teamConceptMap.v1',
  personalConceptMaps: 'stakeholders.personalConceptMaps.v1',
} as const;
```

- [ ] **Step 3: Crear hook reutilizable seguro para SSR/hidratacion**

```ts
// src/hooks/use-local-storage-state.ts
'use client';

import { useEffect, useState } from 'react';

export function useLocalStorageState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) setValue(JSON.parse(raw) as T);
    } catch {}
    setHydrated(true);
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [hydrated, key, value]);

  return { value, setValue, hydrated };
}
```

- [ ] **Step 4: Validar tipos strict**

Run: `bun run lint; bun run build`
Expected: PASS sin `any` implicitos ni errores de nullabilidad.

- [ ] **Step 5: Commit**

```bash
git add src/types/index.ts src/lib/storage-keys.ts src/hooks/use-local-storage-state.ts
git commit -m "feat: add typed local-storage infrastructure for client crud"
```

### Task 4: CRUD simple de Desafios en cliente

**Files:**
- Create: `src/components/sections/ChallengesCrudSection.tsx`
- Modify: `src/app/desafios/page.tsx`
- Modify: `src/components/sections/ChallengesExplorer.tsx`
- Modify: `src/components/sections/ChallengesWorkbench.tsx`

- [ ] **Step 1: Crear componente cliente con operaciones C/R/U/D**

```tsx
// src/components/sections/ChallengesCrudSection.tsx
'use client';

// props:
// initialChallenges: Challenge[]
// onChange: (next: Challenge[]) => void
// acciones: crear base, editar campos simples, eliminar por id
```

- [ ] **Step 2: Integrar estado editable en /desafios**

```tsx
// src/app/desafios/page.tsx
// renderizar un wrapper cliente que:
// - carga seed initialChallenges desde src/data/challenges
// - usa useLocalStorageState
// - pasa challenges editables a Explorer + Workbench + CRUD section
```

- [ ] **Step 3: Mantener compatibilidad con componentes existentes**

```tsx
// src/components/sections/ChallengesExplorer.tsx
// src/components/sections/ChallengesWorkbench.tsx
// solo aceptar Challenge[] ya editable; sin romper filtros/paginacion actuales
```

- [ ] **Step 4: Prueba funcional manual**

Run: `bun run dev`
Expected:
- crear desafio nuevo visible en explorer/workbench,
- editar titulo/periodo,
- eliminar desafio,
- recargar pagina y conservar cambios.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/ChallengesCrudSection.tsx src/app/desafios/page.tsx src/components/sections/ChallengesExplorer.tsx src/components/sections/ChallengesWorkbench.tsx
git commit -m "feat: add client-side crud for desafios"
```

### Task 5: CRUD simple para TPI y mapas conceptuales

**Files:**
- Create: `src/components/sections/TpiCrudSection.tsx`
- Create: `src/components/sections/ConceptMapsCrudSection.tsx`
- Modify: `src/app/tpi/page.tsx`
- Modify: `src/components/sections/ConceptMapSection.tsx`
- Modify: `src/components/sections/RPASection.tsx`

- [ ] **Step 1: Implementar CRUD cliente para TPI (registro unico)**

```tsx
// src/components/sections/TpiCrudSection.tsx
'use client';

// Create: inicializar si no existe
// Read: mostrar estado actual
// Update: titulo/descripcion/periodo/reflections/isPublished
// Delete: reset a estado vacio controlado
```

- [ ] **Step 2: Integrar TPI editable en /tpi**

```tsx
// src/app/tpi/page.tsx
// usar estado local persistido para render principal
// agregar TpiCrudSection debajo del contenido principal
```

- [ ] **Step 3: Implementar CRUD de mapas (equipo + individuales)**

```tsx
// src/components/sections/ConceptMapsCrudSection.tsx
'use client';

// Team map: create/update/delete (registro unico)
// Personal maps: create/update/delete por id, con memberId y url
```

- [ ] **Step 4: Conectar mapas CRUD con secciones visuales**

```tsx
// src/components/sections/ConceptMapSection.tsx
// leer mapa de equipo desde estado cliente (con fallback a seed)

// src/components/sections/RPASection.tsx
// leer mapas individuales desde estado cliente (con fallback a rpaEntries)
```

- [ ] **Step 5: Validar extremo a extremo**

Run: `bun run lint; bun run build`
Expected: PASS.

Run: `bun run dev`
Expected:
- /tpi permite crear/editar/eliminar registro,
- Home muestra mapa equipo actualizado,
- RPA muestra altas/bajas/ediciones de mapas individuales,
- sin errores de hidratacion en consola.

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/TpiCrudSection.tsx src/components/sections/ConceptMapsCrudSection.tsx src/app/tpi/page.tsx src/components/sections/ConceptMapSection.tsx src/components/sections/RPASection.tsx
git commit -m "feat: add client-side crud for tpi and concept maps"
```

### Task 6: Cierre, limpieza y documentacion minima

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Documentar alcance y limites del CRUD cliente**

```md
## Estado de datos en cliente
- Persistencia local via localStorage.
- Sin sincronizacion entre dispositivos.
- Datos seed en `src/data` usados como fallback inicial.
```

- [ ] **Step 2: Ejecutar validacion final**

Run: `bun run lint; bun run build`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: document client-side crud behavior and limits"
```

## Riesgos Clave

1. **Desfase SSR vs cliente (hidratacion):** leer `localStorage` solo en `useEffect` y mostrar UI estable hasta `hydrated=true`.
2. **Rotura de tipos por formas parciales:** usar tipos explicitos y valores iniciales completos, evitando `Partial<T>` en estado principal.
3. **Colision de IDs en altas locales:** generar IDs deterministas simples (`Date.now()` + sufijo) y validar unicidad antes de insertar.
4. **Regresiones visuales al quitar Sidebar:** mantener layout de detalle y navegacion alternativa clara (Select/lista), especialmente en mobile.
5. **Perdida de datos por limpieza de navegador:** documentar que el CRUD es local-only y no reemplaza persistencia backend.

## Self-Review

- Cobertura de requerimientos: los 6 cambios solicitados quedan mapeados en Tasks 1, 2, 4 y 5.
- Placeholders: no se dejaron TODO/TBD; cada tarea incluye pasos, comandos y resultado esperado.
- Consistencia de tipos: se unifica estrategia con hook generico tipado y tipos nuevos para mapas.
