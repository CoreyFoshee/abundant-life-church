import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { church, pastors } from "@/lib/constants";
import { getServiceTimes } from "@/lib/services";

export const metadata: Metadata = {
  title: "Visit Us",
  description: `Plan your visit to ${church.name}. Service times, location, and meet our pastors in Harvey, Louisiana.`,
};

export default async function VisitPage() {
  const { intro, services } = await getServiceTimes();

  return (
    <>
      <PageHero
        title="Visit Us"
        subtitle="We'd love to welcome you. Join us for worship in Harvey, Louisiana — come as you are."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Join Us
            </p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
              Service Times
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              {intro ||
                "Every Sunday we gather to worship, pray, and grow together in God\u2019s Word."}
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-brand">{service.time}</p>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">
                  {service.name}
                </h3>
                <p className="mt-1 text-neutral-600">{service.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Location
              </p>
              <h2 className="mt-2 text-3xl font-bold text-neutral-900">
                Find Us
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
                    Office Hours
                  </dt>
                  <dd className="mt-2 text-base text-neutral-700">
                    {church.officeHours}
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={church.mapsUrl} external variant="primary">
                  Get Directions
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact Us
                </Button>
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
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Leadership
            </p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
              Meet Our Pastors
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Our pastors are committed to lifting up the name of Jesus and
              helping every person grow in their walk with the Lord.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {pastors.map((pastor) => (
              <article
                key={pastor.name}
                className="grid items-start gap-8 lg:grid-cols-[280px_1fr] lg:gap-12"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={pastor.image}
                    alt={pastor.name}
                    width={415}
                    height={250}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                    {pastor.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-neutral-900">
                    {pastor.name}
                  </h3>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
                    {pastor.bio.slice(0, 2).map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                  <Link
                    href="/about"
                    className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
                  >
                    Read full bio →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
