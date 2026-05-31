import Link from "next/link";
import { Button } from "@/components/Button";
import { church } from "@/lib/constants";

export function EventsEmptyState() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white px-6 py-14 text-center shadow-sm sm:px-10">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light">
        <svg
          className="h-7 w-7 text-brand"
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
      <h2 className="mt-6 text-2xl font-bold text-neutral-900">
        No upcoming events right now
      </h2>
      <p className="mt-3 text-base leading-relaxed text-neutral-600">
        Check back soon for special services and community gatherings. You are
        always welcome to join us for Sunday worship.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/visit" variant="primary">
          Plan a Visit
        </Button>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
        >
          Contact Us
        </Link>
        <Button href={church.social.facebook} external variant="secondary">
          Watch Online
        </Button>
      </div>
    </div>
  );
}
