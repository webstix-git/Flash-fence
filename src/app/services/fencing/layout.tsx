import JsonLd from "@/components/JsonLd";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = pageMetadata("/services/fencing");

export default function FencingServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd("/services/fencing", "Fence Installation", [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Fencing", path: "/services/fencing" },
        ])}
      />
      {children}
    </>
  );
}
