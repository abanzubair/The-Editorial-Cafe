```markdown
# Design System Specification: The Nocturnal Manuscript

## 1. Overview & Creative North Star

This design system is built upon the Creative North Star of **"The Nocturnal Manuscript."** It is an intentional departure from the clinical, "app-like" interfaces of the modern web. Instead, it draws inspiration from the tactile, sensory experience of a high-end boutique café at dusk—where the smell of roasted beans meets the weight of a heavy literary journal.

To achieve this, we move away from rigid, symmetrical grids. This system thrives on **Intentional Asymmetry** and **Generous Negative Space**. We treat the screen not as a container, but as a canvas. By using extreme typography scales and overlapping elements, we create an editorial rhythm that feels curated, premium, and calm.

---

## 2. Colors & Tonal Depth

The palette is rooted in the "Deep Espresso" (`#131411`) and "Warm Cream" (`#fdf9f4`) relationship, creating a high-contrast yet soft-to-the-eye reading experience.

### The "No-Line" Rule
**Explicit Instruction:** Use of 1px solid borders for sectioning or containment is strictly prohibited. 
Boundaries must be defined through:
- **Background Color Shifts:** Placing a `surface_container_low` (#1c1c19) section against a `surface` (#131411) background.
- **Tonal Transitions:** Using the spacing scale (e.g., `12` or `16`) to create a "void" that acts as a natural separator.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface_container` tiers to create depth:
- **Base Level:** `surface` (#131411) for the overall page background.
- **Secondary Level:** `surface_container_low` (#1c1c19) for large content blocks or sections.
- **Tertiary Level:** `surface_container_highest` (#353531) for interactive elements like cards or navigation drawers.

### The "Glass & Gradient" Rule
To avoid a flat "template" look:
- **Glassmorphism:** Use `surface_variant` at 60% opacity with a `24px` backdrop blur for floating headers or persistent navigation. This allows the background espresso tones to bleed through, softening the edges.
- **Signature Textures:** For Hero sections or Primary CTAs, use a subtle radial gradient transitioning from `primary_container` (#7D5A50) to `surface_container_highest` (#353531). This mimics the pool of light from a vintage desk lamp.

---

## 3. Typography: The Editorial Voice

This system utilizes two distinct typefaces to balance character with functionality.

- **Noto Serif (The Soul):** Used for all `display`, `headline`, `title`, and `body` scales. It provides the literary authority of a printed magazine.
- **Manrope (The Utility):** Reserved for `label-md` and `label-sm`. Its clean, geometric sans-serif nature ensures technical information (price, time, metadata) remains legible and distinct from the narrative content.

### Hierarchy as Identity
- **Display-lg (3.5rem):** Use this for impact. Allow it to break the grid or overlap imagery to create a signature, custom-built feel.
- **Body-lg (1rem):** This is our "standard" reading size. Use generous line-height (1.6) to ensure the Warm Cream text feels airy and effortless to consume against the dark background.

---

## 4. Elevation & Depth

We reject traditional shadows in favor of **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by "stacking." A `surface_container_lowest` (#0e0e0c) card placed on a `surface_container_low` (#1c1c19) section creates a soft, recessed "sunken" effect. Conversely, a `surface_container_highest` card on a `surface` background creates a natural "lift."
- **Ambient Shadows:** If a floating element requires a shadow (e.g., a modal), use an extra-diffused blur (40px+) at 8% opacity. The shadow color should be `surface_container_lowest` (the darkest espresso) to mimic natural ambient occlusion rather than a synthetic grey.
- **The "Ghost Border" Fallback:** For accessibility in input fields, use the `outline_variant` token at **20% opacity**. This provides a hint of structure without interrupting the visual flow of the espresso background.

---

## 5. Components

### Buttons
- **Primary:** Background `primary_container` (#7D5A50) with text `on_primary_container` (#ffd6ca). Use `Roundedness-md` (0.375rem) for a sophisticated, slightly sharp corner.
- **Secondary/Ghost:** No background. Text in `primary` (#e9bcb0). On hover, transition to a `surface_container_high` (#2a2a27) background.

### Cards & Lists
- **Prohibition:** Divider lines are forbidden.
- **Implementation:** Separate list items using the `spacing-4` (1.4rem) scale. For cards, use a subtle background shift to `surface_container_low`. Ensure content has generous internal padding (using `spacing-6` or `spacing-8`).

### Input Fields
- Use `surface_container_lowest` as the fill. 
- Avoid top-aligned labels; use the `title-sm` Noto Serif for the label and `label-md` Manrope for helper text to maintain the "Manuscript" aesthetic.

### Additional Component: The "Editorial Pull-Quote"
A custom component for the café context. A large `title-lg` Noto Serif text block, italicized, using the `secondary` (#e6beac) color, flanked by a `primary_container` vertical accent bar (2px width). Use this for coffee origin stories or customer testimonials.

---

## 6. Do's and Don'ts

### Do:
- **Embrace Asymmetry:** Align text to the left while keeping imagery off-center to create a dynamic, editorial layout.
- **Use "Breathing Room":** If you think there is enough space, add one more step from the spacing scale. This system requires air to feel premium.
- **Color Transitions:** Use `surface_dim` for footer areas to create a sense of grounding at the bottom of the journey.

### Don't:
- **Don't use 100% white:** Only use `on_surface` (Warm Cream). Pure white will break the "dimly lit cafe" intimacy and cause eye strain.
- **Don't use high-contrast borders:** They shatter the illusion of a seamless, tactile surface.
- **Don't crowd the grid:** Avoid "filling the screen." If a section has only three words, let those three words own the entire horizontal plane.

---
*Director's Final Note: Remember, every pixel should feel like it was placed by a curator, not generated by a framework. If it feels "standard," you haven't pushed the tonal layering far enough.*```