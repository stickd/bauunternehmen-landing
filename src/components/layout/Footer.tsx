"use client";

import Link from "next/link";
import { scrollToSection } from "@/lib/scroll";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#projekte", label: "Projekte" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    const id = href.replace("#", "");

    // если НЕ на главной → перейти на неё
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    // если на главной → smooth scroll
    scrollToSection(id);
  };

  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <h2 className="text-lg font-semibold text-white">Bauunternehmen</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-400">
            Ihr zuverlässiger Partner für hochwertige Bauprojekte, Sanierungen
            und Innenausbau.
          </p>
        </div>

        <nav>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="cursor-pointer hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400">
            <li>E-Mail: info@deine-domain.de</li>
            <li>Telefon: +49 000 000000</li>
            <li>Adresse: Musterstraße 1, 12345 Musterstadt</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} Bauunternehmen. Alle Rechte
            vorbehalten.
          </p>

          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
