import JsonLd from "@/components/JsonLd";
import { blogPostJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/blog/proper-site-prep-saves-money");

export default function ProperSitePrepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={blogPostJsonLd(
          "/blog/proper-site-prep-saves-money",
          "How the Proper Site Prep Can Save You Money",
          "2026-07-01",
          "/site-excavation.jpg"
        )}
      />
      {children}
    </>
  );
}
