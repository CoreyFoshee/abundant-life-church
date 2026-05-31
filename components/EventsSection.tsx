import Link from "next/link";
import { EventCard } from "@/components/EventCard";
import { getEvents } from "@/lib/events";

export async function EventsSection() {
  const events = await getEvents();

  if (events.length === 0) {
    return null;
  }

  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              What&apos;s Happening
            </p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
              Upcoming Events
            </h2>
          </div>
          <Link
            href="/events"
            className="text-sm font-semibold text-brand hover:text-brand-dark"
          >
            View all events →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
