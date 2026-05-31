# The Church of Abundant Life — Website

Mobile-first Next.js website for [The Church of Abundant Life](https://www.abundantlifeharvey.org) in Harvey, Louisiana.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | Pastor bios |
| `/visit` | Service times, map, pastors |
| `/give` | Online and text giving |
| `/contact` | Contact info and map |
| `/events` | Upcoming events |
| `/studio` | Sanity CMS (staff only) |

## Sanity CMS (minimal — 2 things to edit)

The studio only exposes what church staff need to change:

1. **Service Times** — one page to update worship/class times
2. **Upcoming Events** — add events with a start and end date/time. All active events appear on the homepage and `/events`. Events are removed automatically after the end date/time.

### Setup (one time)

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage)
2. Copy `.env.local.example` to `.env.local` and add your project ID:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

3. Restart the dev server
4. Open [http://localhost:3000/studio](http://localhost:3000/studio) and sign in
5. Open **Service Times** and add your Sunday services
6. Add events under **Upcoming Events** and publish each one

Until Sanity is configured, the site uses built-in default service times and sample events.

### Staff workflow

- Go to `yoursite.com/studio`
- Edit **Service Times** or add/publish an **Event**
- Changes appear on the live site within about a minute

## Deploy to Vercel

Add the same Sanity env vars in Vercel project settings, then deploy.

## Tech Stack

- Next.js 15, TypeScript, Tailwind CSS v4
- Sanity CMS (events + service times only)
- Bible Gateway (verse of the day)
