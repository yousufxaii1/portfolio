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
| Update years of experience / project count | `TO UPDATE: HERO STATS` (coral panel on Home; the Work page header has its own copy) |
| Edit the capabilities list | `TO UPDATE: CAPABILITIES` |
| Add a certification | `ADD NEW CERTIFICATION` |
| Add or edit a service | `ADD NEW SERVICE` |
| Update email or phone | `TO UPDATE: CONTACT INFO` |
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

### 2. Replace or add a featured project on the homepage

The homepage shows 5 featured projects as full-width panels that alternate dark and light. To swap or add one:

1. Search for `ADD NEW CASE STUDY (HOMEPAGE`.
2. Find the panel you want. They're labeled `CASE PANEL 01` to `CASE PANEL 05`.
3. To replace, change the values in that panel. To add, copy a whole `<a class="case ...">…</a>` block and paste it after the last one.
4. Update these fields: project URL, the number/category/year line, the one-sentence summary, the big word (`case-name`), the image URL and alt text, and the title-and-tags line at the bottom.

**Important:**
- The big word should be one short word, 10 letters or fewer (e.g. `Lending`). It shrinks automatically if it's too wide.
- Alternate `case dark` and `case light`. Dark panels also need `data-light-cursor` in the opening tag — copy from another dark panel.
- If you add a project, also update "See all 22 projects" just below the panels.

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
4. Update two fields:
   - Issuer (e.g. `PRODUCT SCHOOL`, `COURSERA — GOOGLE`)
   - Certificate name

---

### 6. Update contact info or social links

**For email or phone:**
1. Search for `TO UPDATE: CONTACT INFO`.
2. Update the values inside the two contact cards.
3. **Important:** The email also appears in two CTA buttons higher up in the contact page header — search for `mailto:` and update those too.
4. The phone number link starts with `tel:+` and should have **no spaces** (e.g. `tel:+923204859607`).

**For Behance / LinkedIn / Upwork:** (these links also appear in the footer — search `footer-links`)
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
- Hero with oversized headline and rotating word
- Marquee of industries
- Capabilities (search `TO UPDATE: CAPABILITIES`)
- 5 featured case studies (full-width dark/light panels)
- Coral stat takeover panel
- Approach + 3 principles
- Experience timeline + Education
- 10 Credentials (certifications)
- CTA buttons

**Work (`#work`)** — full archive
- Page header with stats grid
- 6 featured case studies (2-up grid)
- 16 more projects (2-up grid)
- CTA

**Services (`#services`)** — your offerings
- 5 service blocks (AI Product Design, Enterprise SaaS, End-to-End, Design Systems, Mobile)
- 4-step process (Discover / Design / Validate / Ship)
- 3 engagement models (Project / Retainer / Full-time)
- CTA

**Contact (`#contact`)** — how to reach you
- Direct contact (email, phone)
- Find me elsewhere (Behance, LinkedIn, Upwork)
- Best Fit projects
- Availability + live time

---

*Last updated: when you deployed. Keep this file alongside `index.html` so future-you (or anyone helping you) knows where everything lives.*

---

## Case study pages (added Nov 2026)

The site is now a folder, not a single file. Keep this structure when you upload:

```
index.html
UPDATE-GUIDE.md
case-studies/
  case.css, case.js          shared styling for every case study page
  rsi.html, trusted-therapist-network.html, engaged-scholar.html,
  score-funder.html, almana-hospital.html, keyki.html
  img/<name>/01.webp …       the visuals for that case study
  img/<name>/thumb.webp      the mockup used on cards and homepage panels
```

**Edit the text of a case study:** open its `.html` file and change the words between the tags. Headings, paragraphs and cards are ordinary text.

**Replace a visual:** export the new image from Figma, save it over the matching file in `case-studies/img/<name>/` with the same file name.

**Change a thumbnail mockup:** replace `case-studies/img/<name>/thumb.webp`. The Work page card, the homepage panel and the hero stack all use that one file.

**Add a new case study page:** copy an existing `.html` file, rename it, change the text and image paths, then add a card on the Work page (search `ADD NEW CASE STUDY (WORK PAGE — IN-DEPTH`) and, if you want it on the homepage, a panel (search `ADD NEW CASE STUDY (HOMEPAGE`). Also update the "Next case study" link at the bottom of the page before it.

---

## About page and homepage layout (added Nov 2026)

The site now has five pages: Home, Work, Services, About, Contact.

- **Home** is short: hero, intro statement, Capabilities, six project panels, an About teaser, and the contact call-to-action.
- **About** (`#about`) holds your bio, the coral stats panel, Approach, Experience, Education and Credentials. The markers `TO UPDATE: BIO`, `TO UPDATE: HERO STATS`, `TO UPDATE: CURRENT ROLE` and `ADD NEW CERTIFICATION` now all land on the About page.
- The bio appears twice: on the About page and in the homepage "About teaser". Update both.
- To add a page link to the menu, search `data-page="about"` and copy that line.

---

## Menu order, process section and thread shapes (added Nov 2026)

- **Menu order** is Home, About Me, Services, Work, Contact. To change it, search `data-page="home"` in `index.html` and reorder those five lines (the case study pages have their own copy of the menu).
- **Process** is section 02 on the homepage. It uses the same four phases as the Services page; if you edit one, edit the other.
- **Bulb panel:** the ivory intro section holds in place while the bulb draws. Its text is in the `id="idea"` section; the three labels beside the bulb are the `bulb-label` lines. To make it hold for longer or shorter, search `.intro { height: 230vh` and change the number. Below 1000px wide the bulb is hidden and the panel scrolls normally.
- **Capabilities loop:** the thread splits into a loop and the ten capabilities sit around it, Product Design on the left and AI on the right. Each one is an `orbit-item` line (search `TO UPDATE: CAPABILITIES`); the script places them, so you only edit the text. Keep both sides the same length. Below 1000px wide they show as a plain two-column list.

---

## No dates, time or location (Nov 2026)

The site shows no clock, years, job or certificate dates, or location. If you add a new role or certificate, leave the dates out to keep it consistent; the experience rows now have two columns (role, description), and certificates show issuer and name only.

