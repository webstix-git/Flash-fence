import JsonLd from "@/components/JsonLd";
import { faqPageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/faq");

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      {children}
    </>
  );
}
