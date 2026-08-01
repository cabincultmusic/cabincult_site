# Your Name — Mixing & Mastering Site

A single-page site: plain HTML/CSS/JS, no build step, hosted free on GitHub
Pages. Page order: photo + title → statement of purpose → contact form →
project list with artwork. The contact form sends to your email via Formspree.

## 1. Customize before publishing

- **`index.html`** —
  - Replace "Your Name" in the `<title>`, hero heading, and footer.
  - Replace the `hero__photo` placeholder `<span>PHOTO</span>` with an actual
    image: `<img src="your-photo.jpg" alt="Your Name">`.
  - Edit the one-line tagline under your name in the hero.
  - Rewrite the statement of purpose paragraph in the About section.
  - In the contact `<form>` tag, replace `YOUR_FORM_ID` with the ID from your
    Formspree form (see step 4).
- **`script.js`** — edit the `PROJECTS` array at the top with your real
  projects: artist, country, genre, role (`Mixed`, `Mastered`, or
  `Mixed & Mastered`), artwork image URL, and track link.

## 2. Put it in Git

From inside this folder:

```bash
git init
git add .
git commit -m "Initial site"
```

## 3. Push to GitHub

1. Create a new empty repository on GitHub (no README/license — you already
   have files). Name it anything, e.g. `my-site`.
2. Connect and push:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-site.git
git push -u origin main
```

## 4. Set up the contact form (Formspree)

1. Go to https://formspree.io and sign up (free tier covers this).
2. Create a new form. Formspree gives you an endpoint like
   `https://formspree.io/f/abcdwxyz`.
3. In `index.html`, find:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   and replace `YOUR_FORM_ID` with your real ID.
4. Commit and push the change:
   ```bash
   git add index.html
   git commit -m "Connect contact form"
   git push
   ```
5. Submissions (including any file links people paste in) land in the email
   tied to your Formspree account. The free plan includes 50 submissions/month,
   which is plenty for a personal contact form — upgrade later if needed.

## 5. Turn on GitHub Pages

1. On GitHub, open your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to "Deploy from a branch".
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. After a minute, your site is live at:
   `https://YOUR_USERNAME.github.io/my-site/`

## 6. Making future edits

Any time you change a file:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

GitHub Pages automatically redeploys within a minute or two of each push.

## About hosting tracks and artwork

- **Track links** — YouTube, Bandcamp, or SoundCloud are the easiest homes for
  the actual audio; just paste the track URL into the `url` field in
  `PROJECTS`. GitHub isn't built for serving large audio files, so avoid
  self-hosting songs in this repo.
- **Artwork images** — small cover-art JPEGs/PNGs are fine to include directly
  in this repo (e.g. an `/images` folder), or you can link to wherever the
  artist's artwork already lives. Just point the `artwork` field at the image
  URL either way.
