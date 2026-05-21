# SEO Setup Guide — sibekomm.co.za
**Dr. M.M. Sibeko | Medical Practitioner, Dundee KZN**

---

## What's in this package

| File | Purpose |
|---|---|
| `index.html` | Replace your current `index.html` — includes all SEO meta tags |
| `robots.txt` | Tells Google it can crawl your entire site |
| `sitemap.xml` | Map of your pages — submitted to Google Search Console |
| `site.webmanifest` | PWA manifest (mobile install + SEO signal) |
| `favicon.svg` | Medical-blue favicon for browser tabs |
| `vercel.json` | Caching & security headers for Vercel |

---

## STEP 1 — Deploy the files

Copy these files into the **root** of your project (same folder as `package.json`):

```
Dr-M.M.Sibeko/
├── index.html          ← replace existing
├── robots.txt          ← new
├── sitemap.xml         ← new
├── site.webmanifest    ← new
├── favicon.svg         ← new
├── vercel.json         ← new
├── src/
└── ...
```

Commit and push to GitHub. Vercel will auto-deploy.

---

## STEP 2 — Create an OG image (important!)

The meta tags reference `/og-image.jpg`. You need a 1200×630 px image.

**Easy option — use Canva (free):**
1. Go to canva.com → "Custom size" → 1200×630
2. Add a dark blue background (#0c4a6e)
3. Add Dr Sibeko's photo on the right
4. Add text: "Dr. M.M. Sibeko | MBChB (UKZN)" and "General Practitioner – Dundee, KZN"
5. Download as JPG
6. Name it `og-image.jpg` and place it in the `public/` folder of your project

---

## STEP 3 — Create favicon PNGs

Your `index.html` references PNG favicons. Generate them from `favicon.svg`:

**Option A — Use realfavicongenerator.net:**
1. Upload `favicon.svg` to https://realfavicongenerator.net
2. Download the package
3. Copy `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png` into your project root (or `public/` folder)

**Option B — Quick online converter:**
Use https://favicon.io/favicon-converter/ — upload your SVG, download the PNGs.

The files to place in `public/`:
- `favicon.svg`
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`
- `site.webmanifest`

---

## STEP 4 — Submit to Google Search Console

This is how you get on Google Search.

1. Go to https://search.google.com/search-console
2. Sign in with a Google account (create one if needed)
3. Click **"Add property"**
4. Choose **"URL prefix"** → enter `https://www.sibekomm.co.za`
5. Choose verification method: **"HTML tag"**
6. You'll get a tag like:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXX" />
   ```
7. Add that line to your `index.html` inside `<head>` (below the `<title>` tag)
8. Deploy → click **"Verify"** in Search Console
9. Once verified, go to **Sitemaps** → enter `sitemap.xml` → click **Submit**

Google will start crawling the site within a few days.

---

## STEP 5 — Google Business Profile (most powerful local SEO step)

This makes Dr. Sibeko appear in Google Maps searches like "doctor Dundee".

1. Go to https://business.google.com
2. Click "Add your business"
3. Fill in:
   - **Business name:** Dr. M.M. Sibeko
   - **Category:** General Practitioner
   - **Address:** 11 Victoria Street, Dundee, KwaZulu-Natal 3000
   - **Phone:** 072 622 0505
   - **Website:** https://www.sibekomm.co.za
4. Verify via postcard or phone call (Google will send a PIN)
5. Upload Dr. Sibeko's photo and the practice exterior photo
6. Add hours of operation

This is the #1 action that gets the practice found locally.

---

## STEP 6 — Register on health directories (free)

These links boost your Google ranking through backlinks:

| Directory | URL |
|---|---|
| Healthnicon (SA) | https://www.healthnicon.com |
| Doctorbook SA | https://www.doctorbook.co.za |
| Netcare360 | https://www.netcare360.co.za |
| Medi-Clinic finder | https://www.mediclinic.co.za |
| Briefly.co.za | https://briefly.co.za |

For each, list: Dr. M.M. Sibeko, MBChB, General Practitioner, 11 Victoria Street, Dundee 3000, 072 622 0505, www.sibekomm.co.za

---

## What the `index.html` changes do

### Title tag
```
Dr. M.M. Sibeko | General Practitioner – Dundee, KwaZulu-Natal
```
This appears as the blue clickable text in Google results.

### Meta description
```
Dr. M.M. Sibeko (MBChB, UKZN) is a qualified general practitioner based at 
11 Victoria Street, Dundee 3000... Book an appointment by phone or WhatsApp.
```
This appears as the grey text under the title in Google results.

### Structured Data (JSON-LD)
Tells Google that this is a **Physician** — enables rich results like a Knowledge Panel (the info box on the right side of Google), star ratings, and map pins.

### Open Graph tags
Makes the site look professional when shared on WhatsApp, Facebook, or LinkedIn — shows the doctor's photo and name in the preview card.

---

## Expected timeline

| Action | When Google shows results |
|---|---|
| Deploy files + verify Search Console | 3–7 days |
| Submit sitemap | 1–2 weeks |
| Google Business Profile | 1–3 weeks after verification |
| Full ranking for "doctor Dundee" | 4–8 weeks |

---

## Need to update the sitemap later?

Just update the `<lastmod>` date in `sitemap.xml` and resubmit in Search Console. No other changes needed.
