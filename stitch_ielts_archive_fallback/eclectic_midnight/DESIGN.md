---
name: Eclectic Midnight
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e7'
  on-surface-variant: '#c6c6cc'
  inverse-surface: '#e2e2e7'
  inverse-on-surface: '#2e3034'
  outline: '#909096'
  outline-variant: '#46464c'
  surface-tint: '#c2c6da'
  primary: '#c2c6da'
  on-primary: '#2b303f'
  primary-container: '#0a0f1d'
  on-primary-container: '#777b8d'
  inverse-primary: '#595e6f'
  secondary: '#fff9ef'
  on-secondary: '#3a3000'
  secondary-container: '#ffdb3c'
  on-secondary-container: '#725f00'
  tertiary: '#bec6df'
  on-tertiary: '#283044'
  tertiary-container: '#070f21'
  on-tertiary-container: '#747c93'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dee2f6'
  primary-fixed-dim: '#c2c6da'
  on-primary-fixed: '#161b2a'
  on-primary-fixed-variant: '#424657'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#dae2fc'
  tertiary-fixed-dim: '#bec6df'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465b'
  background: '#111317'
  on-background: '#e2e2e7'
  surface-variant: '#333539'
typography:
  headline-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Bricolage Grotesque
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-md:
    fontFamily: Bricolage Grotesque
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Bricolage Grotesque
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is built on a foundation of "Expressive Utility." It targets a modern, tech-forward audience that values personality over corporate sterility. The brand personality is quirky, confident, and sophisticated, achieved through the juxtaposition of a professional color palette with an eccentric, variable typeface.

The design style is a hybrid of **Modern Minimalism** and **Brutalism-Lite**. It uses the structural clarity of a dark-themed interface but injects character through oversized, expressive typography and high-contrast accents. The emotional response should be one of intrigue and reliability—a product that feels "human-made" rather than algorithmically generated.

## Colors

The palette is anchored in **Midnight Navy** (#0A0F1D), providing a deep, expansive background that reduces eye strain and emphasizes depth. **Gold** (#FFD700) serves as the primary action color, used sparingly for high-priority call-to-actions, highlights, and active states to create a premium feel.

- **Primary Surface:** Midnight Navy is the base for the entire UI.
- **Secondary Surface:** Tertiary Navy (#161E31) is used for cards and nested containers to create visual hierarchy.
- **Accent:** Gold is the focal point for interaction.
- **Typography:** Neutral White (#F4F4F9) ensures maximum readability against the dark background, with reduced opacity variants for secondary information.

## Typography

This design system exclusively utilizes **Bricolage Grotesque**. This typeface is chosen for its unique blend of historical French typographic traits and modern technical execution. 

- **Headlines:** Use tighter letter spacing and heavier weights to showcase the font's characterful "ink traps" and quirky curves. 
- **Body:** Maintain standard weights (400) for legibility, benefiting from the font's generous x-height.
- **Labels:** Use Medium (500) or SemiBold (600) weights to ensure clarity at small scales. 
- **Scaling:** Large displays should lean into the variable nature of the font, using the extra-bold weights for high impact.

## Layout & Spacing

The layout follows a **Fluid Grid** philosophy with a focus on internal containment. We utilize an 8px base unit to maintain mathematical harmony.

- **Desktop:** 12-column grid with 24px gutters and wide 64px outer margins to create a focused "stage" for content.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters and 16px margins.
- **Rhythm:** Vertical spacing between sections should be aggressive (lg/xl) to allow the bold typography room to breathe.

## Elevation & Depth

Depth in this dark-themed system is achieved through **Tonal Layering** and **Soft Inner Glows** rather than traditional drop shadows.

- **Surface 0:** Midnight Navy (#0A0F1D) - The background.
- **Surface 1:** Tertiary Navy (#161E31) - Cards, modals, and navigation bars.
- **Surface 2:** A slightly lighter navy (#1E263D) - Hover states or nested elements.
- **Tactile Accents:** Elements use a subtle 1px border with 10% white opacity to define edges against the dark background. 
- **Shadows:** When necessary, use highly diffused, deep navy shadows (e.g., `box-shadow: 0 20px 40px rgba(0,0,0,0.4)`).

## Shapes

The shape language is **Ultra-Rounded**. This softens the "industrial" feel of the navy palette and complements the organic curves found in the Bricolage Grotesque typeface.

- **Base Radius:** 1rem (16px) for standard buttons and inputs.
- **Large Radius:** 2rem (32px) for cards and containers.
- **Pill:** Fully rounded (999px) for tags, chips, and primary action buttons.
- **Consistency:** Avoid mixing sharp and rounded corners; every interactive element must feel soft to the touch.

## Components

### Buttons
- **Primary:** Gold background, Midnight Navy text, SemiBold weight. Pill-shaped.
- **Secondary:** Transparent background, 1px Gold border, Gold text. Pill-shaped.
- **Interaction:** On hover, primary buttons should slightly increase in scale (1.02x).

### Input Fields
- **Style:** Background in Tertiary Navy, 1px border in low-opacity white. 1rem roundedness.
- **Focus:** Border changes to Gold. Label floats or remains as a high-contrast hint.

### Cards
- **Style:** Tertiary Navy background, 2rem roundedness. No shadow, but a subtle 1px border to distinguish from the background.
- **Padding:** 24px internal padding (md) as default.

### Chips & Tags
- **Style:** Fully pill-shaped. Smallest label typography (label-sm). Use Gold with low opacity for background and solid Gold for text.

### Lists
- **Style:** Separated by low-opacity navy lines. Use generous vertical padding (16px) to maintain the "airy" feel of the brand.

### Checkboxes & Radios
- **Style:** High roundness (checkboxes get a 4px radius, radios are circles). Gold fill for checked states.