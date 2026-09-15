import JsonLd from "@/components/JsonLd";
import { collectionJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/testimonials");

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={collectionJsonLd("/testimonials", "CollectionPage", [
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ])}
      />
      {children}
    </>
  );
}
