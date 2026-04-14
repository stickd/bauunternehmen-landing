import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Bauunternehmen",
  description: "Moderne Website für ein Bauunternehmen",
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
      </body>
    </html>
  );
}
