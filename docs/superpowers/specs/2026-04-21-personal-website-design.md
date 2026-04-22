# Personal Website — Design Spec
Date: 2026-04-21

## Overview

A simple, clean personal website for Mike Pacione. Four pages, no framework, no CMS. Deployed to Vercel with a custom GoDaddy domain (mikepacione.com). Fully responsive — desktop and mobile.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Markup | Plain HTML (4 separate `.html` files) |
| Styling | Custom CSS (`styles.css`, shared across all pages) |
| Behaviour | Vanilla JS (`main.js`, shared across all pages) |
| Hosting | Vercel (free tier) |
| Domain | GoDaddy → pointed at Vercel |
| Version control | GitHub |

No build step. No dependencies. No framework.

---

## File Structure

```
personal-website/
├── index.html          ← About / Bio (home)
├── projects.html       ← Notable Projects & Apps
├── resume.html         ← Resume (timeline format)
├── contact.html        ← Contact & Links
├── styles.css          ← Shared styles
├── main.js             ← Shared JS (nav + email obfuscation)
├── assets/
│   └── Mike_Pacione_Resume.pdf   ← Cleaned resume PDF for download
└── docs/
    └── superpowers/specs/
        └── 2026-04-21-personal-website-design.md
```

---

## Visual Design

**Style:** Clean & Professional — white background, bold sans-serif typography, high contrast black/white, minimal colour.

**Inspiration:** Structural approach borrowed from mattpacione.com — simple nav, timeline resume layout, credential one-liner opener, restrained and uncluttered sections.

**Typography:** System sans-serif stack (`system-ui, -apple-system, sans-serif`) — no external font dependencies.

**Colour palette:**
- Background: `#ffffff`
- Primary text: `#111111`
- Secondary text: `#555555`
- Accent / borders: `#e5e5e5`
- Nav background: `#111111`
- Nav text: `#ffffff`

**Accent detail:** Left-border accent (`border-left: 2px solid #111`) used on bio and key callout text — borrowed from Style C selected during brainstorming.

---

## Navigation

Shared across all 4 pages. Black bar, white text. Items: `About · Projects · Resume · Contact`. Active page is underlined. On mobile: hamburger icon collapses to a dropdown menu.

---

## Pages

### 1. About (index.html)

- **Header:** Big bold name — "Mike Pacione" — with credentials on the same line or just below: `BA · PMP · MDes`
- **Credential line:** `Product Manager · Builder · Outdoorsman`
- **Bio:** 2–3 sentences, plain text. Left-border accent styling on the bio block.
- **CTA buttons:** "View Projects →" and "Download Resume" — positioned below bio.
- No photo, no stats, no panels. Just type.

### 2. Projects (projects.html)

Card-based layout. One card per project. Each card includes:
- Project name (bold)
- One-line description
- 2–3 sentence summary of what it is and what problem it solves
- Link to live site or app store (if available)
- Status tag (e.g. "Live", "In Development")

**Projects to feature:**
- PatchMaps — Outdoor mapping app (Expo + React Native, offline-first, trail tracking)
- Safebite — Restaurant inspection SaaS for operators (Next.js + Supabase)
- PatchCalcs — Live mortgage calculator for brokers (web app)

### 3. Resume (resume.html)

**Download button** at top: "Download PDF →" — links to `/assets/Mike_Pacione_Resume.pdf`.

**Timeline layout** (inspired by mattpacione.com): company/date on the left column, role + bullets on the right. Clean horizontal rules between entries.

**Content (web version — privacy trimmed):**

*Experience:*
- DLC Group / Newton — Product Manager, Strategic Initiatives · 2025–present
- Mortgage Automator — Senior Product Manager, Partnerships & Integrations · 2024–2025
- PSC Administration — Interim President · 2023–2024
- Deloitte, OMNIA AI — Manager, Strategy Consulting · 2021–2022
- M-Link Corporation — Director, Product & Business Development · 2018–2021
- Paradigm Quest — Product Manager & Business Analyst · 2015–2018

*Education:*
- MDes, Strategic Foresight & Innovation — OCAD University, 2023
- PMP — Project Management Institute, 2018
- Certificate, Business Analysis — University of Toronto, 2016
- BA, Communications & Business (Magna Cum Laude) — University of Ottawa, 2015

*Skills:* Clean list — Product Management, Team Leadership, AI & Strategy, Fintech & Financial Services, Partner Integrations, Go-to-Market.

**Removed from public version:** Phone number, home address, all references (names and numbers).

### 4. Contact (contact.html)

Visual links layout — no contact form. Clean buttons/icons for each channel:

- **Email:** Obfuscated mailto link (JS-encoded, pre-filled subject line: "Hey Mike"). Visible text shows `mikepacione@gmail.com` but the actual address is assembled by JS at click time — not readable by scrapers.
- **LinkedIn:** Button linking to LinkedIn profile.
- Any additional links (GitHub, etc.) can be added later.

Short intro line above the links: "Want to connect? Here's where to find me."

---

## Email Spam Protection

The email address is never written in plain text in the HTML source. A small JS snippet in `main.js` stores an encoded/split version of the address and assembles it only when the user clicks. The mailto also pre-fills a subject line. Bots that scrape HTML see nothing.

Optional additional layer: route domain through Cloudflare (free) for automatic email obfuscation across the whole site.

---

## Responsive / Mobile

- Nav collapses to hamburger on mobile
- Cards stack vertically on small screens
- Timeline layout collapses to single column
- Font sizes scale down gracefully
- All touch targets meet minimum size requirements

---

## Deployment

1. Push code to GitHub repo (`personal-website`)
2. Connect repo to Vercel (auto-deploys on every push)
3. Point GoDaddy domain (`mikepacione.com`) to Vercel via DNS settings
4. HTTPS handled automatically by Vercel

---

## Out of Scope

- Contact form (backend required — not needed)
- CMS or admin panel
- Analytics (can be added later with a simple script tag)
- Blog or "Ideas" section (can be added later)
- Photo / headshot (not included in initial design)
