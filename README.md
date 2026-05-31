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
| `/` | Homepage with hero, events, Straight Talk, service times, verse of the day, giving |
| `/about` | Pastor bios (Jonas & Ruthie Robertson, Bill & Dianna Fitzgerald) |
| `/contact` | Address, phone, email, office hours, Google Map |
| `/events` | Upcoming events listing |

## Managing Events (Placeholder Data)

Events are currently stored in `lib/data/events.ts`. To add or edit events before Sanity is connected:

1. Open `lib/data/events.ts`
2. Add or update an object in the `placeholderEvents` array
3. Set `featured: true` to show an event on the homepage (up to 6 featured events)
4. Use ISO date strings for `date` and optional `endDate`

Example:

```typescript
{
  id: "6",
  title: "Youth Night",
  slug: "youth-night",
  date: "2026-06-15T18:00:00.000Z",
  location: "180 Center Sanctuary",
  description: "A night of worship and fellowship for young people.",
  featured: true,
}
```

**Later:** When Sanity CMS is added, only `lib/events.ts` needs to change — UI components stay the same.

## Deploy to Vercel

1. Push this project to a Git repository
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Deploy with default Next.js settings (no environment variables required)
4. Point `abundantlifeharvey.org` DNS to Vercel when ready to go live

Or deploy from CLI:

```bash
npx vercel
```

## Legacy URL Redirects

These old paths redirect automatically:

- `/index.html` → `/`
- `/aboutus.html` → `/about`
- `/contactus.html` → `/contact`

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Placeholder event data (Sanity CMS planned for later)
