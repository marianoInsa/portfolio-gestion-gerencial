# Eliminacion de CRUD y fuente unica en data/ Implementation Plan

> **For agentic workers:** REQUIRED: Use the `subagent-driven-development` agent (recommended) or `executing-plans` agent to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminar completamente el CRUD de Desafios, TPI, mapas individuales y mapa de equipo, dejando como unica fuente de verdad los archivos de `src/data/`.

**Architecture:** Volver a un esquema 100% de lectura para contenido academico. Las vistas deben renderizar datos estaticos desde `src/data/` sin estado editable en cliente ni formularios de alta/edicion/eliminacion.

**Tech Stack:** Next.js App Router, React Server/Client Components existentes, TypeScript estricto, shadcn/ui existente.

---

## Scope

Incluye:
- Eliminar CRUD de Desafios.
- Eliminar CRUD de TPI.
- Eliminar CRUD de mapas individuales (RPA).
- Eliminar CRUD de mapa conceptual de equipo.
- Reemplazar las secciones por vistas de solo lectura (estado vacio o contenido publicado desde `data/`).

No incluye:
- Backend/API para persistencia.
- Edicion en runtime con `localStorage`.

## File Impact

### Remove
- `src/components/sections/ChallengesCrudSection.tsx`
- `src/components/sections/TpiCrudSection.tsx`
- `src/components/sections/individual-concept-maps-crud-section.tsx`
- `src/components/sections/team-concept-map-crud-section.tsx`

### Modify
- `src/app/desafios/page.tsx`
- `src/app/tpi/page.tsx`
- `src/components/sections/RPASection.tsx`
- `src/components/sections/ConceptMapSection.tsx`

### Optional (cleanup)
- `src/components/sections/index` (si existe barrel y exporta CRUD)
- `src/components/ui/index.ts` (solo si hubiese export acoplado)

---

## Task 1: Eliminar CRUD de Desafios

**Files:**
- Modify: `src/app/desafios/page.tsx`
- Remove: `src/components/sections/ChallengesCrudSection.tsx`

- [ ] Reemplazar uso de `ChallengesCrudSection` por una vista read-only.

Implementacion recomendada:
- Usar `challenges` desde `@/data/challenges` (ya disponible en la pagina).
- Renderizar lista ordenada de desafios con datos esenciales (`number`, `title`, `period`, `problem`, tags, enlace a detalle si aplica).
- Mantener mismo tono visual actual (cards, bordes, tipografia existente).

- [ ] Mostrar estado vacio cuando `challenges.length === 0`.

- [ ] Eliminar import de `ChallengesCrudSection` y borrar archivo CRUD.

**Acceptance Criteria:**
- `/desafios` no muestra formulario ni botones de crear/editar/eliminar.
- El contenido se refleja exclusivamente desde `src/data/challenges.ts`.

---

## Task 2: Eliminar CRUD de TPI

**Files:**
- Modify: `src/app/tpi/page.tsx`
- Remove: `src/components/sections/TpiCrudSection.tsx`

- [ ] Reemplazar `TpiCrudSection` por bloque de solo lectura usando `tpi` de `@/data/tpi`.

Implementacion recomendada:
- Mostrar `title`, `period`, `description`, `reflections`.
- Condicionar estado por `isPublished`:
  - Si `true`: mostrar contenido normal.
  - Si `false`: mostrar mensaje de "en construccion" manteniendo consistencia visual.

- [ ] Eliminar import de `TpiCrudSection` y borrar archivo CRUD.

**Acceptance Criteria:**
- `/tpi` no tiene controles de alta/edicion/borrado.
- Todo el contenido proviene de `src/data/tpi.ts`.

---

## Task 3: Eliminar CRUD de mapas individuales (RPA)

**Files:**
- Modify: `src/components/sections/RPASection.tsx`
- Remove: `src/components/sections/individual-concept-maps-crud-section.tsx`

- [ ] Reemplazar `IndividualConceptMapsCrudSection` por render read-only de `rpaEntries`.

Implementacion recomendada:
- Si hay entries: mostrar cards por integrante con enlace al mapa.
- Si no hay entries: usar estado vacio informativo (sin CTA CRUD).

- [ ] Mantener texto de contexto orientado a publicacion/consulta, no a gestion CRUD.

- [ ] Eliminar import del componente CRUD y borrar archivo.

**Acceptance Criteria:**
- Home no expone formularios ni acciones de CRUD en RPA.
- El listado depende solo de `src/data/rpa.ts`.

---

## Task 4: Eliminar CRUD de mapa de equipo

**Files:**
- Modify: `src/components/sections/ConceptMapSection.tsx`
- Remove: `src/components/sections/team-concept-map-crud-section.tsx`

- [ ] Reemplazar `TeamConceptMapCrudSection` por bloque read-only basado en `teamConceptMap`.

Implementacion recomendada:
- Si `isPublished && resourceUrl`: mostrar tarjeta con titulo y link.
- Si no publicado: mostrar mensaje de "mapa de equipo en preparacion".

- [ ] Eliminar import del componente CRUD y borrar archivo.

**Acceptance Criteria:**
- Home no expone formulario ni acciones de CRUD para mapa de equipo.
- El contenido depende solo de `src/data/concept-map.ts`.

---

## Task 5: Limpieza y verificacion

**Files:**
- Buscar referencias residuales en `src/**`.

- [ ] Ejecutar busqueda de referencias:
  - `rg "ChallengesCrudSection|TpiCrudSection|IndividualConceptMapsCrudSection|TeamConceptMapCrudSection" src`

- [ ] Confirmar que no quedan imports/usos de componentes CRUD.

- [ ] Verificar calidad:
  - `eslint .`
  - `npm run build` (o comando equivalente del repo)

- [ ] Validar comportamiento manual:
  - `/desafios`: solo lectura.
  - `/tpi`: solo lectura.
  - Home en secciones RPA y Mapa Conceptual: solo lectura.

**Acceptance Criteria globales:**
- No existe UI CRUD en las 4 areas pedidas.
- Los datos se leen exclusivamente de `src/data/`.
- Build y lint sin errores nuevos.

---

## Riesgos y mitigaciones

- Riesgo: regresion visual al retirar componentes grandes de formulario.
- Mitigacion: reutilizar contenedores y estilos (`SectionWrapper`, `Card`, tipografias ya usadas).

- Riesgo: enlaces vacios en datos no publicados.
- Mitigacion: condicionar render por `isPublished` y existencia de URL.

- Riesgo: referencias residuales post-eliminacion.
- Mitigacion: busqueda global con `rg` y build final.

---

## Orden de implementacion recomendado

1. Desafios
2. TPI
3. RPA
4. Mapa de equipo
5. Limpieza y validacion final

Este orden minimiza riesgo porque elimina primero rutas dedicadas y luego secciones de Home compartida.
