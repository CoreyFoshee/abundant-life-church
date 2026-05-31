import Image from "next/image";
import { Button } from "@/components/Button";
import { church } from "@/lib/constants";

export function StraightTalk() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Watch &amp; Listen
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
            Straight Talk
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600">
            Check out our Straight Talk series featuring our Pastors Jonas
            Robertson and Bill Fitzgerald. Real conversations about faith,
            life, and the Word of God.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={church.social.youtube} external variant="primary">
              Watch on YouTube
            </Button>
            <Button href={church.social.facebook} external variant="secondary">
              Watch Online
            </Button>
          </div>
        </div>

        <a
          href={church.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="order-1 block overflow-hidden rounded-2xl shadow-xl lg:order-2"
        >
          <Image
            src="/images/straight_talk.png"
            alt="Straight Talk series with Pastors Jonas Robertson and Bill Fitzgerald"
            width={588}
            height={336}
            className="h-auto w-full object-cover transition-transform hover:scale-[1.02]"
          />
        </a>
      </div>
    </section>
  );
}
