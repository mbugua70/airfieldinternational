# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Type-check with TypeScript and build for production
- `npm run preview` - Preview production build locally

## Architecture

This is a vanilla TypeScript + Vite project (no framework). The entry point is `index.html` which loads `src/main.ts`.

**Tech Stack:**
- Vite 7.x for bundling and dev server
- TypeScript with strict mode enabled
- ES Modules (ESNext)
