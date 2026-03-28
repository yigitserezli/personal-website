```markdown
# Design System Strategy: The Technical Monolith

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Blueprint in the Void."** 

Unlike standard consumer portfolios that rely on soft shadows and rounded friendly corners, this system embraces the rigid, uncompromising precision of high-end engineering. It is a digital environment that feels like a high-performance terminal or a dark-room laboratory. We break the "template" look by using absolute `0px` radiuses and a "Structural Skeleton" approach—where the layout is defined by the thin, sharp lines of a technical schematic. 

The intentional use of whitespace (using our `16` and `20` spacing tokens) creates a sense of "Engineered Breathability," ensuring that even complex technical data feels premium and curated rather than cluttered.

---

## 2. Colors & Surface Logic
This palette is a study in luminance and contrast. We avoid "flat" blacks in favor of a deep, tiered gray-scale that suggests physical depth through value rather than shadows.

### The "Technical Border" Rule
Contrary to standard UI practices, this system **embraces the line**. We use `outline_variant` (#474747) at a 1px width to define all structural boundaries. These are not "separators"; they are the frame of the monolith.

### Surface Hierarchy
We use a "Carved From Stone" approach to nesting:
- **Base Layer:** `surface` (#131313) for the primary viewport background.
- **Sectioning:** Use `surface_container_lowest` (#0E0E0E) for inset technical panels or "code-readout" areas to create a sense of looking *into* the machine.
- **Elevated Components:** Use `surface_container_high` (#2A2A2A) for active states or floating modals to suggest a physical "plate" sitting on the surface.

### Radial Lighting
To avoid a lifeless interface, use a center-out radial gradient:
- **Primary Glow:** A 20% opacity `primary` (#FFFFFF) radial gradient centered at the top-middle of the screen to simulate a single overhead light source hitting the "Monolith."

---

## 3. Typography: The Dual-Tone System
We utilize a high-contrast pairing between human-centric Grotesques and machine-centric Monospace fonts.

- **Display & Headlines (Manrope):** These are your "Editorial" voices. Use `display-lg` and `headline-lg` in `primary` (#FFFFFF) with tight letter-spacing (-0.02em). This conveys authority and architectural scale.
- **The Technical Readout (Space Grotesk/Monospace):** All `label-md` and `label-sm` elements must use Monospace. This is for tech stacks, timestamps, and metadata. It should feel like a system log or a CAD drawing annotation.
- **Body (Inter):** Reserved for descriptions. Inter provides maximum legibility against the dark `surface` background. Use `body-md` in `on_surface_variant` (#C6C6C6) to reduce eye strain.

---

## 4. Elevation & Structural Depth
In this system, "Up" does not mean "Shadow." It means "Inversion" or "Light."

### The Layering Principle
Depth is achieved by increasing the border intensity or changing the background tonal shift. 
- **Tier 1 (Surface):** 1px border using `outline_variant`.
- **Tier 2 (Hover/Active):** 1px border using `outline` (#919191) with a 2px "inner glow" achieved by a subtle `primary` box-shadow with 0 blur and 1px spread.

### Ghost Gradients
Main CTAs or Hero sections should utilize a linear gradient from `primary` (#FFFFFF) to `secondary` (#C8C6C5) at a 45-degree angle. This provides a "brushed metal" texture that flat white cannot achieve.

### Micro-Interactions
Elements should never "pop." They should "slide" or "fade" with high-precision timing (150ms Easing). When hovering over a card, the `outline_variant` should transition to `primary` via a drawing-path animation.

---

## 5. Components

### Project Cards (The "Schematic" Card)
- **Structure:** No border-radius (`0px`). 1px border using `outline_variant`.
- **Content:** Title (`title-lg`), Tech Stack (`label-sm` in Monospace), and Description (`body-sm`).
- **Hover State:** Background shifts from `surface` to `surface_container_low`. A hidden "Technical Data" pane slides up from the bottom, revealing Git hashes or performance metrics in `label-sm`.
- **Constraint:** Forbid all drop shadows. The card must feel integrated into the grid.

### Buttons (The "Actuator")
- **Primary:** Background `primary` (#FFFFFF), Text `on_primary` (#1A1C1C). 0px radius. On hover, the background becomes `secondary` with a 1px inset border of `primary`.
- **Tertiary:** No background. Monospace font with a `>` prefix. On hover, the `>` slides 4px to the right.

### Input Fields
- **Styling:** Underline-only or full 4-sided border using `outline_variant`. 
- **Focus:** Border color transitions to `primary`. Use a Monospace "label" that sits on the border line itself, breaking the stroke (a classic engineering schematic look).

### Chips (The "Tag")
- Small, rectangular boxes with `label-sm` text. Use `surface_container_highest` for the background and `on_surface` for text. No rounded corners.

---

## 6. Do’s and Don'ts

### Do:
- **Use the Grid:** Align every element to the pixel. If a line is off by 1px, the "Monolith" feel is broken.
- **Embrace Monospace:** Use it for any data that feels "generated" or "technical."
- **High Contrast:** Keep text `primary` (#FFFFFF) or `on_surface_variant` (#C6C6C6). Grey-on-grey is forbidden for legibility.

### Don't:
- **No Border Radius:** Never use `border-radius`. Everything is a sharp 90-degree angle.
- **No Standard Shadows:** Do not use `box-shadow: 0 4px 10px rgba(0,0,0,0.5)`. If you need depth, use a 1px solid border or a tonal shift.
- **No Softness:** Avoid pastel colors or rounded iconography. Use sharp, stroke-based icons with 1px or 1.5px weights.
- **No Dividers:** Avoid horizontal rules (`<hr>`) unless they are part of a full-width grid layout. Use the `Spacing Scale` (e.g., `20` / 7rem) to create separation through void.

---

## 7. Signature Technical Texture
To finalize the "Monolith" aesthetic, implement a subtle **Scanline Overlay** or a **10% opacity Dot Grid** using `outline_variant` as the dot color. This should be fixed to the background, making the content feel as though it is being projected onto a high-resolution terminal.```