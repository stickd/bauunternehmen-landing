import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Bauunternehmen | Neubau, Sanierung & Innenausbau",
  description:
    "Zuverlässiges Bauunternehmen für Neubau, Sanierung, Innenausbau und Fassadenarbeiten. Qualität, Erfahrung und saubere Umsetzung.",
  metadataBase: new URL("https://DEINE-DOMAIN.de"),

  openGraph: {
    title: "Bauunternehmen | Neubau, Sanierung & Innenausbau",
    description:
      "Professionelle Bauarbeiten: Neubau, Sanierung, Innenausbau und mehr.",
    url: "https://DEINE-DOMAIN.de",
    siteName: "Bauunternehmen",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bauunternehmen Projekte",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
