"use client";

import { useEffect, useState } from "react";

type VerseData = {
  item: string;
  text: string;
  reference: string;
  version_id: string;
};

declare global {
  interface Window {
    BG?: {
      votdWriteCallback: (data: { data: VerseData }) => void;
    };
  }
}

export function VerseOfDay() {
  const [verse, setVerse] = useState<VerseData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.BG = {
      votdWriteCallback: (data) => {
        setVerse(data.data);
        setLoading(false);
      },
    };

    const script = document.createElement("script");
    script.src =
      "https://www.biblegateway.com/votd/get/?format=json&version=NKJV&callback=BG.votdWriteCallback";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
          Daily Scripture
        </p>
        <h2 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
          Verse of the Day
        </h2>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-10">
          {loading ? (
            <p className="text-neutral-500">Loading today&apos;s verse...</p>
          ) : verse ? (
            <>
              <blockquote
                className="text-lg leading-relaxed text-neutral-700 italic"
                dangerouslySetInnerHTML={{ __html: verse.text }}
              />
              <cite className="mt-4 block text-sm font-semibold not-italic text-brand">
                {verse.reference} ({verse.version_id})
              </cite>
            </>
          ) : (
            <p className="text-neutral-500">
              Unable to load verse.{" "}
              <a
                href="https://www.biblegateway.com/verse-of-the-day/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                View on Bible Gateway
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
