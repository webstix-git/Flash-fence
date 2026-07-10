import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyActionBar from "@/components/StickyActionBar";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://flashfencewi.com"),
  title: "Flash Fence | Premium Fencing & Excavation | Eau Claire, WI",
  description: "Get perfectionist quality fence installation (vinyl, wood, chain link) and reliable excavation services in Chippewa Valley. 2-Year Craftsmanship Warranty. Owner Dylan Gardow always on site.",
  icons: {
    icon: [{ url: "/icon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Flash Fence | Fencing & Excavation | Eau Claire, WI",
    description: "Perfectionist quality fencing & year-round excavation in Eau Claire, WI. 2-Year craftsmanship warranty. Owner Dylan Gardow always on site.",
    url: "https://flashfencewi.com",
    siteName: "Flash Fence",
    images: [
      {
        url: "/completed-vinyl-installation.jpg",
        width: 1200,
        height: 630,
        alt: "Flash Fence Vinyl Installation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
        <ScrollToTop />
        <StickyActionBar />
      </body>
    </html>
  );
}
