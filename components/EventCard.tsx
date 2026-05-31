import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/lib/types/event";

function formatEventDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateString));
}

export function EventCard({ event }: { event: Event }) {
  const content = (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {event.image ? (
        <div className="relative aspect-[16/9] bg-neutral-100">
          <Image
            src={event.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center bg-brand-light">
          <svg
            className="h-12 w-12 text-brand"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <time
          dateTime={event.date}
          className="text-sm font-semibold text-brand"
        >
          {formatEventDate(event.date)}
        </time>
        <h3 className="mt-2 text-lg font-bold text-neutral-900">{event.title}</h3>
        <p className="mt-1 text-sm text-neutral-500">{event.location}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
          {event.description}
        </p>
      </div>
    </article>
  );

  if (event.externalLink) {
    return (
      <a
        href={event.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href="/events" className="block h-full">
      {content}
    </Link>
  );
}
