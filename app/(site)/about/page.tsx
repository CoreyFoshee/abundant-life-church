import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { church, pastors } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Meet Pastor Jonas Robertson and Pastor Bill Fitzgerald. Learn about the leadership, vision, and heart of The Church of Abundant Life in Harvey, Louisiana.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Meet our pastors and discover the heart behind Abundant Life World Outreach Center."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-neutral-900">
              {church.name}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">{church.tagline}</p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Abundant Life World Outreach Center is committed to lifting up the
              name of Jesus and reaching out to people in Greater New Orleans
              and around the world.
            </p>
          </div>

          <div className="mt-16 space-y-20">
            {pastors.map((pastor) => (
              <article
                key={pastor.name}
                className="grid items-start gap-8 lg:grid-cols-[320px_1fr] lg:gap-12"
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
                  <h3 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
                    {pastor.name}
                  </h3>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
                    {pastor.bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
