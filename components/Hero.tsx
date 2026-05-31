import Image from "next/image";
import { Button } from "@/components/Button";
import { church } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden pt-24">
      <Image
        src="/images/church-arial.jpg"
        alt="Aerial view of The Church of Abundant Life campus in Harvey, Louisiana"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          You&apos;re Invited
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {church.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/90 sm:text-xl">
          {church.tagline}
        </p>
        <div className="mt-4 space-y-1 text-base text-white/80">
          {church.services.map((service) => (
            <p key={service.name}>
              {service.name}: {service.time} — {service.location}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Plan a Visit
          </Button>
          <Button href={church.social.facebook} external variant="secondary">
            Watch Online
          </Button>
          <Button href={church.giving.tithely} external variant="outline">
            Give
          </Button>
        </div>
      </div>
    </section>
  );
}
