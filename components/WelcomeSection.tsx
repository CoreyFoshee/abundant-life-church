import Image from "next/image";
import { Button } from "@/components/Button";
import { church } from "@/lib/constants";

export function WelcomeSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/church-arial.jpg"
            alt="The Church of Abundant Life in Harvey, Louisiana"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Welcome
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
            You Belong Here
          </h2>
          <p className="mt-2 text-xl font-semibold text-neutral-700">
            Jesus is Alive!!
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
            <p>
              Welcome to {church.name}. Whether you have followed Jesus for years,
              have questions about faith, or are simply looking for a church to
              call home, there is a place for you here.
            </p>
            <p>
              We invite you to join us as we praise the Lord and develop a closer
              relationship with Jesus. Come as you are and discover the hope,
              healing, and abundant life found in Christ.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/visit" variant="primary">
              Plan a Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
