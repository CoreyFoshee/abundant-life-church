import { EventCard } from "@/components/EventCard";
import { EventsEmptyState } from "@/components/EventsEmptyState";
import { PageHero } from "@/components/PageHero";
import { getEvents } from "@/lib/events";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Events",
  description:
    "See upcoming events, services, and gatherings at The Church of Abundant Life in Harvey, Louisiana and the Greater New Orleans area.",
  path: "/events",
});

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <PageHero
        title="Events"
        subtitle={
          events.length > 0
            ? "Stay connected with what's happening at Abundant Life."
            : "We'd love to see you this Sunday. Check back here for special events and gatherings."
        }
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
            <EventsEmptyState />
          )}
        </div>
      </section>
    </>
  );
}
