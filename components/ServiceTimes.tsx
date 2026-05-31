import { church } from "@/lib/constants";

export function ServiceTimes() {
  return (
    <section className="bg-brand-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Join Us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
            Service Times
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {church.services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl bg-white p-8 text-center shadow-sm"
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
  );
}
