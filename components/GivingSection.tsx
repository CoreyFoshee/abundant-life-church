import { Button } from "@/components/Button";
import { church } from "@/lib/constants";

export function GivingSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,164,229,0.25),transparent_50%)]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
          Generosity
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Worship Through Giving
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/80">
          You can give your tithes and offerings online through Tithe.ly, or
          text the word &ldquo;{church.giving.textKeyword}&rdquo; to{" "}
          {church.giving.textNumber}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={church.giving.tithely} external variant="primary">
            Give Online
          </Button>
          <Button href={church.social.facebook} external variant="outline">
            Watch Online
          </Button>
        </div>
      </div>
    </section>
  );
}
