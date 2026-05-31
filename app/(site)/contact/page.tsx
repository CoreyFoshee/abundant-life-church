import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { church } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact The Church of Abundant Life at 2301 Par 3 Dr., Harvey, LA 70058. Call (504) 367-4000, email us, or view office hours and directions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out or plan a visit to our campus in Harvey, Louisiana."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              Get in Touch
            </h2>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-brand">
                  Address
                </dt>
                <dd className="mt-2 text-base text-neutral-700">
                  <a
                    href={church.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand"
                  >
                    {church.address.full}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-brand">
                  Phone
                </dt>
                <dd className="mt-2 text-base text-neutral-700">
                  <a href={church.phoneHref} className="hover:text-brand">
                    {church.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-brand">
                  Fax
                </dt>
                <dd className="mt-2 text-base text-neutral-700">{church.fax}</dd>
              </div>

              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-brand">
                  Email
                </dt>
                <dd className="mt-2 text-base text-neutral-700">
                  <a
                    href={`mailto:${church.email}`}
                    className="hover:text-brand"
                  >
                    {church.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-brand">
                  Office Hours
                </dt>
                <dd className="mt-2 text-base text-neutral-700">
                  {church.officeHours}
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={church.phoneHref} variant="primary">
                Call Us
              </Button>
              <a
                href={`mailto:${church.email}`}
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-neutral-200 bg-neutral-100 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200"
              >
                Send Email
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="Map showing The Church of Abundant Life location"
              src={church.mapsEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[300px] w-full sm:min-h-[450px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
