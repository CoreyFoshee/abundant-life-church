import { placeholderEvents } from "@/lib/data/events";
import type { Event } from "@/lib/types/event";

function sortByDate(events: Event[]): Event[] {
  return [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

function isUpcoming(event: Event): boolean {
  return new Date(event.date) >= new Date();
}

export async function getEvents(): Promise<Event[]> {
  return sortByDate(placeholderEvents.filter(isUpcoming));
}

export async function getFeaturedEvents(): Promise<Event[]> {
  const events = await getEvents();
  return events.filter((event) => event.featured).slice(0, 6);
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const event = placeholderEvents.find((item) => item.slug === slug);
  return event ?? null;
}
