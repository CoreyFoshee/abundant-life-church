import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import { PageHero } from "@/components/PageHero";
import { church } from "@/lib/constants";
import { getEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description: `Upcoming events at ${church.name} in Harvey, Louisiana.`,
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <PageHero
        title="Events"
        subtitle="Stay connected with what's happening at Abundant Life."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {events.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-16 text-center text-neutral-600">
              No upcoming events — check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
