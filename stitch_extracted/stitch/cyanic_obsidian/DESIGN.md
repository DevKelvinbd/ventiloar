# Design System Document: Editorial Luminescence

## 1. Overview & Creative North Star
### Creative North Star: "The Digital Obsidian"
This design system is not a mere collection of components; it is a high-end editorial experience designed to feel like a premium digital concierge. Moving away from the "boxy" nature of standard SaaS platforms, we embrace **The Digital Obsidian**—a philosophy defined by deep, atmospheric voids contrasted against sharp, luminous accents.

We break the "template" look through **Intentional Asymmetry**. Large display typography is often offset, and UI elements bleed off-grid to create a sense of motion. By utilizing high-contrast typography scales and overlapping glass layers, we transform a functional interface into a sophisticated brand statement.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in the deep navy and cyan of the source logo, expanded into a comprehensive Material-inspired scale to provide necessary nuance.

### Core Palette Roles
*   **Primary (`#96eaff`)**: Our "Luminal Cyan." Reserved for high-intent actions and critical brand moments.
*   **Secondary (`#a3ced9`)**: Used for supportive UI elements that require distinction without the vibration of the Primary cyan.
*   **Surface & Background (`#10141a`)**: The "Obsidian" base. All depth is built upon this near-black foundation.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be defined solely through:
1.  **Background Color Shifts:** Placing a `surface_container_low` section against the primary `background`.
2.  **Tonal Transitions:** Using soft gradients or varying the `surface_container` tiers to imply an edge.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of smoked glass. 
*   **Nesting:** Place a `surface_container_highest` (`#31353c`) card inside a `surface_container` (`#1c2026`) area to create "natural" depth. 
*   **Glass & Gradient:** For floating elements (Modals, Hover Menus), use **Glassmorphism**. Combine `surface_bright` at 60% opacity with a `backdrop-blur` of 20px. 
*   **Signature Textures:** Apply a subtle linear gradient from `primary` to `primary_container` on large CTAs to provide a "glow" that feels professional and intentional.

---

## 3. Typography: The Editorial Voice
We utilize a pairing of **Space Grotesk** (Display/Headlines) and **Inter** (Body/Labels) to balance technological precision with human readability.

*   **Display & Headline (Space Grotesk):** This is our "Signature" voice. The geometric quirks of Space Grotesk reflect the kinetic energy of the logo. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero sections to establish authority.
*   **Body & Labels (Inter):** Used for maximum utility. Inter provides a neutral, high-legibility counterpart to the expressive headlines.
*   **Hierarchy as Identity:** Use extreme scale differences. A `display-md` headline paired with a `label-sm` metadata tag creates an editorial contrast that feels curated rather than generated.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often a crutch for poor layout. In this system, depth is achieved through the **Layering Principle**.

*   **Tonal Stacking:** Instead of a shadow, place `surface_container_lowest` (`#0a0e14`) elements on a `surface` (`#10141a`) background to create a "recessed" look.
*   **Ambient Shadows:** If a "floating" effect is required (e.g., a primary FAB), shadows must be extra-diffused. 
    *   *Spec:* `Offset: 0 12px 32px; Color: rgba(0, 0, 0, 0.4);`
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` (`#3d494c`) at **20% opacity**. Never use 100% opaque, high-contrast borders.

---

## 5. Components: Precision Primitives

### Buttons
*   **Primary:** Background `primary_container` (`#4fd1ed`), text `on_primary_container` (`#005766`). Use `md` (0.375rem) roundedness.
*   **Secondary:** Ghost style. No background, `outline` border at 20% opacity, text `primary`.

### Cards & Lists
*   **The Forbid Rule:** Divider lines are strictly forbidden. 
*   **Grouping:** Separate list items using `surface_container_low` background shifts on hover, or use 16px - 24px of vertical white space (from the Spacing Scale).

### Input Fields
*   **States:** Default state should be `surface_container_high`. On focus, transition the background to `surface_bright` and add a 1px "Ghost Border" using the `primary` color at 40% opacity.

### Navigation (The Signature Component)
*   **Vertical Rails:** Instead of a top bar, prefer a vertical navigation rail on the left using `surface_container_lowest`. This emphasizes the editorial, "wide-screen" layout.

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a structural element. If a design feels "crowded," increase the padding rather than adding a border.
*   **DO** use the `primary` cyan sparingly. It should act as a "signal" in the dark, guiding the user's eye to the most important action on the screen.
*   **DO** experiment with overlapping elements. Let a headline "bleed" into a card component to break the grid.

### Don't
*   **DON'T** use pure white (`#FFFFFF`) for body text. Use `on_surface` (`#dfe2eb`) to reduce eye strain against the dark background.
*   **DON'T** use standard Material Design "Drop Shadows." They feel dated. Use Tonal Layering.
*   **DON'T** use 100% opacity borders. It breaks the "Digital Obsidian" immersion and makes the UI feel like a generic template.