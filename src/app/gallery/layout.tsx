import JsonLd from "@/components/JsonLd";
import { collectionJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/gallery");

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={collectionJsonLd("/gallery", "CollectionPage", [
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      {children}
    </>
  );
}
