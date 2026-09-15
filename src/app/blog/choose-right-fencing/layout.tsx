import JsonLd from "@/components/JsonLd";
import { blogPostJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/blog/choose-right-fencing");

export default function ChooseRightFencingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={blogPostJsonLd(
          "/blog/choose-right-fencing",
          "How to Choose the Right Fencing for Your Family's Needs",
          "2026-07-01",
          "/completed-vinyl-installation.jpg"
        )}
      />
      {children}
    </>
  );
}
