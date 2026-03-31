# Plan de Auditoria y Mejora Responsive Smartphone

Fecha: 2026-03-31
Objetivo: llevar el sitio a un nivel de calidad movil consistente (320px en adelante), con interacciones touch confiables y sin regresiones visuales o de performance.

Estado de implementacion: COMPLETADO (2026-03-31)

## 1) Contexto y alcance

### Rutas en alcance (prioridad alta)
- /
- /desafios
- /desafios/[slug]
- /tpi

### Componentes en alcance (prioridad alta)
- src/components/ui/CyberneticGridShader.tsx
- src/components/sections/HeroSection.tsx
- src/components/sections/ChallengesExplorer.tsx
- src/app/desafios/[slug]/page.tsx
- src/components/ui/tabs.tsx

### Definicion de exito
- Sin overflow horizontal no intencional en 320px, 360px, 375px, 390px y 412px.
- Navegacion y formularios totalmente operables solo con touch.
- Shader interactivo al tap y drag en touch, sin degradar scroll.
- Legibilidad estable: tipografias y jerarquia visual sin cortes.
- No regresion de performance movil (sin jank visible en scroll o animaciones).

## 2) Hallazgos tecnicos iniciales

### Criticos
1. Shader sin respuesta confiable a tap touch
- Causa probable: solo se actualiza con pointermove.
- Evidencia: listener de pointermove sin pointerdown/touchstart.

2. Riesgo de overflow en ChallengesExplorer
- Causa probable: popover con ancho fijo de 360px.
- Evidencia: uso de w-[360px] en trigger/contenido.

### Medios
3. Hero con alto dependiente de 100vh
- Causa probable: barras dinamicas del navegador movil modifican viewport visible.

4. Tipografia Hero muy agresiva en pantallas chicas
- Causa probable: escalado de titulo muy grande en rangos de breakpoint.

5. Riesgo de tabs con truncado en detalle de desafio
- Causa probable: distribucion horizontal con etiquetas extensas y ancho limitado.

### Bajos
6. Tabla de insights depende de scroll horizontal
- No rompe layout, pero requiere affordance visual para UX movil.

## 3) Matriz de priorizacion (Impacto x Esfuerzo)

- P1 Alto impacto / Bajo esfuerzo
  - Shader: agregar pointerdown + touchstart/touchmove fallback, clamping de coordenadas.
  - ChallengesExplorer: reemplazar anchos fijos por fluidos con maximo adaptable.

- P2 Alto impacto / Esfuerzo medio
  - Hero: migrar de 100vh a 100svh/100dvh con fallback.
  - Hero: ajustar escala tipografica para 320-390px.

- P3 Medio impacto / Bajo esfuerzo
  - Tabs detalle: mejorar wrapping/scroll horizontal controlado y labels cortas en xs.
  - Tabla insights: indicador visual de scroll horizontal.

## 4) Plan por fases

### Fase 0: Baseline y reproduccion (0.5 dia)
- Generar checklist de casos mobile por ruta.
- Tomar capturas baseline en anchos clave.
- Registrar incidencias por severidad con evidencia.

Entregable:
- Reporte baseline con lista de defects y severidad.

### Fase 1: Quick wins (1 dia)
- Shader touch:
  - Captura de coordenadas en pointerdown.
  - Fallback touchstart/touchmove para compatibilidad.
  - Clamping de coordenadas al bounds del contenedor.
  - Filtro de eventos para no introducir ruido durante scroll.
- ChallengesExplorer:
  - Sustituir w-[360px] por estrategia fluida:
    - width: min(360px, calc(100vw - margen))
  - Verificar trigger y content alineados en xs/sm.

Entregable:
- PR 1 con correcciones P1.

### Fase 2: Estabilidad visual y viewport movil (1 dia)
- Hero:
  - Cambiar min-h basado en vh por svh/dvh con fallback robusto.
  - Ajustar escala de titulo para evitar saltos/cortes en 320-390px.
- Desafios detalle:
  - Tabs con comportamiento robusto en ancho reducido (wrap o overflow-x controlado).

Entregable:
- PR 2 con correcciones P2/P3.

### Fase 3: Hardening UX movil (0.5 dia)
- Tabla insights:
  - Agregar affordance visual de desplazamiento horizontal.
- Verificacion final de rutas en dispositivos objetivo.

Entregable:
- PR 3 de refinamientos UX.

## 5) Estrategia de verificacion

### Dispositivos objetivo
- iPhone SE (375x667)
- iPhone 14/15 (390x844)
- Pixel 6a (412x915)
- Galaxy S10/S20 class (360x800)
- Tablet de control (768px)

### Escenarios minimos por ruta
- Carga inicial, scroll completo, apertura de menus/popovers, formularios, dialogos, tabs, acciones CTA.
- Cambios de orientacion portrait/landscape.
- Accesibilidad tactil: targets minimos y ausencia de taps fantasma.

### Criterios de aceptacion cuantificables
- 0 overflows horizontales no intencionales en rutas objetivo.
- 100% de controles interactivos accionables por touch.
- Shader responde en <= 120ms percibidos a tap/drag en movil promedio.
- Sin saltos de layout perceptibles al aparecer/desaparecer UI del navegador.

## 6) Automatizacion recomendada

### Guardrails de CI
- Lint obligatorio en cada PR.
- Capturas de regresion visual por viewport (320, 360, 375, 390, 412, 768).
- Smoke de navegacion por rutas principales.

### Checklist de PR
- Evidencia en movil real o emulacion con screenshots.
- Validacion en iOS Safari y Android Chrome.
- Confirmacion de no regresion en desktop.

## 7) Backlog de implementacion (ordenado)

1. Corregir evento touch del shader global.
2. Eliminar ancho fijo 360px en popover de ChallengesExplorer.
3. Ajustar hero a svh/dvh + escala tipografica en xs.
4. Robustecer tabs de detalle de desafio en 320px.
5. Mejorar affordance de tabla en movil.

## 8) Riesgos y mitigacion

- Riesgo: cambios en shader afecten performance.
  - Mitigacion: mantener low power mode, limitar listeners y validar FPS subjetivo.

- Riesgo: cambios de layout alteren identidad visual.
  - Mitigacion: ajustes mobile-first sin tocar escala desktop.

- Riesgo: diferencias iOS/Android en eventos pointer/touch.
  - Mitigacion: estrategia hibrida pointer + touch fallback, pruebas en ambos SO.

## 9) Propuesta de ejecucion de equipo (senior squad)

- Frontend UI engineer:
  - Popovers, tabs, hero responsive.
- Graphics/WebGL engineer:
  - Shader interaction touch + estabilidad eventos.
- QA engineer:
  - Matriz de dispositivos y regresion visual.
- Tech lead:
  - Definicion de criterio de aceptacion y aprobacion final.

Tiempo estimado total: 2 a 3 dias habiles para dejar el sitio en estado mobile-ready con evidencia.
