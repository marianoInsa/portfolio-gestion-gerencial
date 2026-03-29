# UI Consistency Matrix

## Buttons
- Heights: `sm=32`, `md=40`, `lg=48`
- Radius: `control=12px` (default), `pill` only for hero CTA
- Focus: 2px outline with offset using shared focus ring
- States: `default`, `hover`, `active`, `focus-visible`, `disabled`

## Spacing
- Section vertical rhythm: `tight=64/80`, `base=80/96`, `loose=96/112` (mobile/desktop)
- Stack gaps: `8`, `12`, `16`, `24`
- Card paddings: `sm=16`, `md=24`

## Alignment
- Section heading alignment is explicit: `left` or `center`
- Grids keep vertical rhythm with fixed `gap` tokens
- Text blocks use readable line length (`max-w-2xl` headings, `max-w-prose` body)

## Typography
- Label: `12px`, semibold, uppercase, tracking wide
- Section title: `30-36px`, bold
- Body: `14-16px`, line-height >= 1.6
- Caption/Meta: `12px`

## Cards
- `elevated`: 1px border + soft shadow
- `outline`: 1px border + no shadow
- `dashed`: 2px dashed border + muted text
- Radius: `16px`

## Accessibility Rules
- Keyboard support for menus/dropdowns (`Enter`, `Space`, `ArrowDown`, `Escape`)
- Interactive elements keep visible `focus-visible`
- No hover-only critical information
- Touch targets minimum `40x40` (prefer `44x44`)
