import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { puranas, getPuranaById } from "@/content/puranas";
import { getPuranaContent } from "@/content/getPuranaContent";
import PuranaPageBody from "@/components/PuranaPageBody";
import { SITE_URL, SITE_OG_IMAGE } from "@/lib/site";

export async function generateStaticParams() {
  // Never generate a local page for the externally-linked Shreemad
  // Bhagwat entry — it has no local content and should 404 if visited
  // directly, pointing people to its own real site instead.
  return puranas
    .filter((p) => p.available && !p.externalUrl)
    .map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const purana = getPuranaById(Number(id));
  if (!purana) return {};
  const url = `${SITE_URL}/purana/${purana.id}`;
  return {
    title: `${purana.subtitle} — ${purana.title}`,
    description: purana.oneLine,
    alternates: { canonical: `/purana/${purana.id}` },
    openGraph: {
      type: "article",
      url,
      title: purana.title,
      description: purana.oneLine,
      images: [{ url: SITE_OG_IMAGE, width: 1200, height: 675, alt: purana.title }],
    },
  };
}

export default async function PuranaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numId = Number(id);
  const purana = getPuranaById(numId);
  if (!purana || purana.externalUrl) notFound();

  const content = getPuranaContent(numId);
  if (!purana.available || !content) {
    notFound();
  }

  const index = puranas.findIndex((p) => p.id === numId);
  const prev = index > 0 ? puranas[index - 1] : undefined;
  const next = index < puranas.length - 1 ? puranas[index + 1] : undefined;

  return <PuranaPageBody purana={purana} body={content.body} prev={prev} next={next} />;
}
