import type { Event } from "@/lib/types/event";

function futureDate(daysFromNow: number, hour: number, minute = 0): string {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  date.setHours(hour, minute, 0, 0);
  return date.toISOString();
}

/** Reference data only — live site reads from Sanity when configured. */
export const placeholderEvents: Event[] = [
  {
    id: "1",
    title: "Sunday Worship Service",
    slug: "sunday-worship-service",
    date: futureDate(3, 10, 0),
    endDate: futureDate(3, 12, 0),
    location: "Main Sanctuary",
    description:
      "Join us every Sunday for worship, prayer, and the Word of God. All are welcome to come as you are and experience the presence of the Lord.",
  },
  {
    id: "2",
    title: "Sunday Morning Bible Class",
    slug: "sunday-morning-bible-class",
    date: futureDate(3, 9, 0),
    endDate: futureDate(3, 9, 45),
    location: "180 Center Sanctuary",
    description:
      "Deepen your faith in our Sunday morning class before the main service. A time of study, discussion, and fellowship.",
  },
  {
    id: "3",
    title: "Community Outreach Day",
    slug: "community-outreach-day",
    date: futureDate(10, 9, 0),
    endDate: futureDate(14, 17, 0),
    location: "Church Campus",
    description:
      "Serving our neighbors in Greater New Orleans with food, prayer, and the love of Jesus. Volunteers welcome — contact the church office for details.",
  },
];
