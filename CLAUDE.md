# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a tourism website for Namatota, a hidden gem in Triton Bay, West Papua, Indonesia. The site showcases whale shark tours, cultural experiences, diving, and sustainable tourism opportunities. It's built as a bilingual website (English/Indonesian) for a community-based tourism initiative.

## Common Development Commands

- **Development server**: `npm run dev` - Starts Vite dev server on port 8080
- **Build**: `npm run build` - Creates production build
- **Development build**: `npm run build:dev` - Builds with development mode
- **Lint**: `npm run lint` - Runs ESLint
- **Preview**: `npm run preview` - Preview production build

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with animations
- **Routing**: React Router v6
- **State Management**: TanStack Query for server state, React Context for language
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Architecture

### Core Structure
- `src/App.tsx` - Main app with routing and providers (QueryClient, TooltipProvider)
- `src/main.tsx` - Entry point with LanguageProvider wrapper
- `src/pages/` - Route components (Index.tsx for homepage)
- `src/components/` - Feature components and UI components

### Key Components
- **Navigation**: Includes language switcher and responsive menu
- **Hero**: Landing hero section with background imagery
- **ValueProposition**: Four value cards (whale sharks, karst islands, culture, diving)
- **Experiences**: Detailed experience sections with descriptions
- **Gallery**: Visual showcase with images
- **About**: Welcome section and information
- **ContactForm**: Lead generation form with various interests
- **Footer**: Site footer with links and information

### Language System
The app uses a custom translation system with:
- `LanguageContext.tsx` - Context provider with `useLanguage` hook
- Translation objects in both English and Indonesian
- `t()` function for dot notation access (e.g., `t('nav.experiences')`)
- Language switcher in Navigation component

### UI Components
Extensive shadcn/ui component library in `src/components/ui/` including:
- Form components (input, textarea, select)
- Layout components (card, tabs, accordion)
- Feedback components (toast, alert, dialog)
- Navigation components (dropdown, menubar)

## Asset Organization
Static images in `src/assets/`:
- Hero image: `hero-triton-bay.jpg`
- Experience images: `whale-shark.jpg`, `karst-islands.jpg`, `village.jpg`, `diving.jpg`
- Gallery images: `rock-art.jpg`, etc.

## Development Notes

### Path Aliases
- `@` maps to `src/` directory (configured in vite.config.ts)

### Component Patterns
- Components use TypeScript with proper typing
- Consistent use of Tailwind CSS classes
- Responsive design with mobile-first approach
- Form validation with React Hook Form + Zod
- Toast notifications using Sonner

### Translation Structure
Translations are organized hierarchically:
- `nav.*` - Navigation items
- `hero.*` - Hero section
- `value.*` - Value proposition cards
- `experiences.*` - Experience sections
- `about.*` - About section
- `contact.*` - Contact form
- `footer.*` - Footer content

### Styling Approach
- Tailwind CSS with custom animations
- Responsive design patterns
- Consistent spacing and typography
- Dark/light theme support via next-themes
- Custom color palette for marine/tourism theme