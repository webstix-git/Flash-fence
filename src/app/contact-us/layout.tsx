import JsonLd from "@/components/JsonLd";
import { contactPageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/contact-us");

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={contactPageJsonLd()} />
      {children}
    </>
  );
}
