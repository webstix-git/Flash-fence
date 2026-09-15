import JsonLd from "@/components/JsonLd";
import { aboutPageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/about-us");

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={aboutPageJsonLd()} />
      {children}
    </>
  );
}
