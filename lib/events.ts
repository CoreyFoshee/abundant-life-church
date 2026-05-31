import type { Event } from "@/lib/types/event";
import { resolveUpcomingEvents } from "@/lib/recurringEvents";
import { isSanityConfigured } from "@/sanity/env";
import { getSanityClient } from "@/sanity/lib/client";
import { upcomingEventsQuery } from "@/sanity/lib/queries";

async function getSanityEvents(): Promise<Event[]> {
  const client = getSanityClient();
  if (!client) {
    return [];
  }

  const events = await client.fetch<Event[]>(
    upcomingEventsQuery,
    {},
    { next: { tags: ["events"], revalidate: 60 } }
  );

  return resolveUpcomingEvents(events);
}

export async function getEvents(): Promise<Event[]> {
  if (!isSanityConfigured) {
    return [];
  }

  try {
    return await getSanityEvents();
  } catch {
    return [];
  }
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const events = await getEvents();
  return events.find((event) => event.slug === slug) ?? null;
}
