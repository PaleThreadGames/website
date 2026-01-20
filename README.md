# Pale Thread Games Website

A modern, clean React website for Pale Thread Games game company featuring a cool-tone color palette and sections for showcasing roguelike and metroidvania games.

## Features

- Clean, modern design with cool-tone colors (blues, purples, teals)
- Responsive layout that works on all devices
- Smooth scrolling navigation
- Hero section with company branding
- About section describing the company's focus
- Games section with placeholder content
- Contact form
- Accessible and SEO-friendly

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
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
├── components/       # React components
│   ├── Header.tsx   # Navigation header
│   ├── Hero.tsx     # Hero section
│   ├── About.tsx    # About section
│   ├── Games.tsx    # Games showcase
│   ├── Contact.tsx  # Contact form
│   └── Footer.tsx   # Footer
├── App.tsx          # Main app component
├── main.tsx         # Entry point
├── index.css        # Global styles
└── types.ts         # TypeScript types
```

## Customization

### Colors

The color palette is defined in `tailwind.config.js`. You can customize the cool-tone colors by modifying the color values in the theme extension.

### Content

Update the content in each component file to match your needs:
- Company information in `About.tsx`
- Game listings in `Games.tsx`
- Contact information in `Contact.tsx` and `Footer.tsx`

## License

Copyright © 2024 Pale Thread Games. All rights reserved.

