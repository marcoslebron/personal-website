# Visual Identity Guide

## Color Palette

| Core Identity | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Background principal** | `#0B1020` | Main application background. |
| **Background secundario** | `#121A2B` | Secondary containers, cards, and elevated surfaces. |
| **Bordes / líneas** | `#243046` | Dividers, subtle borders, and lines. |
| **Texto principal** | `#F3F7FF` | Primary headings and prominent text. |
| **Texto secundario** | `#AAB6CC` | Body text, descriptions, and labels. |
| **Accent principal** | `#4F8CFF` | Primary actions, outlined buttons, links. |
| **Accent hover** | `#76A8FF` | Hover states for primary actions. |
| **Tag background** | `#16233A` | Background for small tags or badges. |
| **Glow suave** | `rgba(79, 140, 255, 0.18)` | Soft drop shadows for interactive elements. |

## Typography

- **Navigation Bar:** Montserrat, Light (Weight `200`)
- **General Content:** Montserrat, Regular (Weight `400`)
- **Titles/Headings:** Libertinus Serif Display (`font-weight: normal`)

## UI Element Styles

### Primary Buttons (Contact Button)
- **Default State:** Outlined with `1px solid var(--accent-primary)`. Text color matches the border. Background is transparent.
- **Hover State:** Background transitions to the navbar highlight gradient (`linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`). Border becomes transparent. Features a subtle upward shift (`transform: translateY(-1px)`) and gains a drop shadow using the `Glow suave` active state.

### Navigation Links
- Regular links use `Texto secundario` at `font-weight: 200`.
- Hover and Active states transition to `Texto principal` and reveal a gradient underline (`linear-gradient(90deg, #6366f1, #a855f7)`) that expands from 0% to 100% width.
