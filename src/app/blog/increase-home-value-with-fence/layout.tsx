import JsonLd from "@/components/JsonLd";
import { blogPostJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/blog/increase-home-value-with-fence");

export default function IncreaseHomeValueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={blogPostJsonLd(
          "/blog/increase-home-value-with-fence",
          "How to Increase Home Value With a New Fence",
          "2026-07-01",
          "/fencing-vinyl-install.jpg"
        )}
      />
      {children}
    </>
  );
}
