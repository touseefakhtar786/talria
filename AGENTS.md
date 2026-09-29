# AGENTS.md

This document provides an overview of the architecture, key directories, conventions, and design decisions for TALRIA LIMITED DMCC's official web application.

## Project Overview

TALRIA LIMITED DMCC is a specialized corporate, biomedical engineering, and intellectual property enterprise headquartered in the Dubai Multi Commodities Centre (Dubai, UAE; formerly incorporated in the Isle of Man). The enterprise holds the patents and technologies invented by **Dr. Muhammed Aslam Nasir** (MBBS, FRCA, Macewen Medal recipient) — notably the world-renowned **i-gel®** human supraglottic airway (licensed globally to Intersurgical Ltd) and **v-gel®** species-specific veterinary supraglottic airway devices (partnered with Docsinnovent Ltd).

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start (SSR + Client Routing) |
| Frontend | React 19, TanStack Router v1 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) + Custom Glassmorphism Theme |
| Icons | Lucide React |
| Serverless Forms | Netlify Forms (Static detection skeleton via `public/__forms.html`) |
| Build & Bundler | Vite 7 + `@netlify/vite-plugin-tanstack-start` |
| Language | TypeScript 5.9 (Strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   ├── __forms.html                  # Static skeleton HTML for Netlify build-bot form detection
│   ├── favicon.ico
│   └── placeholder.png
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Sticky navigation header with mobile drawer
│   │   ├── Footer.tsx                # Corporate footer, Macewen Medal tribute & DMCC license info
│   │   ├── SizingCalculator.tsx      # Interactive clinical & veterinary airway sizing selector
│   │   └── ContactForm.tsx           # Netlify AJAX contact and commercial inquiry form
│   ├── data/
│   │   ├── products.ts               # Complete technical specs for i-gel® and v-gel®
│   │   ├── directors.ts              # Executive profiles: Dr. M.A. Nasir & Nasir family directors
│   │   └── clinicalEvidence.ts       # Peer-reviewed studies (JAMA, DAS, etc.) and patent records
│   ├── routes/
│   │   ├── __root.tsx                # Root layout, HTML shell, meta tags, and global providers
│   │   ├── index.tsx                 # Homepage showcasing technologies, directors, and clinical need
│   │   ├── igel.tsx                  # Dedicated clinical deep-dive for i-gel® human airway
│   │   ├── vgel.tsx                  # Dedicated veterinary showcase for v-gel® advanced
│   │   ├── leadership.tsx            # Comprehensive Board of Directors & executive leadership
│   │   ├── clinical-evidence.tsx     # Landmark clinical trials, Macewen Medal, and patent families
│   │   ├── contact.tsx               # DMCC corporate seat details and partnership inquiry form
│   │   └── products/
│   │       └── $productId.tsx        # Dynamic route for specific airway product specifications
│   ├── router.tsx                    # TanStack Router instance configuration
│   └── styles.css                    # Tailwind CSS 4 directives, CSS tokens & medical aesthetic styles
├── netlify.toml                      # Netlify build configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md                         # Project introduction and local setup guide
└── AGENTS.md                         # Architectural context for future AI agents
```

## Key Architectural Decisions


1. **Route Architecture:**
   - `/`: Central corporate landing page presenting the core clinical paradigm shift (gel-seal vs inflatable cuff), Dr. Nasir's background, and dual portfolios.
   - `/igel`: Dedicated human clinical specifications, neonatal to adult sizing matrix, and guidelines.
   - `/vgel`: Dedicated veterinary specifications for felines, rabbits, canines, and foals.
   - `/leadership`: In-depth executive biographies for Dr. Muhammed Aslam Nasir, Talha Nasir, Mr. Tuaha Nasir, Mr. Adam Nasir, and Mr. Danyal Nasir.
   - `/clinical-evidence`: Full literature summaries (AIRWAYS-2 trial in JAMA, DAS Guidelines, etc.) and global patent listings (US, EP, WO).
   - `/contact`: Official DMCC Free Zone registration details and inquiry form.

2. **Styling & Aesthetics:**
   Uses Tailwind CSS 4 with custom dark medical aesthetics:
   - Deep midnight navy (`#070d19`, `#0b1528`)
   - Surgical teal and cyan accents (`#0ea5e9`, `#06b6d4`, `#10b981`)
   - Subtle glassmorphic card borders and glowing status badges

3. **Testing & Build Verification:**
   Do not run build or dev server commands (`vite build`, `npm run build`, `tsc`) directly in this environment; Netlify's automated build runner handles compilation and validation upon commit.
