---
name: Nocturnal Scholar
colors:
  surface: '#0e1321'
  surface-dim: '#0e1321'
  surface-bright: '#343948'
  surface-container-lowest: '#090e1c'
  surface-container-low: '#161b2a'
  surface-container: '#1a1f2e'
  surface-container-high: '#252a39'
  surface-container-highest: '#303444'
  on-surface: '#dee2f6'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#dee2f6'
  inverse-on-surface: '#2b303f'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#a0cde4'
  on-secondary: '#003547'
  secondary-container: '#204e62'
  on-secondary-container: '#92bfd6'
  tertiary: '#e3cba8'
  on-tertiary: '#3c2e15'
  tertiary-container: '#c6b08e'
  on-tertiary-container: '#524328'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#bfe9ff'
  secondary-fixed-dim: '#a0cde4'
  on-secondary-fixed: '#001f2a'
  on-secondary-fixed-variant: '#1d4c5f'
  tertiary-fixed: '#f7dfbb'
  tertiary-fixed-dim: '#dac3a0'
  on-tertiary-fixed: '#251a04'
  on-tertiary-fixed-variant: '#54442a'
  background: '#0e1321'
  on-background: '#dee2f6'
  surface-variant: '#303444'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1'
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
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The brand personality is intellectual, quiet, and prestigious. It moves away from the sterile, high-energy environment of typical test-prep platforms, instead offering the atmosphere of a private, high-end digital library. The target audience is serious students who find focus in the stillness of the night and appreciate an aesthetic that mirrors the weight of academic achievement.

The design style is a hybrid of **Minimalism** and **Tactile Glassmorphism**. It utilizes deep, immersive layers to create a sense of focused physical space. While the interface is digital, it evokes the feeling of heavy paper, gilded edges, and soft lamplight through the use of subtle textures, muted metallic accents, and expansive rounded corners that soften the digital edge.

## Colors
The palette is centered on a "Midnight Study" theme. 
- **Primary:** Muted Gold (#d4af37) is reserved for high-importance interactions, achievement markers, and focus states, mimicking gold-leaf embossed lettering.
- **Secondary:** Academic Teal (#2d5a6e) serves as the functional accent for links, secondary buttons, and active states, providing a calming contrast to the dark base.
- **Surface:** Deep Midnight Blue (#0a0f1d) acts as the infinite background, creating a high-contrast environment that reduces eye strain during long reading sessions.
- **Overlays:** Use a slightly lighter tint of the neutral base with a low-opacity parchment texture overlay to differentiate modals and menus from the background.

## Typography
This design system leverages **Inter** with a specific focus on high-contrast readability. To maintain the "Scholar" aesthetic, headlines use tighter tracking and heavier weights to feel authoritative, while body text uses a generous 1.6 line-height to ensure legibility against the dark background. 

Labels and small metadata should be set in uppercase with increased letter spacing to mimic the look of traditional library indexing. Text colors should never be pure white; use a 90% opacity off-white for primary text and 60% for secondary text to prevent "haloing" effects on high-brightness screens.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to create a centered, focused "reading pane" reminiscent of an open book. On mobile, it transitions to a fluid model with generous side margins to keep the content from feeling cramped.

Spacing is rhythmic and intentional, utilizing an 8px base unit. Components should favor large internal padding (p-6 or p-8) to maintain the premium, airy feel of a luxury application. Content sections are separated by significant vertical whitespace to allow the user's eyes to rest between intensive study modules.

## Elevation & Depth
Depth is created through **Tonal Layering** combined with subtle **Glassmorphism**. Rather than traditional drop shadows, which can look muddy in dark mode, this system uses:
1.  **Luminous Outlines:** Subtle, 1px inner borders using the Academic Teal or Gold at 10-20% opacity to define edges.
2.  **Backdrop Blurs:** Floating elements (like navigation bars and modals) use a heavy 20px background blur with a 70% opaque midnight blue tint.
3.  **Texture Overlays:** Elevated surfaces feature a very fine, low-contrast noise texture that mimics the tactile quality of high-grade paper or vellum.
4.  **Outer Glows:** Instead of black shadows, use a soft, dark-blue outer glow for the highest elevation levels to create a "bloom" effect around active modules.

## Shapes
The shape language is defined by extreme **Roundedness (Pill-shaped)**. This approach eliminates the aggressive, "boxy" nature of traditional educational software, replacing it with organic, friendly forms that feel comfortable and modern.

- **Primary Containers:** Use `rounded-xl` (1.5rem / 24px) to frame major content areas.
- **Interactive Elements:** Buttons, tags, and input fields use `rounded-full` (pill shape) to create a distinct, touch-friendly, and premium aesthetic.
- **Images/Media:** Should always follow the container's roundedness to maintain a cohesive visual flow.

## Components
- **Buttons:** Primary buttons are pill-shaped, filled with Muted Gold (#d4af37) and use dark navy text for maximum contrast. Secondary buttons use a ghost style with a Teal outline.
- **Cards:** Cards should have no background fill but a subtle 1px border, or a very slight midnight-blue tint that is only 2-3% lighter than the main background.
- **Input Fields:** Search and text inputs are pill-shaped with a deep inset "etched" look. The focus state triggers a soft gold outer glow.
- **Chips/Tags:** Used for "Topic" or "Difficulty" markers. These are small, pill-shaped elements with a secondary teal background at 15% opacity.
- **Progress Indicators:** Use thin, elegant lines. Completed sections are highlighted in Gold; in-progress sections use a pulsing Teal glow.
- **Custom Component - "The Reading Lamp":** A specific styling for the active study area that applies a subtle radial gradient (Gold at 5% opacity) behind the central text container to simulate a focused spotlight.