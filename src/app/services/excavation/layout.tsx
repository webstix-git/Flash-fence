import JsonLd from "@/components/JsonLd";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = pageMetadata("/services/excavation");

export default function ExcavationServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd("/services/excavation", "Excavation", [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Excavation", path: "/services/excavation" },
        ])}
      />
      {children}
    </>
  );
}
