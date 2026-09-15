import JsonLd from "@/components/JsonLd";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = pageMetadata("/services/site-prep");

export default function SitePrepServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd("/services/site-prep", "Site Prep & Land Clearing", [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Site Prep", path: "/services/site-prep" },
        ])}
      />
      {children}
    </>
  );
}
