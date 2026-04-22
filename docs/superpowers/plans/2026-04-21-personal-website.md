# Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a clean 4-page personal website for Mike Pacione — About, Projects, Resume, Contact — deployed to Vercel with a custom GoDaddy domain.

**Architecture:** Plain HTML/CSS/JS, no framework, no build step. Four `.html` files share one `styles.css` and one `main.js`. Mobile responsive via CSS media queries. Email address is JS-obfuscated at runtime — never appears in plain HTML source.

**Tech Stack:** HTML5, CSS3, Vanilla JS, Vercel (hosting), GitHub (version control), GoDaddy DNS

---

## Before You Start — Fill These In

Two values need to be confirmed with Mike before building the Contact and Projects pages:

| Placeholder | What it is | Where used |
|---|---|---|
| `[LINKEDIN_URL]` | Mike's full LinkedIn profile URL | contact.html |
| `[PATCHCALCS_URL]` | Live URL for PatchCalcs app | projects.html |

Everything else is ready to go.

---

## File Map

| File | Purpose |
|---|---|
| `index.html` | About / Bio page (home) |
| `projects.html` | Notable projects — card layout |
| `resume.html` | Resume — timeline layout + PDF download |
| `contact.html` | Contact links — obfuscated email + LinkedIn |
| `styles.css` | All shared styles across 4 pages |
| `main.js` | Nav toggle (mobile) + email obfuscation |
| `assets/Mike_Pacione_Resume.pdf` | Cleaned resume PDF (no phone/references) |
| `.gitignore` | Ignore `.superpowers/`, `.DS_Store` |

---

## Task 1: Scaffold + Shared Styles

**Files:**
- Create: `styles.css`
- Create: `.gitignore`

> Note: This site has no JS test framework. Verification for all tasks is done by opening the file in a browser and checking the listed items visually.

- [ ] **Step 1: Create `.gitignore`**

```
.DS_Store
.superpowers/
*.log
```

- [ ] **Step 2: Create `styles.css` with full shared styles**

```css
/* Reset */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* Base */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: #111;
  background: #fff;
  line-height: 1.6;
}

a { color: inherit; }

/* Nav */
.nav {
  background: #111;
  color: #fff;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand {
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  opacity: 0.7;
  transition: opacity 0.15s;
  padding-bottom: 2px;
}

.nav-links a:hover,
.nav-links a.active {
  opacity: 1;
  border-bottom: 1px solid #fff;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1;
  padding: 4px;
}

/* Mobile nav */
@media (max-width: 640px) {
  .nav-toggle { display: block; }
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    background: #111;
    padding: 1rem 2rem 1.5rem;
    gap: 1rem;
  }
  .nav-links.open { display: flex; }
}

/* Page container */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

/* Typography */
h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

h2 {
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
}

h3 {
  font-size: 1.1rem;
  font-weight: 700;
}

.credentials {
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.5rem;
  letter-spacing: 0.03em;
}

.tagline {
  font-size: 1rem;
  color: #555;
  margin-top: 0.25rem;
}

/* Accent block (left border) */
.accent {
  border-left: 3px solid #111;
  padding-left: 1.25rem;
  margin-top: 2rem;
  color: #333;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.6rem 1.25rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.btn-primary {
  background: #111;
  color: #fff;
  border: 1.5px solid #111;
}

.btn-primary:hover { background: #333; border-color: #333; }

.btn-outline {
  background: transparent;
  color: #111;
  border: 1.5px solid #111;
}

.btn-outline:hover { background: #f5f5f5; }

.btn-group {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

/* Project cards */
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 1.5rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.card-tagline {
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 0.75rem;
}

.card-description {
  font-size: 0.9rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.status-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  letter-spacing: 0.03em;
}

.status-live { background: #e6f4ea; color: #1a7f37; }
.status-dev { background: #f0f0f0; color: #555; }

/* Timeline (resume) */
.timeline { margin-top: 1rem; }

.timeline-entry {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e5e5;
}

.timeline-entry:last-child { border-bottom: none; }

.timeline-left {
  font-size: 0.875rem;
}

.timeline-company {
  font-weight: 700;
  font-size: 0.9rem;
}

.timeline-dates {
  color: #555;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}

.timeline-role {
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.timeline-bullets {
  padding-left: 1.25rem;
  font-size: 0.875rem;
  color: #333;
  line-height: 1.7;
}

.resume-section { margin-top: 3rem; }

.resume-section-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #888;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e5e5;
}

.edu-entry {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  padding: 0.6rem 0;
  font-size: 0.875rem;
  border-bottom: 1px solid #f0f0f0;
}

.edu-entry:last-child { border-bottom: none; }

.edu-year { color: #555; white-space: nowrap; }

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.skill-tag {
  font-size: 0.8rem;
  padding: 0.3rem 0.75rem;
  border: 1px solid #e5e5e5;
  border-radius: 100px;
  color: #333;
}

/* Contact links */
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  text-decoration: none;
  color: #111;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.15s;
}

.contact-link:hover { background: #f9f9f9; }

.contact-icon {
  font-size: 1.25rem;
  width: 2rem;
  text-align: center;
}

/* Footer */
footer {
  border-top: 1px solid #e5e5e5;
  padding: 2rem;
  text-align: center;
  font-size: 0.8rem;
  color: #888;
}

/* Mobile responsive */
@media (max-width: 640px) {
  .container { padding: 2.5rem 1.25rem; }
  .timeline-entry { grid-template-columns: 1fr; gap: 0.25rem; }
  .timeline-left { display: flex; gap: 0.75rem; align-items: baseline; }
  .timeline-dates::before { content: "·"; margin-right: 0.75rem; }
}
```

- [ ] **Step 3: Verify styles file is valid**

Open Terminal and run:
```bash
cd /Users/mikepacione/Documents/Claude/Projects/personal-website
cat styles.css | wc -l
```
Expected: a number above 200 (confirms file wrote correctly).

- [ ] **Step 4: Initialize git and commit**

```bash
cd /Users/mikepacione/Documents/Claude/Projects/personal-website
git init
git add styles.css .gitignore
git commit -m "feat: scaffold project with shared styles"
```

---

## Task 2: Shared JavaScript

**Files:**
- Create: `main.js`

- [ ] **Step 1: Create `main.js`**

```js
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav')) links.classList.remove('open');
  });
}

// Mark active nav link based on current page
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// Email obfuscation — address assembled at click time, never in HTML source
function initEmail() {
  const el = document.getElementById('email-link');
  if (!el) return;
  const u = 'mikepacione';
  const d = 'gmail.com';
  const s = encodeURIComponent('Hey Mike');
  el.href = `mailto:${u}@${d}?subject=${s}`;
  el.textContent = `${u}@${d}`;
}
document.addEventListener('DOMContentLoaded', initEmail);
```

- [ ] **Step 2: Commit**

```bash
git add main.js
git commit -m "feat: add shared JS for nav toggle and email obfuscation"
```

---

## Task 3: About Page

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mike Pacione</title>
  <meta name="description" content="Mike Pacione — Product Manager, Builder, Outdoorsman.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="nav">
    <a href="index.html" class="nav-brand">Mike Pacione</a>
    <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
    <ul class="nav-links">
      <li><a href="index.html">About</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="resume.html">Resume</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>

  <main class="container">
    <h1>Mike Pacione</h1>
    <p class="credentials">BA &middot; PMP &middot; MDes</p>
    <p class="tagline">Product Manager &middot; Builder &middot; Outdoorsman</p>

    <div class="accent">
      <p>Strategic product leader with 10+ years building across fintech, financial services, and SaaS. I connect vision to execution — working with engineers, designers, and executives to ship products people actually use. Outside of work, you'll find me hunting, hiking, and exploring the backcountry.</p>
    </div>

    <div class="btn-group">
      <a href="projects.html" class="btn btn-primary">View Projects &rarr;</a>
      <a href="resume.html" class="btn btn-outline">Download Resume</a>
    </div>
  </main>

  <footer>
    <p>&copy; 2026 Mike Pacione</p>
  </footer>

  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

```bash
open index.html
```

Check:
- Big bold name renders at top
- Credentials line below name
- Bio block has left border accent
- Two buttons visible below bio
- Nav is black bar with white links
- "About" link in nav is underlined (active state)
- Resize window narrow — hamburger menu appears, clicking it opens nav links

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add About page"
```

---

## Task 4: Projects Page

**Files:**
- Create: `projects.html`

> Before this task: confirm `[PATCHCALCS_URL]` with Mike. If unknown, use `#` as the href and add a `TODO` comment.

- [ ] **Step 1: Create `projects.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projects — Mike Pacione</title>
  <meta name="description" content="Apps and products built by Mike Pacione.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="nav">
    <a href="index.html" class="nav-brand">Mike Pacione</a>
    <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
    <ul class="nav-links">
      <li><a href="index.html">About</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="resume.html">Resume</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>

  <main class="container">
    <h2>Projects</h2>

    <div class="cards">

      <div class="card">
        <div class="card-title">PatchMaps</div>
        <div class="card-tagline">Outdoor Trail Mapping &amp; Trip Planning</div>
        <div class="card-description">
          A mobile app built for hunters, hikers, and backcountry explorers. PatchMaps lets you track trails, drop waypoints, and share locations with friends — all offline. Built with Expo and React Native, with MapLibre for offline map rendering and Supabase for sync.
        </div>
        <div class="card-footer">
          <span class="status-tag status-dev">In Development</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Safebite</div>
        <div class="card-tagline">Restaurant Inspection Intelligence for Operators</div>
        <div class="card-description">
          A B2B SaaS platform that helps restaurant operators track their health inspection history, benchmark against competitors, and prepare for upcoming inspections. Built with Next.js, Supabase, and PostGIS — starting with Toronto DineSafe data, expanding to all of Canada.
        </div>
        <div class="card-footer">
          <span class="status-tag status-dev">In Development</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">PatchCalcs</div>
        <div class="card-tagline">Live Mortgage Calculator for Brokers</div>
        <div class="card-description">
          A fast, embeddable mortgage calculator web app built for mortgage brokers. Gives clients a real-time breakdown of payments, amortization, and qualifying rates — without the friction of a full application.
        </div>
        <div class="card-footer">
          <span class="status-tag status-live">Live</span>
          <a href="https://patchcalcs.vercel.app" target="_blank" rel="noopener" class="btn btn-outline">View App &rarr;</a>
        </div>
      </div>

    </div>
  </main>

  <footer>
    <p>&copy; 2026 Mike Pacione</p>
  </footer>

  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

```bash
open projects.html
```

Check:
- Three cards render, one per project
- "In Development" tags are grey, "Live" tag is green
- PatchCalcs has a "View App" button (confirm URL is filled in)
- "Projects" is underlined in nav
- Cards stack cleanly on mobile

- [ ] **Step 3: Commit**

```bash
git add projects.html
git commit -m "feat: add Projects page with PatchMaps, Safebite, PatchCalcs cards"
```

---

## Task 5: Resume Page

**Files:**
- Create: `resume.html`

- [ ] **Step 1: Create `resume.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume — Mike Pacione</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="nav">
    <a href="index.html" class="nav-brand">Mike Pacione</a>
    <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
    <ul class="nav-links">
      <li><a href="index.html">About</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="resume.html">Resume</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>

  <main class="container">
    <div style="display:flex; align-items:baseline; justify-content:space-between; flex-wrap:wrap; gap:1rem; margin-bottom:2.5rem;">
      <h2 style="margin-bottom:0;">Resume</h2>
      <a href="assets/Mike_Pacione_Resume.pdf" download class="btn btn-outline">Download PDF &darr;</a>
    </div>

    <!-- Experience -->
    <div class="resume-section">
      <div class="resume-section-title">Experience</div>
      <div class="timeline">

        <div class="timeline-entry">
          <div class="timeline-left">
            <div class="timeline-company">DLC Group / Newton</div>
            <div class="timeline-dates">2025 &ndash; present</div>
          </div>
          <div class="timeline-right">
            <div class="timeline-role">Product Manager, Strategic Initiatives</div>
            <ul class="timeline-bullets">
              <li>Managing developers delivering a suite of web-based lead generation products: a national website rebrand, a broker platform for 10,000+ agents, and a proprietary marketing asset distribution platform.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-entry">
          <div class="timeline-left">
            <div class="timeline-company">Mortgage Automator</div>
            <div class="timeline-dates">2024 &ndash; 2025</div>
          </div>
          <div class="timeline-right">
            <div class="timeline-role">Senior Product Manager, Partnerships &amp; Integrations</div>
            <ul class="timeline-bullets">
              <li>Executed strategic integrations with Equifax, CMHC, Adobe, OpenAI, and others to expand platform adoption and compliance coverage.</li>
              <li>Spearheaded AI-enabled product initiatives contributing to a $100M+ acquisition outcome.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-entry">
          <div class="timeline-left">
            <div class="timeline-company">PSC Administration</div>
            <div class="timeline-dates">2023 &ndash; 2024</div>
          </div>
          <div class="timeline-right">
            <div class="timeline-role">Interim President</div>
            <ul class="timeline-bullets">
              <li>Held full P&amp;L accountability; led technology and product deployments that increased AUM by 200%.</li>
              <li>Managed investor onboarding across registered and corporate accounts with Fundserv and SGGG.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-entry">
          <div class="timeline-left">
            <div class="timeline-company">Deloitte, OMNIA AI</div>
            <div class="timeline-dates">2021 &ndash; 2022</div>
          </div>
          <div class="timeline-right">
            <div class="timeline-role">Manager, Strategy Consulting</div>
            <ul class="timeline-bullets">
              <li>Delivered $500K+ in AI strategy engagements for major Canadian institutions, translating business goals into actionable AI roadmaps.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-entry">
          <div class="timeline-left">
            <div class="timeline-company">M-Link Corporation</div>
            <div class="timeline-dates">2018 &ndash; 2021</div>
          </div>
          <div class="timeline-right">
            <div class="timeline-role">Director, Product &amp; Business Development</div>
            <ul class="timeline-bullets">
              <li>Designed and launched new financial products responsible for 200% business growth within 14 months.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-entry">
          <div class="timeline-left">
            <div class="timeline-company">Paradigm Quest</div>
            <div class="timeline-dates">2015 &ndash; 2018</div>
          </div>
          <div class="timeline-right">
            <div class="timeline-role">Product Manager &amp; Business Analyst</div>
            <ul class="timeline-bullets">
              <li>Managed software development and change management projects for enterprise financial services clients.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <!-- Education -->
    <div class="resume-section">
      <div class="resume-section-title">Education</div>
      <div class="timeline">
        <div class="edu-entry">
          <div><strong>MDes, Strategic Foresight &amp; Innovation</strong> &mdash; OCAD University</div>
          <div class="edu-year">2023</div>
        </div>
        <div class="edu-entry">
          <div><strong>PMP</strong> &mdash; Project Management Institute</div>
          <div class="edu-year">2018</div>
        </div>
        <div class="edu-entry">
          <div><strong>Certificate, Business Analysis</strong> &mdash; University of Toronto</div>
          <div class="edu-year">2016</div>
        </div>
        <div class="edu-entry">
          <div><strong>BA, Communications &amp; Business</strong> <em>(Magna Cum Laude)</em> &mdash; University of Ottawa</div>
          <div class="edu-year">2015</div>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div class="resume-section">
      <div class="resume-section-title">Skills</div>
      <div class="skills-list">
        <span class="skill-tag">Product Management</span>
        <span class="skill-tag">Team Leadership</span>
        <span class="skill-tag">AI &amp; Strategy</span>
        <span class="skill-tag">Fintech &amp; Financial Services</span>
        <span class="skill-tag">Partner Integrations</span>
        <span class="skill-tag">Go-to-Market</span>
        <span class="skill-tag">Agile</span>
        <span class="skill-tag">User Research</span>
      </div>
    </div>

  </main>

  <footer>
    <p>&copy; 2026 Mike Pacione</p>
  </footer>

  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

```bash
open resume.html
```

Check:
- "Download PDF" button appears top right of the Resume heading
- Timeline layout: company/date on left, role + bullets on right
- All 6 experience entries render with correct dates
- Education section renders as clean rows
- Skills render as pill tags
- On mobile (narrow window): timeline collapses to single column, company and date appear inline
- "Resume" is underlined in nav

- [ ] **Step 3: Commit**

```bash
git add resume.html
git commit -m "feat: add Resume page with timeline layout"
```

---

## Task 6: Contact Page

**Files:**
- Create: `contact.html`

> Before this task: confirm `[LINKEDIN_URL]` with Mike (his full LinkedIn profile URL).

- [ ] **Step 1: Create `contact.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact — Mike Pacione</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="nav">
    <a href="index.html" class="nav-brand">Mike Pacione</a>
    <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
    <ul class="nav-links">
      <li><a href="index.html">About</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="resume.html">Resume</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>

  <main class="container">
    <h2>Contact</h2>
    <p style="color:#555; margin-bottom:0.5rem;">Want to connect? Here's where to find me.</p>

    <div class="contact-links">

      <a id="email-link" href="#" class="contact-link">
        <span class="contact-icon">&#9993;</span>
        <span>Loading...</span>
      </a>

      <!-- Replace [LINKEDIN_URL] with Mike's actual LinkedIn profile URL -->
      <a href="[LINKEDIN_URL]" target="_blank" rel="noopener" class="contact-link">
        <span class="contact-icon">in</span>
        <span>LinkedIn</span>
      </a>

    </div>
  </main>

  <footer>
    <p>&copy; 2026 Mike Pacione</p>
  </footer>

  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

```bash
open contact.html
```

Check:
- Email link initially shows "Loading..." then immediately updates to `mikepacione@gmail.com` (JS runs on DOMContentLoaded)
- Right-clicking the page and choosing "View Page Source" — confirm `mikepacione@gmail.com` does NOT appear anywhere in the raw HTML source
- Clicking the email link opens the user's email client with `mikepacione@gmail.com` pre-filled and subject line "Hey Mike"
- LinkedIn button is visible (URL will be `#` placeholder until confirmed)
- "Contact" is underlined in nav
- Links are full-width cards with hover state

- [ ] **Step 3: Commit**

```bash
git add contact.html
git commit -m "feat: add Contact page with obfuscated email"
```

---

## Task 7: Assets + Final Polish

**Files:**
- Create: `assets/` directory
- Add: `assets/Mike_Pacione_Resume.pdf` (cleaned PDF — no phone, no references)

- [ ] **Step 1: Create assets folder and copy cleaned PDF**

The cleaned PDF is the April 2026 version with phone number and all references removed. If you have the cleaned PDF ready:

```bash
mkdir -p assets
cp "/Users/mikepacione/Downloads/Mike_Pacione_April 2026.pdf" assets/Mike_Pacione_Resume.pdf
```

> Note: The PDF at this path still contains the phone number and references. Before copying, Mike needs to either: (a) edit the PDF to remove those items, or (b) confirm we create a new clean version from the resume.html content using browser print-to-PDF.

- [ ] **Step 2: Verify PDF download works**

Open `resume.html` in browser, click "Download PDF" button. Confirm the file downloads correctly.

- [ ] **Step 3: Fill in remaining placeholders**

Replace both placeholders in the HTML files:

In `projects.html` — replace `[PATCHCALCS_URL]`:
```bash
sed -i '' 's|\[PATCHCALCS_URL\]|https://patchcalcs.vercel.app|g' projects.html
```

In `contact.html` — replace `[LINKEDIN_URL]`:
```bash
# Example (use actual URL):
sed -i '' 's|\[LINKEDIN_URL\]|https://www.linkedin.com/in/mikepacione|g' contact.html
```

- [ ] **Step 4: Do a full cross-page check**

Open each page and navigate between them via the nav bar. Verify:
- Active nav link is correctly underlined on each page
- Mobile hamburger works on each page
- All internal links work
- Footer appears on all pages

- [ ] **Step 5: Commit**

```bash
git add assets/ projects.html contact.html
git commit -m "feat: add resume PDF and fill in placeholder URLs"
```

---

## Task 8: Deploy to Vercel + Connect Domain

- [ ] **Step 1: Create GitHub repo and push**

Go to github.com, create a new repo named `personal-website` (public or private). Then:

```bash
cd /Users/mikepacione/Documents/Claude/Projects/personal-website
git remote add origin https://github.com/[YOUR_GITHUB_USERNAME]/personal-website.git
git branch -M main
git push -u origin main
```

- [ ] **Step 2: Connect to Vercel**

1. Go to vercel.com and log in
2. Click "Add New → Project"
3. Import the `personal-website` GitHub repo
4. Framework preset: leave as **Other** (it's plain HTML)
5. Build command: leave blank
6. Output directory: leave blank (or set to `.`)
7. Click Deploy

Vercel will give you a URL like `personal-website-abc123.vercel.app`. Confirm the site loads correctly at that URL.

- [ ] **Step 3: Add custom domain in Vercel**

1. In Vercel project settings → Domains
2. Add `mikepacione.com` and `www.mikepacione.com`
3. Vercel will show you DNS records to add

- [ ] **Step 4: Update GoDaddy DNS**

Log in to GoDaddy → DNS Management for `mikepacione.com`. Add the records Vercel provides. Typically:

| Type | Name | Value |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

DNS changes can take up to 24 hours but usually propagate within minutes.

- [ ] **Step 5: Verify live site**

Once DNS propagates, open `https://mikepacione.com` in browser. Confirm:
- Site loads over HTTPS (padlock in browser)
- All 4 pages work
- Email obfuscation still works on live site
- PDF download works

- [ ] **Step 6: Final commit and update build log**

```bash
git add .
git commit -m "chore: finalize deployment configuration"
```

Update `Personal Website Build Log.md` in Obsidian with today's date and "Site live at mikepacione.com".

---

## Remaining Items for Mike to Confirm

Before Task 7 and Task 8 are done, these need answers:

1. **PatchCalcs URL** — what's the live URL for PatchCalcs?
2. **LinkedIn URL** — what's the full URL to your LinkedIn profile?
3. **Cleaned resume PDF** — do you want to edit the existing PDF, or print the `resume.html` page to PDF as the download file?
4. **GitHub username** — what GitHub account should this repo live under?
