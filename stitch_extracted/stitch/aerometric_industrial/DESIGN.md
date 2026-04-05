# Design System Documentation

## 1. Overview & Creative North Star: "Precision Atmospheric Engineering"

This design system is built to reflect the high-stakes, technical nature of industrial ventilation technology. Our Creative North Star is **"Precision Atmospheric Engineering."** We are not building a standard SaaS dashboard; we are designing a high-end digital control room. 

The aesthetic moves beyond "clean" into "technical-luxe." We achieve this through:
*   **Intentional Asymmetry:** Breaking the traditional 12-column rigidity to mimic the layout of engineering blueprints.
*   **Tonal Depth:** Utilizing the rich dark spectrum of our palette to create a sense of vast, controlled space.
*   **The Signature Accent:** A persistent, #4FD1ED decorative line under section titles serves as a visual "conduit," representing the flow of air and energy through the system.

## 2. Color & Surface Architecture

The palette is anchored in deep neutrals to ensure the technical highlights (Cyan and Amber) vibrate with intent.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Boundaries must be defined through **Background Color Shifts**. For example, a card (surface-container-high) should sit on a section (surface-container-low) without a stroke. This creates a more sophisticated, "machined" look.

### Surface Hierarchy & Nesting
Instead of a flat grid, treat the UI as a series of physical layers.
*   **Base:** `surface` (#10141a) – The foundational floor.
*   **Sectioning:** `surface_container_low` (#181c22) – Large structural areas.
*   **Interaction/Focus:** `surface_container_high` (#262a31) – Cards and active components.
*   **Floating Elements:** `surface_container_highest` (#31353c) – Popovers and modals.

### The "Glass & Gradient" Rule
To elevate the "Industrial" feel, use **Glassmorphism** for floating telemetry panels. 
*   **Technique:** Apply a `surface_container_low` color at 60% opacity with a `24px` backdrop blur. 
*   **Soulful Gradients:** For primary actions, use a linear gradient from `primary` (#96eaff) to `primary_container` (#4fd1ed) at a 135° angle.

## 3. Typography

The typographic system is designed to feel authoritative and architectural.

*   **Display & Headlines (Space Grotesk):** This is our "Industrial Voice." All headline-level text must be **BOLD ALL-CAPS**. The wide stance of Space Grotesk mimics technical labeling found on heavy machinery.
*   **Body & Titles (Inter):** This is our "Human Voice." Inter provides maximum legibility for complex data. It remains in sentence case to provide a sophisticated contrast to the technical headers.
*   **Signature Detail:** Every `headline-lg` or `headline-md` must be accompanied by a 2px tall horizontal line using the `primary_container` (#4FD1ED) token, positioned 8px below the descender line.

## 4. Elevation & Depth: Tonal Layering

We eschew traditional drop shadows for **Tonal Layering**. Depth is a product of luminescence, not artificial "ink" shadows.

*   **The Layering Principle:** Place a `surface_container_lowest` (#0a0e14) card inside a `surface_container_high` (#262a31) container to create an "inset" or "engraved" look—perfect for data readouts.
*   **Ambient Shadows:** If a floating element (like a tooltip) requires a shadow, it must use the `on_surface` color at 6% opacity with a `40px` blur. It should feel like a soft glow, not a shadow.
*   **The "Ghost Border" Fallback:** For high-density data tables where separation is critical, use the `outline_variant` (#3d494c) at **15% opacity**. The line should be felt, not seen.

## 5. Components

### Buttons
*   **Primary (The Direct Action):** `tertiary_container` (#ffb14f) background with `on_tertiary` text. High contrast is reserved for CTAs to ensure safety and efficiency. Border radius: `sm` (2px) for a sharp, industrial feel.
*   **Secondary (The System Action):** `primary` (#96eaff) ghost button with a `primary_fixed_dim` 1px ghost border (20% opacity).

### Chips (Efficiency Indicators)
*   **Status Chips:** Use `secondary_container` (#224c57) with `on_secondary_container` (#92bcc8) text. 
*   **Visual Style:** Rectangular with `none` or `sm` corner radius. Include a small 4px circular "LED" indicator to the left of the text.

### Input Fields
*   **Base:** `surface_container_low` background. 
*   **Active State:** No change in background color, but the signature `primary` (#4FD1ED) 2px line appears at the *bottom* of the input, mimicking the section title decoration.

### Cards & Lists
*   **Forbid Dividers:** Use vertical spacing (16px, 24px, or 32px) to separate items.
*   **Nesting:** Group related technical data points within a `surface_container_lowest` well to differentiate them from the main card body.

### Specialty Component: The Flow Monitor
*   **Description:** A custom component for this design system that uses a subtle `primary` gradient pulse to indicate active ventilation.
*   **Visuals:** Use "Industrial Lines" (0.5px stroke, 45-degree angles) as a background pattern within the component to give it a technical, schematic feel.

## 6. Do’s and Don'ts

### Do
*   **Do** use asymmetrical spacing. A wider left margin than right margin can make a page feel like a technical manual.
*   **Do** lean into the "Transmission" iconography. Use gear and airflow icons with a stroke weight that matches your `label-sm` font-weight.
*   **Do** use `tertiary` (#FFB14F) sparingly. It is a warning or a high-priority action color only.

### Don't
*   **Don't** use rounded corners above `0.5rem` (lg). This system should feel machined and precise, not soft or consumer-grade.
*   **Don't** use pure white (#FFFFFF). Use `on_surface` (#dfe2eb) to maintain the dark-mode atmosphere and reduce eye strain.
*   **Don't** ever use a divider line to separate two pieces of content. If they need separation, give them different surface tiers or more breathing room.