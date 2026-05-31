import { church } from "@/lib/constants";

export function DeclarationsMarquee() {
  const items = [...church.declarations, ...church.declarations];

  return (
    <section
      className="overflow-hidden bg-neutral-950 py-4"
      aria-label="Faith declarations"
    >
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {items.map((declaration, index) => (
          <span
            key={`${declaration}-${index}`}
            className="inline-flex items-center gap-8 text-sm font-medium uppercase tracking-wide text-white/90 sm:text-base"
          >
            {declaration}
            <span className="text-brand" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
