# Stay Out For Good — Next.js Website

Production-ready Next.js 14 website for Stay Out For Good re-entry ministry.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** icons
- **Vercel** deployment ready

## Project Structure
```
src/
├── app/                          # App Router pages
│   ├── layout.tsx                # Root layout (nav + footer)
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx
│   ├── returning-citizens/page.tsx
│   ├── churches-congregations/page.tsx
│   ├── jail-prison-ministry/page.tsx
│   ├── donate/page.tsx
│   ├── partnership/page.tsx
│   ├── get-involved/page.tsx
│   ├── blog/page.tsx
│   ├── newsletter/page.tsx
│   ├── contact/page.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Fixed nav with mobile menu
│   │   └── Footer.tsx            # 4-column footer
│   ├── sections/
│   │   └── DonateForm.tsx        # Interactive donation form
│   └── ui/
│       ├── PageHero.tsx          # Reusable page hero
│       ├── ContactStrip.tsx      # Contact CTA bar
│       ├── SectionHeader.tsx     # Heading component
│       ├── StatGrid.tsx          # Statistics grid
│       ├── BulletList.tsx        # Arrow bullet list
│       ├── FormInput.tsx         # Form field components
│       └── SubmitButton.tsx      # Interactive submit button
├── lib/
│   └── utils.ts                  # cn(), constants, nav links
└── styles/
    └── globals.css               # Tailwind + custom components
```

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & Deploy

```bash
npm run build      # Production build
npm run start      # Start production server
```

## Deploy to Vercel

```bash
npx vercel         # Deploy to preview
npx vercel --prod  # Deploy to production
```

Or connect your GitHub repo to Vercel — it auto-detects Next.js and deploys on every push.

## Pages
| Route | Page |
|-------|------|
| `/` | Homepage |
| `/about` | About Us |
| `/returning-citizens` | For Returning Citizens |
| `/churches-congregations` | For Churches & Congregations |
| `/jail-prison-ministry` | Jail & Prison Ministry |
| `/donate` | Donate |
| `/partnership` | Partnership |
| `/get-involved` | Get Involved |
| `/blog` | Blog |
| `/newsletter` | Newsletter |
| `/contact` | Contact Us |

