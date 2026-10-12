import Link from "next/link";
import type { Purana } from "@/content/puranas";
import HeroBanner from "@/components/HeroBanner";
import { SITE_URL } from "@/lib/site";

export default function PuranaPageBody({
  purana,
  body,
  prev,
  next,
}: {
  purana: Purana;
  body: string;
  prev?: Purana;
  next?: Purana;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Chapter",
    name: purana.title,
    position: purana.id,
    url: `${SITE_URL}/purana/${purana.id}`,
    isPartOf: {
      "@type": "Book",
      name: "अठारह महापुराण",
      url: SITE_URL,
    },
  };

  // prev/next should only link to local pages — never to the external
  // Shreemad Bhagwat entry, and never to a not-yet-written Purana.
  const prevLinkable = prev?.available && !prev.externalUrl;
  const nextLinkable = next?.available && !next.externalUrl;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroBanner eyebrow={purana.subtitle} title={purana.title} description="" />

      <article className="mt-8 rounded-[24px] border border-border-muted bg-surface p-5 shadow-[var(--shadow)] sm:p-7">
        <div className="font-devanagari space-y-4 text-base leading-relaxed text-foreground/90 whitespace-pre-line sm:text-[1.05rem]">
          {body}
        </div>
      </article>

      <div className="mt-10 flex items-center justify-between gap-4">
        {prevLinkable ? (
          <Link
            href={`/purana/${prev!.id}`}
            className="font-devanagari rounded-full border border-border-muted bg-surface px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            ← {prev!.title}
          </Link>
        ) : (
          <span />
        )}
        {nextLinkable ? (
          <Link
            href={`/purana/${next!.id}`}
            className="font-devanagari rounded-full border border-border-muted bg-surface px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            {next!.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/"
          className="font-devanagari text-sm font-semibold text-foreground/60 underline-offset-4 hover:underline"
        >
          ← सभी अठारह महापुराण
        </Link>
      </div>
    </div>
  );
}
