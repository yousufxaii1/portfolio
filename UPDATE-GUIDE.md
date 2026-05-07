# Update Guide — Hamza Khan Portfolio

A no-jargon walkthrough for keeping your portfolio current. Bookmark this file. You don't need to know HTML — just enough to copy, paste, and replace text.

---

## Tools you need (all free)

1. **A code editor** — [VS Code](https://code.visualstudio.com/) is free and works on Mac/Windows. Or edit directly on github.com after deploying.
2. **A web browser** — to preview your changes.
3. **Your portfolio file** — `index.html`.

That's it.

---

## How to find anything in the file

Every common edit point in `index.html` has a labeled comment marker. To find one:

1. Open `index.html` in VS Code (or any text editor).
2. Press **Cmd + F** (Mac) or **Ctrl + F** (Windows).
3. Type the search term from the table below.
4. Press Enter — your cursor jumps to the right spot.

| What you want to do | Search for this exact text |
|---|---|
| Add a new case study (homepage) | `ADD NEW CASE STUDY (HOMEPAGE` |
| Add a new case study (work page) | `ADD NEW CASE STUDY (WORK PAGE` |
| Update your bio / intro paragraph | `TO UPDATE: BIO` |
| Update your current job role | `TO UPDATE: CURRENT ROLE` |
| Update years of experience / project count | `TO UPDATE: HERO STATS` |
| Add a certification | `ADD NEW CERTIFICATION` |
| Add or edit a service | `ADD NEW SERVICE` |
| Update email, phone, location | `TO UPDATE: CONTACT INFO` |
| Update Behance / LinkedIn / Upwork URLs | `TO UPDATE: SOCIAL LINKS` |
| Change the accent color (red → blue, etc.) | `TO UPDATE: ACCENT COLOR` |

---

## The 6 most common updates, step by step

### 1. Add a new case study to the work page

You finished a new project on Behance and want to add it.

**Step 1 — Get two URLs from Behance:**
- The project URL (e.g. `https://www.behance.net/gallery/123456789/Project-Name`)
- The cover image URL: open your Behance project, right-click the cover image, choose **"Copy image address"** (or "Copy image link" depending on your browser).

**Step 2 — Open `index.html` and search for `ADD NEW CASE STUDY (WORK PAGE`.**

**Step 3 — Find the *last* case study card in that grid.** It looks like a block starting with `<a href="..." class="gallery-item reveal">` and ending with `</a>`. The very last one in the section is "Agency Landing Page".

**Step 4 — Copy that entire block** (from `<a href` to `</a>`) and paste it right after, before the closing `</div>` that ends the gallery.

**Step 5 — In the new copy, replace these 7 things:**
- The URL after `href="..."` → your project URL
- The URL after `src="..."` → your cover image URL
- The text after `alt="..."` → a short description ("Brand X Marketing Site")
- The number inside `<span class="gallery-num">011</span>` → next number (e.g. 011)
- The category in `<div class="gallery-meta">` (e.g. "MARKETING / WEB") and the year
- The title inside `<h3 class="gallery-title">...</h3>`
- The description inside `<p class="gallery-desc">...</p>`
- The two tag values inside `<span class="gallery-tag">...</span>`

**Step 6 — Save the file.** Open `index.html` in your browser to preview.

---

### 2. Replace one of the 4 featured projects on the homepage

The homepage features your top 4 projects in an asymmetric grid. To swap one:

1. Search for `ADD NEW CASE STUDY (HOMEPAGE`.
2. Find the card you want to replace — they're labeled `CASE STUDY 001`, `002`, `003`, `004`.
3. Update the same 7 fields as above (project URL, image, alt text, category, title, description, tags). **Don't change the structure** — just the values.

**Important:** The first card is full-width (hero card, larger image). The 4th card is a horizontal split (image + text side by side). Keep this in mind when picking which project goes where:
- Card 001 → your strongest, most recent project
- Cards 002 & 003 → solid, standard projects
- Card 004 → a project that benefits from text alongside the image (good for telling a quick story)

---

### 3. Update your bio when your role or focus changes

1. Search for `TO UPDATE: BIO`.
2. The next paragraph (inside `<p class="hero-sub">`) is your intro.
3. Edit the text directly. Keep the `<strong>...</strong>` tags around words you want to bold (e.g. **7+ years**, **AI, fintech, healthcare**).
4. Save.

If you also want to update the headline ("Designing products people love/trust/need"), that lives just above the bio. The three rotating words are inside `<span class="rotator-word">...</span>` blocks.

---

### 4. Update your current role (when you change jobs)

1. Search for `TO UPDATE: CURRENT ROLE`.
2. The first experience entry is your current role. Update:
   - **Date range** (e.g. "JAN 2026 — PRESENT")
   - **Role title** (inside `<div class="exp-role">...</div>`)
   - **Company name** (inside `<div class="exp-company">...</div>`)
   - **Description** (inside `<div class="exp-desc">...</div>`)

To **add a new role** (e.g. you got promoted but want to keep your prior role visible), copy any existing `<div class="exp-item reveal">...</div>` block and paste it as the new first entry.

To **demote a role to past experience**, just update its date range to show an end date (e.g. "JAN 2023 — DEC 2025").

---

### 5. Add a new certification

1. Search for `ADD NEW CERTIFICATION`.
2. Copy any existing `<div class="cert-item reveal">...</div>` block.
3. Paste it as the new first entry (newest at top).
4. Update three fields:
   - Issuer (e.g. `PRODUCT SCHOOL`, `COURSERA — GOOGLE`)
   - Certificate name
   - Date (e.g. `JAN 2026`)

---

### 6. Update contact info or social links

**For email, phone, location:**
1. Search for `TO UPDATE: CONTACT INFO`.
2. Update the values inside the three contact cards.
3. **Important:** The email also appears in two CTA buttons higher up in the contact page header — search for `mailto:muhammadhamzak005` and update those too.
4. The phone number link starts with `tel:+` and should have **no spaces** (e.g. `tel:+923204859607`).

**For Behance / LinkedIn / Upwork:**
1. Search for `TO UPDATE: SOCIAL LINKS`.
2. Update **two things** for each card:
   - The URL after `href="..."` (the actual link destination)
   - The visible text inside `<div class="contact-method-value">...</div>` (what users see)

---

## Changing the accent color

The portfolio uses one accent color (currently coral red — `#E5483A`) across:
- Italic serif highlights ("proud of", "actually", etc.)
- Active nav link
- The big stat takeover panel
- Buttons and hover states
- The cursor dot

To change it:

1. Search for `TO UPDATE: ACCENT COLOR`.
2. Two values are right below it — `--accent` and `--accent-deep`.
3. Replace both with a new color hex code. The deep version should be slightly darker than the main one.

**Suggested palettes:**
- Forest green: `--accent: #16A34A;` and `--accent-deep: #128140;`
- Royal blue: `--accent: #3B82F6;` and `--accent-deep: #2563EB;`
- Deep purple: `--accent: #7C3AED;` and `--accent-deep: #6D28D9;`
- Burnt orange: `--accent: #EA580C;` and `--accent-deep: #C2410C;`

To keep the current coral but tone it down, try `#D14530` for a slightly more muted version.

---

## Previewing changes locally

1. Save your edits in VS Code (`Cmd + S` on Mac, `Ctrl + S` on Windows).
2. Find `index.html` in your file manager.
3. **Double-click it** — it opens in your default browser.
4. If it's already open, refresh the tab (`Cmd/Ctrl + R`).

If something looks broken — text running together, missing sections, wrong colors — you probably accidentally deleted a tag. Press `Cmd/Ctrl + Z` in your editor to undo, or revert to the GitHub version.

---

## Deploying changes (after initial setup)

If you've deployed via Vercel or Netlify connected to GitHub:

**The 30-second update flow:**
1. Go to your GitHub repo (e.g. `github.com/yourname/portfolio`).
2. Click `index.html` → click the pencil icon (✏️) in the top-right.
3. Make your edits in the browser editor.
4. Scroll down, click **"Commit changes"**.
5. Wait ~30 seconds — your live site updates automatically.

**If editing locally:**
1. Save changes in VS Code.
2. Open Terminal in the project folder.
3. Run these three commands:
   ```
   git add .
   git commit -m "Updated case study"
   git push
   ```
4. Site auto-deploys.

---

## When something breaks — what to do

**The site looks blank or broken after your edit:**
- Open the browser console (`F12` → Console tab). It usually tells you what line has the issue.
- Most common cause: you accidentally deleted a `<` or `>` or `"` character.
- Press undo (`Cmd/Ctrl + Z`) until things look right again.

**A Behance image isn't loading on the live site:**
- Behance occasionally changes image URLs. Open the project on Behance, right-click the cover, copy the new image address, paste it into your `<img src="...">`.

**You broke something and can't fix it:**
- If on GitHub: every commit is reversible. Open your repo → click the ⏱️ (clock) icon to view history → revert to a previous version.
- If editing locally without git: keep a backup copy of `index.html` somewhere safe (e.g. Google Drive) before making big changes.

**You want to revert all your changes today:**
- On GitHub: go to commit history, find the last good version, click "..." → "Revert this commit".

---

## What you should never edit (unless you really know what you're doing)

These parts are wired to functionality. Editing them can break the site:

- Anything inside `<style>...</style>` (the CSS) unless you're changing the accent color.
- Anything inside `<script>...</script>` at the bottom of the file (the JavaScript).
- The `id="page-home"`, `id="page-work"`, etc. — these power the routing.
- The `<nav>...</nav>` block — changing menu items requires updating the script too.

If you want to do any of the above, ask me or another AI assistant — paste in the file and explain what you want changed.

---

## When you've outgrown this setup

Signs you might want to migrate to a CMS like Framer or Webflow:
- You're updating weekly and the manual flow is slowing you down.
- You want to add a blog with frequent posts.
- Multiple people need to edit the site without touching code.
- You want analytics, A/B testing, or e-commerce features.

Until then, this single-file setup is the right tool. It's faster to load, costs nothing, and lets you focus on the work — not the platform.

---

## Quick reference — the 4 pages and what's on each

**Home (`#home`)** — landing page
- Hero with rotating word and stats
- Marquee of industries
- 4 featured case studies (asymmetric layout)
- Coral stat takeover panel
- Approach + 3 principles
- Experience timeline + Education
- 10 Credentials (certifications)
- CTA buttons

**Work (`#work`)** — full archive
- Page header with stats grid
- 4 featured case studies (asymmetric)
- 6 more projects (standard 2-up grid)
- CTA

**Services (`#services`)** — your offerings
- 5 service blocks (AI Product Design, Enterprise SaaS, End-to-End, Design Systems, Mobile)
- 4-step process (Discover / Design / Validate / Ship)
- 3 engagement models (Project / Retainer / Full-time)
- CTA

**Contact (`#contact`)** — how to reach you
- Direct contact (email, phone, location)
- Find me elsewhere (Behance, LinkedIn, Upwork)
- Best Fit projects
- Availability + live time

---

*Last updated: when you deployed. Keep this file alongside `index.html` so future-you (or anyone helping you) knows where everything lives.*
