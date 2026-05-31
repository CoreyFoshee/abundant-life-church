import Link from "next/link";
import { church } from "@/lib/constants";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-lg font-bold">{church.name}</h2>
          <p className="mt-2 text-sm text-white/70">{church.tagline}</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/80">
            <p>
              <a
                href={church.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                {church.address.full}
              </a>
            </p>
            <p>
              <a href={church.phoneHref} className="hover:text-brand">
                {church.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${church.email}`}
                className="hover:text-brand"
              >
                {church.email}
              </a>
            </p>
            <p className="text-white/60">Fax: {church.fax}</p>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {church.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/visit" className="text-white/80 hover:text-brand">
                Visit Us
              </Link>
            </li>
            <li>
              <a
                href={church.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-brand"
              >
                Watch Online
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Connect With Us
          </h3>
          <p className="mt-4 text-sm text-white/70">
            Office hours: {church.officeHours}
          </p>
          <div className="mt-6 flex gap-3">
            <SocialIcon href={church.social.facebook} label="Facebook">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 320 512" aria-hidden="true">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </SocialIcon>
            <SocialIcon href={church.social.youtube} label="YouTube">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 576 512" aria-hidden="true">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl space-y-2 px-4 py-6 text-center text-sm text-white/50 sm:px-6 lg:px-8">
          <p>Copyright &copy; {year} {church.name}</p>
          <p>
            Designed by{" "}
            <a
              href="https://cfdesign.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-brand"
            >
              CF Design Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
