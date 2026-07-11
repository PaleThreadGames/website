# Pale Thread Games Website

A refined dark-themed React website for Pale Thread Games, featuring restrained typography, a single accent color, and generous whitespace.

## Features

- Refined dark design with semantic color tokens
- Inter typography loaded via Google Fonts
- shadcn/ui components (Button, Input, Card, Badge)
- Responsive layout that works on all devices
- Smooth scrolling navigation
- Accessible focus states and skip link
- SEO-friendly

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS with CSS design tokens
- shadcn/ui component primitives
- Modern ES6+ features

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or >=22.12.0 recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui primitives + layout wrappers
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Games.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts         # cn() helper
├── App.tsx
├── main.tsx
├── index.css            # Design tokens + section backgrounds
└── types.ts
```

## Design System

### Colors

Semantic tokens defined as CSS variables in `src/index.css`:

| Token | Usage |
|-------|-------|
| `background` | Page base |
| `foreground` | Primary text |
| `muted-foreground` | Secondary text |
| `primary` / `accent` | Links, buttons, highlights |
| `border` | Card and input borders |
| `surface` / `surface-raised` | Cards, form fields |

### Typography

- **Font:** Inter (400, 500, 600, 700)
- **Headings:** Solid foreground color, no gradients
- **Body:** `text-muted-foreground` for secondary copy

### Spacing

Generous vertical rhythm: sections use `py-32 md:py-48`, cards use `p-8 md:p-10`.

### Customization

Update content in each component file:
- Company information in `About.tsx`
- Game listings in `Games.tsx`
- Contact information in `Contact.tsx` and `Footer.tsx`

Color tokens can be adjusted in the `:root` block of `src/index.css`.

## License

Copyright © 2024 Pale Thread Games. All rights reserved.
