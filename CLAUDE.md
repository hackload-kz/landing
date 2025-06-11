# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development server:**
```bash
npm run dev
```
Starts Vite dev server on http://localhost:5173/

**Build:**
```bash
npm run build
```
Creates production build with Vite

**Docker build:**
```bash
./build.sh
```
Builds project in Docker container and extracts artifacts to ./dist

**Linting:**
```bash
npm run lint
```
Runs ESLint on the codebase

**Sitemap generation:**
```bash
npm run update-sitemap
```
Updates sitemap.xml based on news articles

## Architecture Overview

This is a React landing page for HackLoad 2025 hackathon with multilingual support (Russian/Kazakh).

**Tech Stack:**
- React 18 + TypeScript + Vite
- TailwindCSS for styling
- React Router for navigation
- react-i18next for internationalization
- Bootstrap 4.6.2 for some components

**Key Architecture:**
- Single-page application with `/news` routes for articles
- Component-based structure in `src/components/`
- Centralized data management in `src/data/`
- i18n configuration with language detection and cookie persistence
- Static data exports from hackathonData.ts (mostly empty arrays as placeholders)

**Routing Structure:**
- `/` - Main landing page with all sections
- `/news` - News listing page
- `/news/:slug` - Individual news articles

**Language Support:**
- Russian (`ru`) as default/fallback language
- Kazakh (`kk`) translations
- Language detection via cookie/localStorage/browser
- Translation files: `src/i18n/locales/ru.json` and `kk.json`

**Translation Process:**
- Russian JSON is the source
- Kazakh translations generated via RoboTranslator + Google Translate
- Do not manually edit `kk.json` - inform team before changes
- Naming convention: `component.ui-part.context-word`

**Build & Deployment:**
- Standard Vite build process
- Docker build available via build.sh script
- Sitemap auto-generation from news data
- Domain: hackload.kz