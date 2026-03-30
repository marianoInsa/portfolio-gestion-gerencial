# ESPECIFICACIÓN DE REQUISITOS DE SOFTWARE (SRS)
## Micrositio Portfolio — Equipo Stakeholders
### Ingeniería en Sistemas de Información · UTN

| Campo | Valor |
|---|---|
| Versión | 1.2.0 |
| Fecha | Marzo 2026 |
| Equipo | Stakeholders |
| Estado | Activo |

---

## Historial de Versiones

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.2.0 | Mar 2026 | Stakeholders | Simplificación funcional: eliminación de vistas complejas (insights/sidebar/reportes) y definición de CRUD para Desafíos, TPI y Mapas Conceptuales |
| 1.1.0 | Mar 2026 | Stakeholders | Plan detallado de modernización con shadcn/ui, roadmap por fases y matriz completa de componentes |
| 1.0.0 | Mar 2026 | Stakeholders | Versión inicial del documento SRS |

---

## Tabla de Contenidos

1. [Introducción](#1-introducción)
2. [Descripción General del Sistema](#2-descripción-general-del-sistema)
3. [Stack Tecnológico](#3-stack-tecnológico)
4. [Sistema de Diseño](#4-sistema-de-diseño--cyberpunk--ia-futurista)
5. [Arquitectura de la Información](#5-arquitectura-de-la-información)
6. [Modelos de Datos](#6-modelos-de-datos)
7. [Requisitos Funcionales](#7-requisitos-funcionales)
8. [Requisitos No Funcionales](#8-requisitos-no-funcionales)
9. [Especificación Detallada de Páginas y Componentes](#9-especificación-detallada-de-páginas-y-componentes)
10. [Lineamientos UX Detallados](#10-lineamientos-ux-detallados)
11. [Criterios de Calidad del Micrositio](#11-criterios-de-calidad-del-micrositio)
12. [Roadmap de Desarrollo](#12-roadmap-de-desarrollo)
13. [Configuración Recomendada de Herramientas](#13-configuración-recomendada-de-herramientas)
14. [Plan de Modernización con shadcn/ui](#14-plan-de-modernización-con-shadcnui)
- [Apéndice A — Checklist de Aceptación](#apéndice-a--checklist-de-aceptación)
- [Apéndice B — Referencias de Implementación para Agentes IA](#apéndice-b--referencias-de-implementación-para-agentes-ia)
- [Apéndice C — Matriz Completa de Componentes shadcn/ui](#apéndice-c--matriz-completa-de-componentes-shadcnui)

---

## 1. Introducción

### 1.1 Propósito del Documento

Este documento constituye la Especificación de Requisitos de Software (SRS) del micrositio portfolio del equipo Stakeholders. Define de forma exhaustiva y sin ambigüedades todos los requisitos funcionales, no funcionales, de diseño y de arquitectura que deben satisfacerse durante el desarrollo del sistema.

La **audiencia objetivo** incluye: desarrolladores humanos, agentes de IA asistentes de código, diseñadores UX, evaluadores y docentes de la asignatura. El documento está redactado con un nivel de detalle suficiente para que cualquier agente (humano o IA) pueda iniciar el desarrollo sin necesidad de consultas adicionales.

### 1.2 Alcance del Proyecto

El producto a desarrollar es un micrositio web estático/híbrido de portfolio académico que debe:

- Presentar al equipo Stakeholders y a sus cinco integrantes de manera clara y profesional.
- Documentar y exhibir los desafíos desarrollados durante la cursada de la asignatura.
- Permitir carga, edición y eliminación (CRUD) de desafíos.
- Permitir carga, edición y eliminación (CRUD) de registros TPI.
- Permitir carga, edición y eliminación (CRUD) de mapas conceptuales individuales y del mapa conceptual de equipo.
- Adherir a un sistema de diseño cyberpunk/futurista con temática de inteligencia artificial.
- Ser completamente responsive, accesible y con rendimiento óptimo.

**Fuera del alcance:** autenticación de usuarios, CMS dinámico, base de datos y paneles analíticos complejos.

### 1.3 Definiciones, Acrónimos y Abreviaturas

| Término | Definición |
|---|---|
| SRS | Software Requirements Specification — Especificación de Requisitos de Software |
| RF | Requisito Funcional |
| RNF | Requisito No Funcional |
| RPA | Ruta Personal de Aprendizaje |
| TPI | Trabajo Práctico Integrador |
| Micrositio | Sitio web pequeño y enfocado en un propósito único |
| SSG | Static Site Generation — generación de sitio estático en tiempo de build |
| ISR | Incremental Static Regeneration — modo de Next.js |
| UX | User Experience — Experiencia de Usuario |
| AI / IA | Artificial Intelligence — Inteligencia Artificial |
| CMS | Content Management System — Sistema de Gestión de Contenidos |
| MDX | Markdown + JSX — formato de contenido enriquecido |
| Superequipo | Término utilizado en la asignatura para denominar al grupo de trabajo |

### 1.4 Convenciones del Documento

- Los identificadores de requisitos siguen el formato `RF-XXX` para funcionales y `RNF-XXX` para no funcionales.
- La prioridad de requisitos se expresa como: **Alta**, **Media** o **Baja**.
- Los bloques de código de implementación se presentan en fuente monoespaciada dentro de bloques de código.
- Las notas importantes se identifican con el prefijo `[NOTA]`.
- Los campos marcados con `[TODO]` indican secciones a completar con contenido real.

### 1.5 Referencias

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Bun Runtime](https://bun.sh/docs)
- [TypeScript 5 Handbook](https://www.typescriptlang.org/docs)
- [WCAG 2.1 Accessibility Guidelines](https://www.w3.org/TR/WCAG21)
- [Core Web Vitals](https://web.dev/vitals)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs/components)

---

## 2. Descripción General del Sistema

### 2.1 Perspectiva del Producto

El micrositio es un sistema web independiente, sin dependencias de backends propietarios ni bases de datos. Funciona como un portafolio estático enriquecido con funcionalidades de renderizado del lado del cliente (React). El sistema convive en el ecosistema universitario y debe poder desplegarse en plataformas de hosting gratuitas o económicas (Vercel, GitHub Pages, Netlify).

El sitio opera como una aplicación con rutas gestionadas por Next.js App Router, combinando SSG para contenido estático y capacidad de actualización manual del código-fuente por el equipo.

### 2.2 Funciones Principales del Sistema

1. Presentación del equipo y sus integrantes (Home).
2. Gestión y exhibición de desafíos académicos (listado, detalle y CRUD).
3. Gestión y exhibición de mapas conceptuales individuales (CRUD).
4. Gestión y exhibición del mapa conceptual de equipo (CRUD).
5. Gestión y exhibición del Trabajo Práctico Integrador (CRUD).
6. Navegación coherente, accesible y responsive en todos los dispositivos.

### 2.3 Perfiles de Usuario

| Perfil | Descripción | Nivel Técnico | Necesidades Clave |
|---|---|---|---|
| Visitante Docente | Evaluadores de la asignatura | Medio | Acceso rápido a evidencias y reflexiones del equipo |
| Visitante General | Compañeros, interesados externos | Bajo-Medio | Navegación intuitiva, contenido claro y visual |
| Equipo Stakeholders | Los 5 integrantes como editores del código | Alto | Estructura de código clara para agregar contenido |
| Agente IA de Desarrollo | Herramientas IA que implementen features | N/A | Código TypeScript idiomático, bien estructurado y documentado |

### 2.4 Entorno Operacional

- **Sistemas Operativos de desarrollo:** Windows 11, macOS, Linux.
- **Navegadores objetivo:** Chrome 120+, Firefox 120+, Safari 17+, Edge 120+.
- **Dispositivos:** Desktop (1280px+), Tablet (768px–1279px), Mobile (320px–767px).
- **Hosting:** Vercel (recomendado) o plataforma equivalente compatible con Next.js.
- **Runtime:** Bun >= 1.0 como runtime y package manager principal.

### 2.5 Restricciones de Diseño e Implementación

- **Restricción tecnológica:** La plataforma es Next.js con App Router. No se permite Pages Router.
- **Restricción de estilos:** Tailwind CSS v4 exclusivamente. No se usarán librerías CSS-in-JS adicionales.
- **Restricción de lenguaje:** TypeScript estricto (`strict: true` en tsconfig). No se acepta código JavaScript puro.
- **Restricción de contenido:** Todo el contenido textual y multimedia es provisto manualmente por el equipo. No existe CMS.
- **Restricción de accesibilidad:** Mínimo WCAG 2.1 nivel AA.
- **Restricción de rendimiento:** LCP < 2.5s, CLS < 0.1, INP < 200ms en conexiones 4G.

### 2.6 Supuestos y Dependencias

- Los integrantes tienen conocimiento básico de Git para actualizar el contenido del sitio.
- Los archivos de assets (logo, avatars) serán provistos por el equipo en formatos WebP.
- El sitio no requerirá autenticación ni roles de usuario en ninguna etapa.
- El contenido de los desafíos se modelará como archivos de datos TypeScript dentro del proyecto.
- El equipo utilizará una rama `main` protegida; los cambios se incorporan mediante pull requests.

---

## 3. Stack Tecnológico

### 3.1 Tabla del Stack

| Capa | Tecnología | Versión Mínima | Propósito |
|---|---|---|---|
| Runtime & PM | Bun | 1.0.0 | Ejecutar scripts, instalar dependencias, tests |
| Framework | Next.js | 15.0.0 | Routing, SSG/SSR, App Router, optimización de imágenes |
| Biblioteca UI | React | 19.0.0 | Componentes, Server Components, Hooks modernos |
| Lenguaje | TypeScript | 5.4+ | Tipado estático, mejor DX, seguridad de tipos |
| Estilos | Tailwind CSS | 4.0.0 | Utility-first CSS, sistema de diseño, responsive |
| Linting | ESLint + Prettier | Latest | Calidad y formato consistente del código |
| Control de versiones | Git + GitHub | — | Versionado, colaboración, CI/CD |
| Despliegue | Vercel | — | Hosting, CDN global, preview deployments |

### 3.2 Inicialización del Proyecto

```bash
bunx create-next-app@latest stakeholders-portfolio \
  --typescript --tailwind --eslint \
  --app --src-dir --import-alias '@/*'
```

### 3.3 Dependencias Clave

| Paquete | Tipo | Propósito |
|---|---|---|
| `next` | Producción | Framework principal |
| `react` / `react-dom` | Producción | Biblioteca de UI |
| `typescript` | Desarrollo | Compilador TypeScript |
| `tailwindcss` | Producción | Framework de estilos |
| `eslint` / `eslint-config-next` | Desarrollo | Linting |
| `prettier` | Desarrollo | Formateo de código |
| `@types/react` / `@types/node` | Desarrollo | Tipos TypeScript |
| `lucide-react` | Producción | Iconos SVG |
| `framer-motion` | Producción | Animaciones UI (recomendado) |

### 3.4 Configuración de TypeScript

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "moduleResolution": "bundler",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

---

## 4. Sistema de Diseño — Cyberpunk / IA Futurista

El sistema de diseño define la identidad visual del micrositio. Todo componente debe adherirse estrictamente a estas especificaciones. El tema es oscuro (**dark mode por defecto**) con acentos neón característicos del estilo cyberpunk, combinado con elementos visuales que evocan inteligencia artificial: grillas digitales, efectos de glitch, gradientes y tipografía geométrica.

### 4.1 Paleta de Colores

| Nombre | Variable CSS | Valor HEX | Uso |
|---|---|---|---|
| Cyber Cyan | `--color-cyber-cyan` | `#00F5FF` | Acentos primarios, links, botones principales, glow effects |
| Neon Magenta | `--color-neon-magenta` | `#FF00FF` | Acentos secundarios, highlights, tags activos |
| Electric Purple | `--color-electric-purple` | `#9B30FF` | Títulos secundarios, bordes activos, hover states |
| Neon Green | `--color-neon-green` | `#39FF14` | Indicadores de éxito, badges online, métricas positivas |
| Void Black | `--color-void-black` | `#050508` | Fondo base principal |
| Deep Space | `--color-deep-space` | `#0D0D1A` | Fondo de cards, paneles |
| Dark Matter | `--color-dark-matter` | `#1A1A2E` | Fondo de elementos secundarios, navbars |
| Nebula | `--color-nebula` | `#2D2D4E` | Bordes, divisores, inputs |
| Star Light | `--color-star-light` | `#8B8BAD` | Texto secundario, placeholders |
| White Photon | `--color-white-photon` | `#E8E8FF` | Texto principal |
| Hot Pink | `--color-hot-pink` | `#FF2D78` | Alertas, badges de error, elementos críticos |
| Grid Line | `--color-grid-line` | `#1E1E3A` | Líneas de grilla de fondo |

### 4.2 Tipografía

Se utilizarán fuentes de Google Fonts cargadas vía `next/font` para optimizar el rendimiento:

| Rol | Fuente | Pesos | Aplicación |
|---|---|---|---|
| Display / Títulos H1 | Orbitron | 700, 900 | Nombres de sección grandes, logo textual, hero |
| Subtítulos H2–H3 | Exo 2 | 500, 600, 700 | Subtítulos de sección y card headers |
| Cuerpo de texto | Inter | 400, 500 | Párrafos, descripciones, contenido general |
| Código / técnico | JetBrains Mono | 400, 500 | Snippets de código, identificadores técnicos |

**Escala tipográfica base (clases Tailwind):**

| Clase | Tamaño | Uso |
|---|---|---|
| `text-xs` | 12px | Metadatos, captions |
| `text-sm` | 14px | Badges, labels, fechas |
| `text-base` | 16px | Cuerpo de texto principal |
| `text-lg` | 18px | Entradillas, subtítulos menores |
| `text-2xl` | 24px | H3, títulos de card |
| `text-4xl` | 36px | H2, títulos de sección |
| `text-6xl` | 60px | H1, hero title |

### 4.3 Efectos Visuales

| Efecto | Descripción | Implementación sugerida |
|---|---|---|
| Glow / Neón | Resplandor neón en bordes y texto de acentos | `box-shadow: 0 0 10px #00F5FF, 0 0 20px #00F5FF40` |
| Glassmorphism | Efecto cristal en cards sobre fondo oscuro | `backdrop-blur-md bg-white/5 border border-white/10` |
| Scanlines | Líneas horizontales sutiles sobre fondos | Pseudoelemento `::after` con `repeating-linear-gradient` |
| Grid Background | Grilla digital en fondos de sección | CSS grid con `--color-grid-line` en SVG o `background-image` |
| Gradient Text | Texto con degradado de color | `bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent` |
| Glitch | Efecto de interferencia en hover (decorativo) | CSS animation con `transform: translate` en `::before`/`::after` |

### 4.4 Componentes Base del Design System

Todos los componentes reutilizables deben residir en `src/components/ui/` y ser exportados desde un `index.ts`. Los componentes son **Server Components** por defecto; se añade `'use client'` solo cuando sea estrictamente necesario.

| Componente | Descripción | Props Clave |
|---|---|---|
| `<CyberCard>` | Card con borde neón, glassmorphism y hover glow | `title`, `description`, `children`, `glowColor` |
| `<NeonButton>` | Botón con efecto glow en hover | `variant` (primary\|secondary\|ghost), `size`, `href` |
| `<GlitchTitle>` | Título con efecto glitch animado | `text`, `as` (h1\|h2\|h3), `className` |
| `<Badge>` | Etiqueta pequeña para tecnologías/roles | `color`, `children` |
| `<SectionWrapper>` | Wrapper de sección con padding y fondo consistente | `id`, `className`, `children` |
| `<GridBackground>` | Fondo con grilla digital cyberpunk | `opacity`, `gridSize` |
| `<AvatarCard>` | Card de integrante con avatar, nombre y roles | `member: MemberType` |
| `<EmptyState>` | Estado vacío con icono y mensaje "Próximamente" | `title`, `message`, `icon` |
| `<NavBar>` | Barra de navegación principal responsive | — |
| `<Footer>` | Pie de página con info del equipo | — |

---

## 5. Arquitectura de la Información

### 5.1 Mapa del Sitio

| Ruta | Página | Nivel | Estado |
|---|---|---|---|
| `/` | Home (Inicio) | 1 | Requerido — Sprint 1 |
| `/#equipo` | Sección: Identificación del equipo (anchor) | 1 | Requerido — Sprint 1 |
| `/#integrantes` | Sección: Integrantes (anchor) | 1 | Requerido — Sprint 1 |
| `/#desafios` | Sección: Desafíos (anchor / cards) | 1 | Requerido — Sprint 1 |
| `/#rpa` | Sección: Rutas Personales de Aprendizaje (CRUD) | 1 | Requerido — Sprint 3 |
| `/#mapa-conceptual` | Sección: Mapa Conceptual del equipo (CRUD) | 1 | Requerido — Sprint 3 |
| `/desafios` | Listado y gestión CRUD de desafíos | 1 | Requerido — Sprint 2 |
| `/desafios/[slug]` | Detalle de un desafío específico | 2 | Requerido — Sprint 2 |
| `/tpi` | Gestión CRUD del Trabajo Práctico Integrador | 1 | Requerido — Sprint 3 |

### 5.2 Jerarquía de Navegación

La navegación tiene **máximo 3 niveles de profundidad**:

- **Nivel 1:** Ítems del menú principal (Home, Desafíos, TPI).
- **Nivel 2:** Sub-secciones dentro de una página (accesibles vía anchor links o sub-menú).
- **Nivel 3:** Páginas de detalle de desafíos individuales.

### 5.3 Estructura de Carpetas del Proyecto

```
stakeholders-portfolio/
├── public/
│   └── assets/
│       ├── logo.webp                        ← Logo del equipo
│       └── avatars/                         ← Avatars de cada integrante
│           ├── insaurralde-mariano.webp
│           ├── fernandez-matias.webp
│           ├── philippe-maurel.webp
│           ├── sanchez-franco.webp
│           └── acosta-sandra.webp
├── src/
│   ├── app/                                 ← App Router (Next.js)
│   │   ├── layout.tsx                       ← Root layout
│   │   ├── page.tsx                         ← Home page
│   │   ├── globals.css                      ← Tailwind imports + CSS vars
│   │   ├── not-found.tsx                    ← Página 404 personalizada
│   │   ├── desafios/
│   │   │   ├── page.tsx                     ← Listado de desafíos
│   │   │   └── [slug]/
│   │   │       └── page.tsx                 ← Detalle de desafío
│   │   └── tpi/
│   │       └── page.tsx                     ← Página TPI
│   ├── components/
│   │   ├── ui/                              ← Componentes atómicos design system
│   │   │   ├── CyberCard.tsx
│   │   │   ├── NeonButton.tsx
│   │   │   ├── GlitchTitle.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionWrapper.tsx
│   │   │   ├── GridBackground.tsx
│   │   │   ├── AvatarCard.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── NavBar.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/                        ← Secciones de la Home
│   │       ├── HeroSection.tsx
│   │       ├── TeamSection.tsx
│   │       ├── MembersSection.tsx
│   │       ├── ChallengesSection.tsx
│   │       ├── RPASection.tsx
│   │       └── ConceptMapSection.tsx
│   ├── data/                                ← Datos del sitio (TypeScript)
│   │   ├── team.ts                          ← Integrantes y sus datos
│   │   ├── challenges.ts                    ← Desafíos académicos
│   │   └── tpi.ts                           ← Datos del TPI
│   ├── types/                               ← Tipos TypeScript globales
│   │   └── index.ts
│   └── lib/                                 ← Utilidades
│       └── utils.ts
├── .eslintrc.json
├── .prettierrc
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 6. Modelos de Datos

Todo el contenido del sitio se representa como estructuras de datos TypeScript en `src/data/`. No hay base de datos; los datos se importan directamente en los componentes como módulos ES.

### 6.1 Tipo: Member (Integrante)

```typescript
// src/types/index.ts

export type MemberRole =
  | 'Desarrollador'
  | 'Diseñador'
  | 'Analista'
  | 'Tester'
  | 'Líder de Proyecto';

export interface Member {
  id: string;          // Ej: 'insaurralde-mariano'
  fullName: string;    // Ej: 'Insaurralde, Mariano'
  firstName: string;   // Ej: 'Mariano'
  avatarPath: string;  // Ej: '/assets/avatars/insaurralde-mariano.webp'
  roles: MemberRole[]; // Array de roles en el equipo
  strengths: string[]; // Fortalezas clave (max 4 items)
  interests: string[]; // Intereses profesionales (max 4 items)
  bio: string;         // Presentación breve (max 200 caracteres)
}
```

### 6.2 Tipo: Challenge (Desafío)

```typescript
export interface Evidence {
  type: 'documento' | 'presentacion' | 'video' | 'enlace' | 'imagen';
  label: string;
  url: string;
}

export interface Challenge {
  id: string;               // Slug URL-friendly. Ej: 'desafio-01-mapas-mentales'
  title: string;            // Título del desafío
  number: number;           // Número del desafío (1, 2, 3...)
  period: string;           // Período. Ej: 'Abril 2026'
  problem: string;          // Descripción del problema abordado (markdown)
  solution: string;         // Descripción de la solución (markdown)
  teamReflection: string;   // Reflexión del equipo (markdown)
  tools: string[];          // Herramientas utilizadas
  evidences: Evidence[];    // Listado de evidencias
  coverImage?: string;      // Imagen de portada opcional
  tags: string[];           // Tags temáticos
}
```

### 6.3 Tipo: IndividualConceptMap (Mapa Conceptual Individual)

```typescript
export interface IndividualConceptMap {
  id: string;
  memberId: string;        // Referencia al ID del integrante
  title: string;
  conceptMapUrl: string;   // URL o path al mapa conceptual
  uploadedAt: string;      // Fecha ISO 8601
  description?: string;    // Descripción breve opcional
}
```

### 6.4 Tipo: TeamConceptMap (Mapa Conceptual de Equipo)

```typescript
export interface TeamConceptMap {
  id: string;
  title: string;
  conceptMapUrl: string;
  uploadedAt: string;
  description?: string;
}
```

### 6.5 Tipo: TPI

```typescript
export interface TPIProject {
  id: string;
  title: string;
  description: string;
  period: string;
  coverImage?: string;
  evidences: Evidence[];
  reflections: string;
  updatedAt: string;     // Fecha ISO 8601
}
```

### 6.5 Datos del Equipo (`src/data/team.ts`)

Los campos `[TODO]` deben ser completados por cada integrante:

```typescript
import type { Member } from '@/types';

export const TEAM_NAME = 'Stakeholders';
export const TEAM_LOGO = '/assets/logo.webp';

export const members: Member[] = [
  {
    id: 'insaurralde-mariano',
    fullName: 'Insaurralde, Mariano',
    firstName: 'Mariano',
    avatarPath: '/assets/avatars/insaurralde-mariano.webp',
    roles: [/* TODO */],
    strengths: [/* TODO */],
    interests: [/* TODO */],
    bio: '[TODO: Presentación breve de Mariano, max 200 caracteres]',
  },
  {
    id: 'fernandez-matias',
    fullName: 'Fernandez, Matias',
    firstName: 'Matias',
    avatarPath: '/assets/avatars/fernandez-matias.webp',
    roles: [/* TODO */],
    strengths: [/* TODO */],
    interests: [/* TODO */],
    bio: '[TODO]',
  },
  {
    id: 'philippe-maurel',
    fullName: 'Philippe, Maurel',
    firstName: 'Maurel',
    avatarPath: '/assets/avatars/philippe-maurel.webp',
    roles: [/* TODO */],
    strengths: [/* TODO */],
    interests: [/* TODO */],
    bio: '[TODO]',
  },
  {
    id: 'sanchez-franco',
    fullName: 'Sanchez, Franco',
    firstName: 'Franco',
    avatarPath: '/assets/avatars/sanchez-franco.webp',
    roles: [/* TODO */],
    strengths: [/* TODO */],
    interests: [/* TODO */],
    bio: '[TODO]',
  },
  {
    id: 'acosta-sandra',
    fullName: 'Acosta, Sandra',
    firstName: 'Sandra',
    avatarPath: '/assets/avatars/acosta-sandra.webp',
    roles: [/* TODO */],
    strengths: [/* TODO */],
    interests: [/* TODO */],
    bio: '[TODO]',
  },
];
```

### 6.6 Datos de Desafíos (`src/data/challenges.ts`)

```typescript
import type { Challenge } from '@/types';

// Array vacío hasta que se desarrolle el primer desafío.
// Cada desafío se agrega aquí como un objeto Challenge.
export const challenges: Challenge[] = [];
```

### 6.7 Datos del TPI (`src/data/tpi.ts`)

```typescript
import type { TPIProject } from '@/types';

export const tpiProjects: TPIProject[] = [];
```

### 6.8 Datos de Mapas Conceptuales (`src/data/concept-map.ts`)

```typescript
import type { IndividualConceptMap, TeamConceptMap } from '@/types';

export const individualConceptMaps: IndividualConceptMap[] = [];
export const teamConceptMaps: TeamConceptMap[] = [];
```

---

## 7. Requisitos Funcionales

Cada requisito funcional (RF) describe una capacidad que el sistema debe proveer. Los requisitos están organizados por módulo/página.

---

### 7.1 Módulo: Home (Página Principal)

#### 7.1.1 Identificación del Equipo

---

**`RF-001` — Mostrar logo del equipo**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | El Home debe mostrar el logo del equipo Stakeholders ubicado en `/assets/logo.webp` usando el componente `next/image` para optimización automática. |

**Criterios de aceptación:**
- El logo es visible en la sección hero/header del Home.
- El logo carga en formato WebP con fallback apropiado.
- El logo no excede 200px de ancho en desktop y se escala correctamente en mobile.
- El logo tiene alt text descriptivo: `'Logo del equipo Stakeholders'`.

---

**`RF-002` — Mostrar nombre del equipo**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | El nombre `'Stakeholders'` debe estar presente en el hero de la página, renderizado con el estilo tipográfico Orbitron y efecto neón/glow. |

**Criterios de aceptación:**
- El nombre `'Stakeholders'` es el elemento textual más prominente del hero.
- Se aplica fuente Orbitron, peso 900, con gradiente cyberpunk.
- En pantallas < 768px el texto escala adecuadamente sin overflow.

---

**`RF-003` — Listar nombres de todos los integrantes en el hero**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | En la sección de identificación del equipo, se deben listar los cinco integrantes con sus apellidos y nombres. |
| Integrantes | Insaurralde Mariano, Fernandez Matias, Philippe Maurel, Sanchez Franco, Acosta Sandra. |

**Criterios de aceptación:**
- Los cinco nombres aparecen claramente en la sección de identificación.
- El formato es `'Apellido, Nombre'` como figura en el brief.

---

#### 7.1.2 Presentación de Integrantes

---

**`RF-004` — Renderizar tarjetas de integrante**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | La sección `'Integrantes'` del Home muestra una grilla de `AvatarCard`s, una por cada integrante. Cada card contiene: avatar, nombre completo, bio breve, roles, fortalezas e intereses. |

**Criterios de aceptación:**
- Se renderizan exactamente 5 cards, una por integrante.
- El avatar usa `next/image` con `width` y `height` definidos y `objectFit: 'cover'`.
- La card tiene el efecto glassmorphism y borde neón al hacer hover.
- Los roles se muestran como `<Badge>` de colores diferenciados.
- Las fortalezas e intereses se muestran como chips/tags.
- La grilla es responsive: 1 columna en mobile, 2 en tablet, 3 en desktop.

---

**`RF-005` — Avatar del integrante**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | Cada integrante tiene un avatar en formato WebP almacenado en `/assets/avatars/`. El nombre del archivo sigue la convención: `{apellido}-{nombre}.webp` en minúsculas. |

**Criterios de aceptación:**
- El avatar se muestra en forma circular con borde de color neón.
- Si la imagen no carga, se muestra un fallback con las iniciales del integrante.
- Las imágenes tienen lazy loading (`loading="lazy"`) excepto las del primer viewport.

---

#### 7.1.3 Sección de Desafíos en Home

---

**`RF-006` — Mostrar previews de desafíos**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | La sección `'Desafíos'` en el Home muestra cards de preview de los desafíos disponibles. Si no hay desafíos cargados, muestra el `EmptyState`. |

**Criterios de aceptación:**
- Si `challenges.ts` tiene datos, se muestran cards de preview (máximo 3 en Home).
- Cada card preview muestra: número, título, período, tags y un extracto del problema (max 150 caracteres).
- La card tiene un botón/link `'Ver detalle'` que navega a `/desafios/[slug]`.
- Si `challenges.ts` está vacío, se muestra `<EmptyState>` con el mensaje `'Los desafíos se irán publicando a medida que avance la cursada'`.
- Existe un botón `'Ver todos'` que navega a `/desafios`.

---

#### 7.1.4 Rutas Personales de Aprendizaje (RPA)

---

**`RF-007` — Gestión de mapas conceptuales individuales (CRUD)**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | La sección `'Ruta Personal de Aprendizaje'` permite cargar, editar y eliminar mapas conceptuales individuales por integrante, con visualización simple en cards. |

**Criterios de aceptación:**
- La sección tiene su propio anchor `#rpa` para navegación directa.
- Existe acción `'Nuevo mapa'` para crear un registro de mapa individual.
- Cada registro permite `'Editar'` y `'Eliminar'`.
- Se valida `memberId`, `title` y `conceptMapUrl` como obligatorios.
- Al eliminar, se solicita confirmación para evitar borrados accidentales.

---

#### 7.1.5 Mapa Conceptual del Equipo

---

**`RF-008` — Gestión de mapa conceptual de equipo (CRUD)**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | La sección `'Mapa Conceptual'` del equipo permite crear, editar y eliminar mapas conceptuales de equipo con vista previa simple (iframe o imagen). |

**Criterios de aceptación:**
- La sección tiene anchor `#mapa-conceptual`.
- Existe acción `'Nuevo mapa de equipo'`.
- Cada mapa de equipo permite `'Editar'` y `'Eliminar'`.
- La sección puede albergar un iframe, imagen o enlace externo.

---

### 7.2 Módulo: Desafíos

#### 7.2.1 Listado de Desafíos

---

**`RF-009` — Página de listado `/desafios` + CRUD**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | La ruta `/desafios` muestra todos los desafíos en formato simple (grilla o lista) e incluye acciones para crear, editar y eliminar desafíos. |

**Criterios de aceptación:**
- La página tiene título `'DESAFÍOS'` con efecto `<GlitchTitle>`.
- Los desafíos se ordenan por número ascendente.
- Cada card muestra: número (`#01`, `#02`...), título, período, tags, extracto del problema y botón `'Ver detalle'`.
- La grilla es responsive: 1 columna mobile, 2 tablet, 3 desktop.
- La página tiene metadata SEO (`title`, `description`) apropiada.
- Existe botón `'Nuevo desafío'`.
- Cada desafío visible tiene acciones `'Editar'` y `'Eliminar'`.
- La eliminación solicita confirmación.

---

#### 7.2.2 Detalle de Desafío

---

**`RF-010` — Página de detalle `/desafios/[slug]`**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | Cada desafío tiene su propia página de detalle accesible en `/desafios/[slug]`. Esta página muestra toda la información del desafío estructurada en secciones. |

**Estructura de la página de detalle:**

| Sección | Contenido |
|---|---|
| Hero | Número del desafío, título y período |
| Problema Abordado | Texto descriptivo del problema |
| Solución Propuesta | Descripción de la solución implementada |
| Evidencias | Lista de links/embeds a documentos, presentaciones y videos |
| Herramientas Utilizadas | Badges/chips de cada herramienta |
| Reflexión del Equipo | Qué aprendieron, qué harían distinto, competencias desarrolladas |

**Criterios de aceptación:**
- El slug se genera estáticamente en build time usando `generateStaticParams`.
- Si el slug no existe, la página devuelve 404 con página de error personalizada.
- Las evidencias de tipo `'video'` se renderizan como iframes de YouTube/Vimeo si la URL lo permite.
- La página tiene breadcrumbs: `Inicio > Desafíos > [Nombre del Desafío]`.
- Hay navegación a `'Desafío anterior'` y `'Desafío siguiente'`.
- Existe acción `'Editar desafío'` desde la página de detalle.

---

### 7.3 Módulo: Trabajo Práctico Integrador (TPI)

---

**`RF-011` — Gestión de TPI en `/tpi` (CRUD)**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | La ruta `/tpi` permite crear, editar y eliminar registros de TPI con estructura simple de título, descripción, evidencias y reflexión. |

**Criterios de aceptación:**
- La página `/tpi` está accesible y no devuelve 404.
- Existe botón `'Nuevo TPI'`.
- Cada registro TPI permite `'Editar'` y `'Eliminar'`.
- Se valida título, período, descripción y reflexión como obligatorios.
- La interfaz prioriza simplicidad (sin reportes de avances ni paneles analíticos).

---

### 7.4 Módulo: Navegación

---

**`RF-012` — Barra de navegación principal**

| Campo | Detalle |
|---|---|
| Prioridad | Alta |
| Descripción | La `NavBar` es un componente sticky que permanece visible durante el scroll. Contiene el logo, los ítems de navegación principales y un indicador de sección activa. |

**Ítems del menú:**

| Ítem | Destino |
|---|---|
| Inicio | `/` (con logo del equipo a la izquierda) |
| Desafíos | `/desafios` |
| TPI | `/tpi` |

**Criterios de aceptación:**
- La NavBar usa `position: sticky` con `top: 0` y tiene efecto `backdrop-blur` con fondo semitransparente.
- En mobile (< 768px) se convierte en hamburger menu con panel lateral o desplegable.
- El ítem activo se resalta con color neón y underline animado.
- Smooth scroll a las secciones anchor del Home.
- La NavBar tiene `aria-label="Navegación principal"` para accesibilidad.

---

**`RF-013` — Footer**

| Campo | Detalle |
|---|---|
| Prioridad | Media |
| Descripción | El footer aparece en todas las páginas y muestra información del equipo. |

**Contenido del footer:**
- Nombre del equipo: `'Stakeholders'` con logo pequeño.
- Lista de integrantes.
- Nombre de la asignatura `[TODO]`.
- Universidad Tecnológica Nacional.
- Año de cursada.

---

**`RF-014` — Página 404 personalizada**

| Campo | Detalle |
|---|---|
| Prioridad | Baja |
| Descripción | Una página `not-found.tsx` estilizada con la paleta cyberpunk que muestra un mensaje creativo y un botón para volver al Home. |

**Criterios de aceptación:**
- Mensaje con estética cyberpunk, por ejemplo: `'ERROR_404: Página no encontrada en la matrix'`.
- Botón `'Volver al inicio'` que navega a `/`.

---

## 8. Requisitos No Funcionales

### 8.1 Rendimiento

| ID | Requisito | Métrica Objetivo | Prioridad |
|---|---|---|---|
| RNF-001 | LCP (Largest Contentful Paint) | < 2.5s en conexión 4G | Alta |
| RNF-002 | CLS (Cumulative Layout Shift) | < 0.1 | Alta |
| RNF-003 | INP (Interaction to Next Paint) | < 200ms | Alta |
| RNF-004 | Tamaño del bundle JS inicial | < 200KB gzipped | Media |
| RNF-005 | Lighthouse Performance Score | >= 90 en móvil | Media |
| RNF-006 | Carga de imágenes | Lazy loading en imágenes fuera del viewport | Alta |

### 8.2 Usabilidad

| ID | Requisito | Detalle | Prioridad |
|---|---|---|---|
| RNF-007 | Responsive design | Soporta viewports desde 320px hasta 2560px sin scroll horizontal | Alta |
| RNF-008 | Touch targets | Mínimo 44×44px para todos los elementos interactivos en mobile | Alta |
| RNF-009 | Contraste de texto | Ratio mínimo 4.5:1 para texto normal, 3:1 para texto grande | Alta |
| RNF-010 | Navegación por teclado | Todos los elementos interactivos son alcanzables con Tab/Enter | Media |
| RNF-011 | Legibilidad | Tamaño de fuente mínimo 14px para cuerpo de texto | Alta |
| RNF-012 | Feedback visual | Todos los elementos interactivos tienen estados `:hover`, `:focus`, `:active` | Alta |

### 8.3 Accesibilidad

| ID | Requisito | Detalle | Prioridad |
|---|---|---|---|
| RNF-013 | WCAG 2.1 AA | El sitio cumple el nivel AA de WCAG 2.1 | Alta |
| RNF-014 | HTML semántico | Uso correcto de `main`, `nav`, `section`, `article`, `header`, `footer`, `h1`-`h6` | Alta |
| RNF-015 | ARIA labels | Todos los íconos sin texto visible tienen `aria-label` o `aria-hidden="true"` | Alta |
| RNF-016 | Alt text | Todas las imágenes tienen atributo `alt` descriptivo | Alta |
| RNF-017 | Skip navigation | Enlace `'Saltar al contenido principal'` al inicio del DOM | Media |

### 8.4 Mantenibilidad y Calidad de Código

| ID | Requisito | Detalle | Prioridad |
|---|---|---|---|
| RNF-018 | Cobertura de tipos | No se permiten tipos `any` implícitos; strict mode activado | Alta |
| RNF-019 | Documentación de componentes | Cada componente tiene un comentario JSDoc con su propósito y props | Media |
| RNF-020 | Convenciones de nomenclatura | PascalCase para componentes, camelCase para variables/funciones, kebab-case para rutas | Alta |
| RNF-021 | Extensión de archivos | Componentes con JSX usan `.tsx`; módulos sin JSX usan `.ts` | Alta |
| RNF-022 | Estructura de exports | Cada carpeta de componentes tiene un `index.ts` con re-exports | Media |
| RNF-023 | Sin magic numbers | Constantes con nombre significativo en lugar de valores literales | Baja |

### 8.5 SEO

| ID | Requisito | Detalle | Prioridad |
|---|---|---|---|
| RNF-024 | Metadata | Cada página tiene `title` y `description` únicos usando `Metadata` de Next.js | Media |
| RNF-025 | Open Graph | Metadata OG para compartir en redes sociales | Baja |
| RNF-026 | Sitemap | Archivo `sitemap.xml` generado automáticamente | Baja |
| RNF-027 | URLs amigables | Slugs en minúsculas, sin espacios, con guiones medios | Alta |

---

## 9. Especificación Detallada de Páginas y Componentes

### 9.1 Root Layout (`src/app/layout.tsx`)

El layout raíz envuelve todo el sitio y es responsable de:

- Importar y configurar las fuentes (Orbitron, Exo 2, Inter, JetBrains Mono) usando `next/font/google`.
- Incluir el componente `<NavBar>` antes del `<main>`.
- Incluir el componente `<Footer>` después del `<main>`.
- Definir el `lang="es"` en el tag `<html>`.
- Importar `globals.css` con la definición de variables CSS de la paleta.
- Configurar la metadata global del sitio.

```typescript
export const metadata: Metadata = {
  title: { default: 'Stakeholders — Portfolio', template: '%s | Stakeholders' },
  description: 'Portfolio académico del equipo Stakeholders — Ingeniería en Sistemas de Información.',
};
```

### 9.2 Variables CSS Globales (`src/app/globals.css`)

```css
:root {
  --color-cyber-cyan: #00F5FF;
  --color-neon-magenta: #FF00FF;
  --color-electric-purple: #9B30FF;
  --color-neon-green: #39FF14;
  --color-void-black: #050508;
  --color-deep-space: #0D0D1A;
  --color-dark-matter: #1A1A2E;
  --color-nebula: #2D2D4E;
  --color-star-light: #8B8BAD;
  --color-white-photon: #E8E8FF;
  --color-hot-pink: #FF2D78;
  --color-grid-line: #1E1E3A;
}

html {
  scroll-behavior: smooth;
  background-color: var(--color-void-black);
  color: var(--color-white-photon);
}

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

### 9.3 Home Page (`src/app/page.tsx`)

La Home page es un Server Component que compone las siguientes secciones en orden:

| Orden | Componente | ID Anchor | Estado Inicial |
|---|---|---|---|
| 1 | `<HeroSection>` | — | Siempre visible |
| 2 | `<TeamSection>` | `#equipo` | Siempre visible |
| 3 | `<MembersSection>` | `#integrantes` | Siempre visible |
| 4 | `<ChallengesSection>` | `#desafios` | EmptyState o datos |
| 5 | `<RPASection>` | `#rpa` | EmptyState |
| 6 | `<ConceptMapSection>` | `#mapa-conceptual` | EmptyState |

[NOTA] Se elimina explícitamente el apartado `Insights` de Home para mantener una interfaz simple y funcional.

#### 9.3.1 HeroSection

La sección hero ocupa el `100vh` del viewport inicial. Incluye:

- Fondo con `<GridBackground>` animado y efecto de partículas opcional.
- Logo del equipo centrado en la parte superior.
- Título `'STAKEHOLDERS'` con `<GlitchTitle>` y gradiente cyan-purple.
- Subtítulo con descripción del equipo.
- Lista de los 5 integrantes en formato inline con separadores.
- Botón CTA `'Explorar Portfolio'` con scroll suave a `#integrantes`.
- Indicador de scroll (chevron animado) en la parte inferior.

#### 9.3.2 TeamSection

Sección de identificación formal del equipo. Muestra:
- Logo del equipo en tamaño mediano.
- Nombre del equipo en tipografía Orbitron.
- Nombre de la asignatura y carrera `[TODO]`.
- Año de cursada.

#### 9.3.3 MembersSection

Grilla de `<AvatarCard>`s. Cada card debe:
- Mostrar el avatar circular con borde neón (color único por integrante recomendado).
- Nombre completo en fuente Exo 2 bold.
- Bio en fuente Inter, 14px.
- Badges de roles con colores diferenciados.
- Lista de fortalezas e intereses como chips.
- Efecto hover: escala 1.02, glow más intenso.

#### 9.3.4 ChallengesSection

Muestra los últimos 3 desafíos publicados o `<EmptyState>`. Incluye:
- Título de sección con número de desafíos disponibles.
- Grilla de `<ChallengePreviewCard>`s.
- Botón `'Ver todos los desafíos'` que navega a `/desafios`.

#### 9.3.5 RPASection

Incluye funcionalidades CRUD simples para mapas individuales: crear, editar y eliminar registros por integrante.

#### 9.3.6 ConceptMapSection

Incluye funcionalidades CRUD simples para mapa(s) de equipo: crear, editar y eliminar registros.

### 9.4 Página Desafíos (`/desafios/page.tsx`)

- Genera estáticamente en build time.
- Importa el array de challenges desde `src/data/challenges.ts`.
- Metadata: `title='Desafíos | Stakeholders'`.
- Hero de sección con título `'DESAFÍOS'`.
- Grilla responsive de `<ChallengeCard>`s.
- Acciones CRUD simples: `Nuevo`, `Editar`, `Eliminar`.
- Se elimina el uso de sidebar para esta página.

### 9.5 Página Detalle Desafío (`/desafios/[slug]/page.tsx`)

- Generación estática con `generateStaticParams`. Si el slug no existe, llama `notFound()`.
- Breadcrumb: `Inicio / Desafíos / [Título del Desafío]`.
- Estructura: Hero > Problema > Solución > Evidencias > Herramientas > Reflexión del Equipo.
- Navegación: `'Desafío anterior'` y `'Desafío siguiente'`.

### 9.6 Página TPI (`/tpi/page.tsx`)

- Lista de registros TPI con vista simple y acciones CRUD.
- Acción `Nuevo TPI` para alta de registro.
- Acciones `Editar` y `Eliminar` por registro.
- Se elimina el reporte de avances de TPI.

---

## 10. Lineamientos UX Detallados

### 10.1 Principios de Navegación

- Máximo 3 niveles de profundidad en la jerarquía de navegación.
- El usuario siempre sabe dónde está: NavBar resalta ítem activo, breadcrumbs en páginas internas.
- Smooth scroll para links dentro de la misma página (`scroll-behavior: smooth`).
- Tiempo de respuesta visual máximo de 100ms para interacciones del usuario.

### 10.2 Principios de Diseño Visual

- Contraste mínimo 4.5:1 para texto sobre fondo. Validar con [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
- Los colores neón (cyan, magenta, green) se usan como **acentos**; nunca como fondo de texto extenso.
- El espacio oscuro es un elemento de diseño activo; no rellenar todo con contenido.
- Las animaciones deben respetar `prefers-reduced-motion`.
- Máximo 3 fuentes distintas en uso simultáneo.

### 10.3 Diseño Responsive — Breakpoints

| Breakpoint | Clase Tailwind | Rango | Comportamiento clave |
|---|---|---|---|
| Mobile | `default` | 320px – 767px | 1 columna, NavBar hamburger, font sizes reducidos |
| Tablet | `md:` | 768px – 1023px | 2 columnas, NavBar completa compacta |
| Desktop | `lg:` | 1024px – 1279px | 3 columnas, layout completo |
| Wide Desktop | `xl:` | 1280px+ | Contenedor max-width centrado con paddings amplios |

### 10.4 Estados de Componentes

| Estado | Descripción | Implementación |
|---|---|---|
| Default | Estado en reposo | Estilo base sin modificadores |
| Hover | Mouse sobre el elemento | `hover:` con glow effect y `scale(1.02)` |
| Focus | Enfoque via teclado | `focus-visible:` con outline neón de 2px |
| Active | Click/tap en progreso | `active:` con `scale(0.98)` |
| Disabled | No interactuable | Opacidad 50%, `cursor-not-allowed` |
| Loading | Cargando | Skeleton loader o spinner con efecto cyberpunk |
| Empty | Sin datos | Componente `<EmptyState>` con ilustración y mensaje |
| Error | Error en carga | Mensaje con `--color-hot-pink` e ícono de alerta |

---

## 11. Criterios de Calidad del Micrositio

La asignatura especifica los siguientes criterios que el micrositio debe evidenciar:

| Criterio | Descripción | Cómo se evidencia en el sitio |
|---|---|---|
| Pensamiento estructurado | Lógica y orden en la presentación de contenidos | Arquitectura de información clara: Home > Desafíos > Detalle. Jerarquía visual consistente. Secciones bien delimitadas. |
| Capacidad de síntesis | Habilidad para comunicar lo esencial | Bios de 200 caracteres máximo. Extractos de desafíos de 150 chars. Badges y chips para información condensada. |
| Trazabilidad del aprendizaje | Registro cronológico del proceso formativo | Desafíos ordenados cronológicamente con fecha. RPA individual. Reflexiones del equipo en cada desafío. |
| Integración interdisciplinaria | Conexión entre distintas áreas del conocimiento | Herramientas utilizadas por desafío. Tags temáticos. Mapas conceptuales integradores. |
| Comunicación técnica efectiva | Expresión clara de conceptos técnicos | Código TypeScript documentado. Estructura de datos explícita. README detallado. Nomenclatura estándar. |

---

## 12. Roadmap de Desarrollo

### Sprint 1 — Fundamentos y Home (Semana 1–2)

| Tarea | Responsable | RF/RNF cubiertos | Prioridad |
|---|---|---|---|
| Inicializar proyecto Next.js + Bun + TypeScript + Tailwind | Equipo | — | Alta |
| Configurar variables CSS (paleta) en `globals.css` | Equipo | — | Alta |
| Configurar fuentes con `next/font` | Equipo | RNF-018 | Alta |
| Crear estructura `/public/assets/` y `/avatars/` | Equipo | RF-001, RF-005 | Alta |
| Implementar `<NavBar>` responsive con hamburger menu | Equipo | RF-012 | Alta |
| Implementar `<Footer>` | Equipo | RF-013 | Media |
| Implementar `<HeroSection>` | Equipo | RF-001, RF-002, RF-003 | Alta |
| Implementar `<TeamSection>` + `<MembersSection>` | Equipo | RF-004, RF-005 | Alta |
| Definir tipos TypeScript en `src/types/index.ts` | Equipo | Todos los RF | Alta |
| Cargar datos de integrantes en `team.ts` | Cada integrante | RF-004 | Alta |
| Deploy a Vercel (preview environment) | Equipo | — | Media |

### Sprint 2 — Sección Desafíos (Semana 3–4)

| Tarea | Responsable | RF/RNF cubiertos | Prioridad |
|---|---|---|---|
| Implementar `<ChallengesSection>` en Home (EmptyState) | Equipo | RF-006 | Alta |
| Implementar página `/desafios` | Equipo | RF-009 | Alta |
| Implementar página `/desafios/[slug]` | Equipo | RF-010 | Alta |
| Cargar primer desafío en `challenges.ts` | Equipo | RF-006, RF-009 | Alta |
| Implementar breadcrumbs de navegación | Equipo | RF-010 | Media |
| Implementar navegación prev/next en detalle | Equipo | RF-010 | Media |
| Página 404 personalizada (`not-found.tsx`) | Equipo | RF-014 | Baja |
| Validar Lighthouse score >= 90 en mobile | Equipo | RNF-005 | Alta |

### Sprint 3 — TPI + Contenido Final (Fin de cursada)

| Tarea | Responsable | RF/RNF cubiertos | Prioridad |
|---|---|---|---|
| Implementar CRUD de mapas conceptuales individuales | Equipo | RF-007 | Alta |
| Implementar CRUD de mapa conceptual de equipo | Equipo | RF-008 | Alta |
| Implementar CRUD de TPI | Equipo | RF-011 | Alta |
| Revisar todos los textos y metadatos SEO | Equipo | RNF-024 | Media |
| Validar accesibilidad WCAG 2.1 AA con axe DevTools | Equipo | RNF-013 | Alta |
| Revisión final y deploy a producción | Equipo | — | Alta |

### Sprint 4 — Simplificación y Operación (Semana 5–7)

| Tarea | Responsable | RF/RNF cubiertos | Prioridad |
|---|---|---|---|
| Simplificar vistas complejas y remover Insights | Equipo | RF-006, RF-009 | Alta |
| Eliminar sidebar de Desafíos y mantener navegación lineal | Equipo | RF-009, RF-012 | Alta |
| Eliminar reporte de avances de TPI | Equipo | RF-011 | Alta |
| Unificar formularios CRUD para Desafíos, TPI y Mapas | Equipo | RF-007, RF-008, RF-009, RF-011 | Alta |
| Consolidar estados de confirmación/borrado con UI mínima | Equipo | RNF-012 | Media |

---

## 13. Configuración Recomendada de Herramientas

### 13.1 `next.config.ts`

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [], // Agregar dominios externos si se usan imágenes remotas
  },
  experimental: {
    typedRoutes: true, // Type-safe routing
  },
};

export default nextConfig;
```

### 13.2 `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 13.3 `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-cyan':       'var(--color-cyber-cyan)',
        'neon-magenta':     'var(--color-neon-magenta)',
        'electric-purple':  'var(--color-electric-purple)',
        'neon-green':       'var(--color-neon-green)',
        'void-black':       'var(--color-void-black)',
        'deep-space':       'var(--color-deep-space)',
        'dark-matter':      'var(--color-dark-matter)',
        'nebula':           'var(--color-nebula)',
        'star-light':       'var(--color-star-light)',
        'white-photon':     'var(--color-white-photon)',
        'hot-pink':         'var(--color-hot-pink)',
        'grid-line':        'var(--color-grid-line)',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        exo2:     ['var(--font-exo2)', 'sans-serif'],
        inter:    ['var(--font-inter)', 'sans-serif'],
        mono:     ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### 13.4 Scripts en `package.json`

```json
{
  "scripts": {
    "dev":   "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint":  "next lint",
    "fmt":   "prettier --write ./src"
  }
}
```

---

## 14. Plan de Modernización con shadcn/ui

### 14.1 Objetivo Estratégico

Mantener una experiencia simple, funcional y mantenible, evitando sobrecarga visual o interacción innecesaria, y maximizando:

- Claridad operativa.
- Facilidad de uso.
- Trazabilidad del aprendizaje.
- Eficiencia de implementación para desarrolladores humanos y agentes de IA.

### 14.2 Alcance de Modernización

El plan utiliza el registro `@shadcn` ya configurado en el proyecto con enfoque acotado:

1. Componentes `registry:ui` para formularios CRUD, navegación simple y feedback básico.
2. Exclusión explícita de bloques analíticos complejos para evitar confusión.

[NOTA] El alcance obligatorio se limita a componentes que aporten simplicidad funcional directa.

### 14.3 Principios de Implementación

1. Mantener la identidad visual existente: no reemplazar el lenguaje cyberpunk, sino potenciarlo con primitives accesibles.
2. Adoptar por capas: infraestructura UI primero, CRUD operativo después, mejoras visuales al final.
3. Evitar deuda de estilos: cada componente shadcn debe pasar por wrappers de diseño (`className`, tokens y variantes propias).
4. Priorizar impacto UX: legibilidad y acciones claras antes de sumar complejidad.

### 14.4 Arquitectura de Integración (Humano + IA)

#### 14.4.1 Convención de carpetas recomendada

```text
src/components/
  shadcn/
    ui/                 # componentes base importados desde shadcn
  composed/
    navigation/         # wrappers de navegación del proyecto
    content/            # tarjetas, bloques y layouts de dominio
    feedback/           # loading, toasts, alerts, empty states
```

#### 14.4.2 Regla de composición

- `shadcn/ui`: capa base sin lógica de negocio.
- `composed/*`: capa de negocio con estilos de Stakeholders.
- `sections/*`: capa final de página.

### 14.5 Plan de Entrega por Fases

#### Fase 1 — Quick Wins (alto impacto, bajo riesgo)

Objetivo: aumentar calidad percibida en navegación y feedback sin cambiar estructura de datos.

Componentes foco:
- `breadcrumb`, `tabs`, `accordion`, `tooltip`
- `skeleton`, `spinner`, `sonner`, `alert`
- `dialog`, `sheet`, `pagination`

Entregables:
1. Breadcrumb consistente en `/desafios/[slug]`.
2. Loading states en listados y detalle.
3. Feedback de acciones y errores con toasts.
4. Menú mobile en `sheet` con mejor accesibilidad.

#### Fase 2 — Operación simple (interacción mínima)

Objetivo: mantener interacción clara y directa para tareas CRUD.

Componentes foco:
- `input`, `select`, `textarea`, `dialog`
- `dropdown-menu`, `alert`, `sonner`

Entregables:
1. Formularios CRUD simples para Desafíos, TPI y Mapas.
2. Confirmación de acciones críticas (editar/eliminar).
3. Mensajes de feedback consistentes para alta, edición y baja.

#### Fase 3 — Consolidación funcional

Objetivo: estabilizar una arquitectura simple, mantenible y sin sobreingeniería.

Componentes foco:
- `field`, `form`, `input-group`, `toggle-group`
- `table` (listados CRUD simples)

Entregables:
1. Layout limpio y lineal en Desafíos (sin sidebar).
2. Eliminación de Insights y paneles complejos.
3. Eliminación de reporte de avances de TPI.

### 14.6 Matriz de Priorización Ejecutiva

| Prioridad | Criterio | Resultado esperado |
|---|---|---|
| Alta | Mejora de navegación, estados y claridad | Reducción de fricción y mayor tiempo de exploración |
| Media | Robustez de CRUD y consistencia de formularios | Menor error operativo al cargar/editar contenido |
| Baja/Condicional | Funciones especializadas o de futuro | Preparación para crecimiento sin bloquear entregas actuales |

### 14.7 Definición de Hecho (DoD) para cada componente integrado

Un componente shadcn se considera implementado cuando cumple todos los puntos:

1. Accesibilidad mínima validada (focus visible, roles y navegación teclado).
2. Responsive validado en mobile, tablet y desktop.
3. Tema cyberpunk aplicado mediante tokens de `globals.css`.
4. Sin regresiones en lint/build.
5. Incluye ejemplo de uso en una sección real de la app.

### 14.8 Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Inconsistencia visual entre componentes custom y shadcn | Media | Alta | Crear wrappers de estilo y variantes estándar del proyecto |
| Sobrecarga de dependencias por uso indiscriminado | Media | Media | Incorporar componentes por fase y medir bundle |
| Complejidad innecesaria en páginas simples | Alta | Media | Aplicar criterio de valor real por componente |
| Regresiones de accesibilidad en personalizaciones | Media | Alta | Checklist AA obligatorio por PR |

### 14.9 KPIs de Éxito de la Modernización

| KPI | Línea base | Objetivo |
|---|---|---|
| Tiempo medio de exploración por sesión | Baseline actual | +20% |
| Interacciones con evidencias (click en recursos) | Baseline actual | +30% |
| Rebote en listado de desafíos | Baseline actual | -15% |
| Score de accesibilidad Lighthouse | >= 90 | Mantener o mejorar |
| Satisfacción visual en revisión docente/equipo | Cualitativo | Mejorar de "informativo" a "producto" |

---

---

## Apéndice A — Checklist de Aceptación

### A.1 Funcionalidad

| | Criterio | Estado |
|---|---|---|
| ☐ | Home carga correctamente en Chrome, Firefox, Safari y Edge | Pendiente |
| ☐ | Logo del equipo visible en hero | Pendiente |
| ☐ | Los 5 integrantes aparecen con avatar, bio, roles y fortalezas | Pendiente |
| ☐ | NavBar funciona en mobile (hamburger menu) | Pendiente |
| ☐ | Smooth scroll a secciones desde NavBar | Pendiente |
| ☐ | Página `/desafios` carga correctamente | Pendiente |
| ☐ | Cada desafío tiene su página `/desafios/[slug]` funcional | Pendiente |
| ☐ | Página `/tpi` existe y no devuelve 404 | Pendiente |
| ☐ | CRUD de desafíos (alta, edición y baja) funcional | Pendiente |
| ☐ | CRUD de TPI (alta, edición y baja) funcional | Pendiente |
| ☐ | CRUD de mapas conceptuales individuales funcional | Pendiente |
| ☐ | CRUD de mapa conceptual de equipo funcional | Pendiente |
| ☐ | Apartado Insights eliminado de Home | Pendiente |
| ☐ | Sidebar eliminado de Desafíos | Pendiente |
| ☐ | Reporte de avances eliminado de TPI | Pendiente |
| ☐ | Página 404 personalizada funciona | Pendiente |
| ☐ | RPASection y ConceptMapSection tienen EmptyState o contenido | Pendiente |

### A.2 Rendimiento y Calidad

| | Criterio | Estado |
|---|---|---|
| ☐ | Lighthouse Performance >= 90 en mobile | Pendiente |
| ☐ | LCP < 2.5s en conexión 4G simulada | Pendiente |
| ☐ | No hay errores en consola del browser en producción | Pendiente |
| ☐ | No hay tipos `any` en el código TypeScript | Pendiente |
| ☐ | ESLint sin warnings ni errores (`bun run lint`) | Pendiente |
| ☐ | Build de producción exitoso (`bun run build`) sin errores | Pendiente |

### A.3 Accesibilidad

| | Criterio | Estado |
|---|---|---|
| ☐ | Lighthouse Accessibility Score >= 90 | Pendiente |
| ☐ | Todas las imágenes tienen `alt` text | Pendiente |
| ☐ | Todos los elementos interactivos son alcanzables con Tab | Pendiente |
| ☐ | Contraste de texto >= 4.5:1 en elementos de cuerpo | Pendiente |
| ☐ | HTML semántico: `main`, `nav`, `section`, `article`, `h1`–`h6` correctos | Pendiente |

---

## Apéndice B — Referencias de Implementación para Agentes IA

> Esta sección provee instrucciones específicas para agentes de IA que implementen el código de este proyecto. Las instrucciones son **obligatorias** y no deben interpretarse como sugerencias opcionales.

### B.1 Reglas de Generación de Código

- **SIEMPRE** usar TypeScript estricto. No usar `any`. Definir todos los tipos en `src/types/index.ts`.
- **SIEMPRE** usar el App Router de Next.js 15. No usar Pages Router.
- Los componentes son **Server Components** por defecto. Usar `'use client'` solo si se necesita estado, efectos o event handlers del browser.
- **SIEMPRE** usar `next/image` para imágenes, nunca el tag `<img>` nativo.
- **SIEMPRE** usar `next/link` para enlaces internos, nunca `<a href="...">`.
- Las clases de Tailwind siguen el orden: layout > sizing > spacing > typography > colors > effects.
- Los colores del design system se referencian como: `text-cyber-cyan`, `bg-void-black`, `border-electric-purple`, etc.
- Componentes con `'use client'` deben ser **los más pequeños posibles** (leaf components).

### B.2 Patrón para Secciones con Estado Vacío

```typescript
// Patrón recomendado para secciones con contenido opcional
import { challenges } from '@/data/challenges';
import { EmptyState, SectionWrapper } from '@/components/ui';
import ChallengePreviewCard from '@/components/ui/ChallengePreviewCard';

export default function ChallengesSection() {
  if (challenges.length === 0) {
    return (
      <SectionWrapper id="desafios">
        <EmptyState
          title="Desafíos"
          message="Los desafíos se publicarán durante la cursada."
        />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="desafios">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.slice(0, 3).map((challenge) => (
          <ChallengePreviewCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </SectionWrapper>
  );
}
```

### B.3 Patrón para `generateStaticParams`

```typescript
// src/app/desafios/[slug]/page.tsx
import { challenges } from '@/data/challenges';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return challenges.map((c) => ({ slug: c.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const challenge = challenges.find((c) => c.id === params.slug);
  if (!challenge) return {};
  return {
    title: challenge.title,
    description: challenge.problem.slice(0, 150),
  };
}

export default function ChallengePage({ params }: Props) {
  const challenge = challenges.find((c) => c.id === params.slug);
  if (!challenge) notFound();

  return (
    <main>
      {/* Renderizar el desafío aquí */}
    </main>
  );
}
```

### B.4 Patrón para `AvatarCard`

```typescript
// src/components/ui/AvatarCard.tsx
import Image from 'next/image';
import type { Member } from '@/types';
import Badge from './Badge';

interface Props {
  member: Member;
}

/**
 * AvatarCard — Muestra la información de un integrante del equipo.
 * Server Component. No requiere interactividad del cliente.
 */
export default function AvatarCard({ member }: Props) {
  return (
    <article className="relative group p-6 rounded-xl border border-nebula bg-deep-space backdrop-blur-sm
                        hover:border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]
                        transition-all duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-electric-purple
                        group-hover:border-cyber-cyan transition-colors duration-300">
          <Image
            src={member.avatarPath}
            alt={`Avatar de ${member.firstName}`}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
        <h3 className="font-exo2 font-bold text-white-photon text-lg text-center">
          {member.fullName}
        </h3>
        <p className="text-star-light text-sm text-center leading-relaxed">{member.bio}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {member.roles.map((role) => (
            <Badge key={role} color="purple">{role}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
```

### B.5 Efecto Neón — CSS Customización

```css
/* Añadir en globals.css para clases de utilidad adicionales */

.glow-cyan {
  box-shadow:
    0 0 8px var(--color-cyber-cyan),
    0 0 16px color-mix(in srgb, var(--color-cyber-cyan) 40%, transparent);
}

.glow-purple {
  box-shadow:
    0 0 8px var(--color-electric-purple),
    0 0 16px color-mix(in srgb, var(--color-electric-purple) 40%, transparent);
}

.glow-magenta {
  box-shadow:
    0 0 8px var(--color-neon-magenta),
    0 0 16px color-mix(in srgb, var(--color-neon-magenta) 40%, transparent);
}

.text-gradient-cyber {
  background: linear-gradient(135deg, var(--color-cyber-cyan), var(--color-electric-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Apéndice C — Matriz Completa de Componentes shadcn/ui

### C.1 Catálogo completo `registry:ui` y aplicación recomendada

| Componente | Aplicación en Stakeholders | Prioridad | Fase |
|---|---|---|---|
| accordion | Expandir secciones de reflexión, evidencias o FAQ académica | Alta | 1 |
| alert | Mensajes de estado de publicación y avisos importantes | Alta | 1 |
| alert-dialog | Confirmaciones de acciones críticas en futuras ediciones | Baja | 3 |
| aspect-ratio | Proporción consistente de miniaturas y videos | Media | 2 |
| avatar | Avatares de integrantes en cards y nav contextual | Media | 2 |
| badge | Etiquetas de herramientas, estado y categorías | Alta | 1 |
| breadcrumb | Contexto de navegación en detalle de desafío | Alta | 1 |
| button | Base unificada de CTA y acciones | Alta | 1 |
| button-group | Acciones agrupadas en filtros o vistas | Media | 2 |
| calendar | Timeline o agenda de hitos de cursada | Baja | 3 |
| card | Contenedor estándar para secciones y previews | Alta | 1 |
| carousel | Galería de evidencias (imágenes/video) | Baja | 3 |
| chart | [DESPRIORIZADO] No usar en versión simple | Baja | 3 |
| checkbox | Filtros múltiples por tags/herramientas | Media | 2 |
| collapsible | Mostrar/ocultar bloques secundarios | Media | 2 |
| combobox | Filtro opcional; usar solo si aporta claridad | Baja | 3 |
| command | [DESPRIORIZADO] Evitar paleta de comandos en versión simple | Baja | 3 |
| context-menu | Acciones rápidas sobre tarjetas (desktop) | Baja | 3 |
| dialog | Modales para ampliar contenido o confirmar acciones | Alta | 1 |
| drawer | Panel inferior en mobile para filtros | Media | 2 |
| dropdown-menu | Menús de acciones/ordenamiento | Alta | 2 |
| empty | Estados vacíos consistentes por sección | Alta | 1 |
| field | Campos estructurados en formularios complejos | Media | 3 |
| form | Formularios validados para CRUD de contenido | Alta | 2 |
| hover-card | Preview contextual opcional | Baja | 3 |
| input | Búsqueda y entrada textual | Alta | 2 |
| input-group | Entradas con acciones, iconos o botones | Media | 3 |
| input-otp | Casos especiales de verificación (no prioritario) | Baja | 3 |
| item | Listados visuales ricos de recursos/hitos | Media | 2 |
| label | Etiquetado accesible de campos | Alta | 1 |
| menubar | Navegación de escritorio avanzada | Baja | 3 |
| navigation-menu | Menú estructurado simple (sin patrones tipo app) | Media | 3 |
| pagination | Navegación entre páginas de desafíos | Alta | 1 |
| popover | Ayuda contextual y overlays livianos | Media | 2 |
| progress | [DESPRIORIZADO] No usar en versión simple | Baja | 3 |
| radio-group | Selección única en filtros/formularios | Media | 2 |
| resizable | [DESPRIORIZADO] No usar en versión simple | Baja | 3 |
| scroll-area | Uso opcional solo para listados largos | Baja | 3 |
| select | Filtros por período/estado/herramienta | Alta | 2 |
| separator | Separación visual consistente entre bloques | Alta | 1 |
| sheet | Navegación móvil y panel lateral de acciones | Alta | 1 |
| sidebar | [ELIMINADO] No usar en Desafíos | Baja | 3 |
| skeleton | Carga perceptual y prevención de layout shift | Alta | 1 |
| slider | Filtro por rangos (dificultad/fecha/puntaje) | Baja | 3 |
| sonner | Toasts modernos para feedback no intrusivo | Alta | 1 |
| spinner | Indicador de carga puntual | Media | 1 |
| switch | Preferencias binarias (vista compacta, etc.) | Media | 2 |
| table | Vista tabular de métricas/evidencias | Media | 2 |
| tabs | Organización de contenido largo en paneles | Alta | 1 |
| textarea | Entradas largas (reflexiones, feedback) | Media | 3 |
| toggle | Activación rápida de opciones de vista | Media | 2 |
| toggle-group | Grupo de filtros por estado o tipo | Alta | 2 |
| tooltip | Ayuda contextual en iconos y acciones | Alta | 1 |
| kbd | Visualización de atajos de teclado | Media | 2 |
| native-select | Fallback ligero para casos simples/mobile | Baja | 3 |
| direction | Utilidad de dirección para i18n futuro | Baja | 3 |

### C.2 Bloques `registry:block` recomendados

| Bloque | Uso sugerido |
|---|---|
| `sidebar-01` a `sidebar-16` | [NO APLICAR] Excluidos por criterio de simplicidad |
| `dashboard-01` | Referencia para un tablero de progreso académico |
| `chart-*` | [NO APLICAR] Excluidos por eliminación de Insights |

### C.3 Guía para agentes IA (ejecución incremental)

1. Integrar máximo 3 a 5 componentes por PR.
2. Validar accesibilidad y responsive por componente.
3. No reemplazar componentes custom existentes si no hay mejora medible.
4. Documentar cada integración con: objetivo, archivos impactados y criterio de aceptación validado.
5. Priorizar primero Fase 1, luego Fase 2 y por último Fase 3.

---

*— FIN DEL DOCUMENTO SRS v1.2.0 —*

*Equipo Stakeholders · Ingeniería en Sistemas de Información · UTN · 2026*
