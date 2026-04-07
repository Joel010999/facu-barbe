# Design System Document: The Industrial Aristocrat

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Industrial Aristocrat."** 

This system is designed to evoke the smoke-filled, high-stakes atmosphere of 1920s Birmingham, distilled into a premium digital experience. We are moving away from the "template" look of modern web design. Instead, we embrace the grit of the industrial era—dark woods, aged brick, and burnished metal—balanced with the meticulous precision of a master barber. 

To achieve this, we utilize a strictly **0px corner radius** across all elements to convey masculinity and sharpness. The layout avoids a predictable grid in favor of an **editorial, asymmetric composition** where elements overlap, large serif typography commands attention, and tonal depth replaces structural lines.

## 2. Colors
Our palette is rooted in the "Deep Charcoal" of coal dust and the "Burnished Gold" of a brass-finished straight razor.

*   **Primary (#e9c176):** This is our "Burnished Gold." It is reserved for high-value actions, logos, and critical accents.
*   **Surface Hierarchy:** We utilize a "Nested Surface" approach. The `surface` (#131313) acts as our foundation. Sections are defined by shifting to `surface_container_low` or `surface_container_high`, creating a natural rhythm without visual clutter.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Boundaries between content areas must be defined solely through:
1.  **Background Shifts:** Transitioning from `surface` to `surface_container`.
2.  **Texture Interplay:** Placing a "Dark Wood" image container adjacent to a `surface_container_lowest` charcoal block.

### The "Glass & Gradient" Rule
To add a "signature" feel, floating elements (like navigation bars or hovering price cards) should use **Glassmorphism**. Apply `surface_variant` with a 20px backdrop-blur. For primary Call-to-Actions (CTAs), do not use a flat fill; apply a subtle linear gradient from `primary` (#e9c176) to `primary_container` (#c5a059) to simulate the sheen of antique metal.

## 3. Typography
The typography is a dialogue between the artisanal past and the functional present.

*   **The Serif (Newsreader):** Used for all `display` and `headline` levels. This font carries the weight of 1920s signage. It should be used at large scales with slightly tighter letter-spacing to feel like a premium editorial header.
*   **The Sans-Serif (Work Sans):** Used for `body` and `label` levels. It provides a clean, modern counterpoint that ensures the gritty aesthetic doesn't compromise readability.

**Hierarchy Strategy:** 
Use `display-lg` for hero statements, often overlapping image edges or textures. Use `label-md` in all-caps with increased letter-spacing for sub-headers to create an "authoritative" brand voice.

## 4. Elevation & Depth
In this design system, depth is a matter of light and shadow in a dark room, not artificial "web" layers.

*   **The Layering Principle:** Stacking is the primary tool for hierarchy. A `surface_container_highest` card sitting on a `surface` background provides all the "lift" required. 
*   **Ambient Shadows:** Traditional drop shadows are forbidden. If a floating element requires separation, use a diffused "Ambient Glow" shadow using the `on_surface` color at 4% opacity with a blur of 40px or higher. This mimics natural light falling on dark velvet.
*   **The "Ghost Border":** For interactive states (like a focused input), use a "Ghost Border." This is a 1px stroke using the `outline_variant` token at **15% opacity**. It provides a hint of structure without breaking the seamless, dark aesthetic.
*   **Texture Overlays:** To move beyond flat hex codes, apply a subtle noise or "grain" texture (at 3% opacity) over the `background` to simulate aged paper or stone.

## 5. Components

### Buttons
*   **Primary:** Rectangular (0px radius). Gold gradient fill. Text in `on_primary` (#412d00). 
*   **Secondary:** Rectangular. No fill. 1px "Ghost Border" (`outline_variant` at 20%).
*   **Tertiary:** No border, no fill. All-caps `label-md` with an underline that appears only on hover.

### Cards & Lists
*   **Structure:** Forbid the use of divider lines. Separate list items using vertical whitespace or alternating `surface_container_low` and `surface_container_highest` backgrounds.
*   **Editorial Cards:** Feature large imagery (haircuts/beards) with `headline-sm` text overlaid using a `surface_variant` glassmorphic treatment at the bottom of the card.

### Input Fields
*   **Style:** Avoid the "box" look. Use a solid background of `surface_container_highest` with a `primary` 2px bottom-border only. Labels should be `label-sm` and always visible (no disappearing placeholders).

### Signature Component: The "Service Ledger"
A bespoke list component for price menus. Use `title-lg` for the service name and `title-lg` for the price, connected by a very faint, dotted `outline_variant` line to guide the eye, reminiscent of an old account book.

## 6. Do's and Don'ts

### Do:
*   **Use Intentional Asymmetry:** Let images bleed off the edge of the screen or sit off-center to create a bespoke, high-end feel.
*   **Focus on Detail:** In imagery, prioritize macro shots of hair texture, grooming tools, and leather chairs.
*   **Maintain Sharpness:** Ensure every edge is 0px. The visual strength comes from the "brutalist" geometry.

### Don't:
*   **No Hats/Caps:** Per client request, all imagery must showcase the hair and beard craftsmanship. Hats hide the product.
*   **No Vibrant Colors:** Avoid any color outside the defined palette (like bright blues or greens). If an error state is needed, use the `error` (#ffb4ab) token sparingly.
*   **No Standard Grids:** Avoid the "three-column feature" look. Break the rows with varying heights and overlapping text blocks.