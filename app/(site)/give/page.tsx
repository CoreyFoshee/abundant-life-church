import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { church } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Give",
  description: `Give your tithes and offerings to ${church.name} online or by text.`,
};

export default function GivePage() {
  return (
    <>
      <PageHero
        title="Give"
        subtitle="Your generosity helps us lift up the name of Jesus and reach people in Harvey, Greater New Orleans, and around the world."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-12">
            <h2 className="text-2xl font-bold text-neutral-900">
              Worship Through Giving
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              You can give your tithes and offerings online through Tithe.ly, or
              create an account to manage recurring gifts. You can also text the
              word &ldquo;{church.giving.textKeyword}&rdquo; to{" "}
              {church.giving.textNumber}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={church.giving.tithely} external variant="primary">
                Give Online
              </Button>
              <a
                href={`sms:${church.giving.textNumber}?body=${church.giving.textKeyword}`}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-100 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Text to Give
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-brand-light p-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                Give Online
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Secure one-time or recurring gifts through Tithe.ly. Create an
                account to track your giving history.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-light p-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                Text to Give
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Text <strong>{church.giving.textKeyword}</strong> to{" "}
                <strong>{church.giving.textNumber}</strong> to give quickly from
                your mobile device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
