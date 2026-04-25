"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollButton } from "@/components/ui/ScrollButton";
import {
  navigateToHome,
  navigateToSection,
  handleHashScroll,
} from "@/lib/scroll";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#projekte", label: "Projekte" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollAfterMenuClose = (callback: () => void) => {
    setIsOpen(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(callback);
    });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    const id = href.replace("#", "");

    if (isOpen) {
      scrollAfterMenuClose(() => navigateToSection(id));
      return;
    }

    navigateToSection(id);
  };

  const handleTopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (isOpen) {
      scrollAfterMenuClose(navigateToHome);
      return;
    }

    navigateToHome();
  };

  useEffect(() => {
    handleHashScroll();
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      if (window.location.pathname !== "/") {
        setActiveSection("");
        return;
      }

      const activationLine = window.innerWidth < 768 ? 110 : 140;
      let currentSection = "";

      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= activationLine && rect.bottom > activationLine) {
          currentSection = link.href;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy);
    window.addEventListener("resize", handleScrollSpy);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("resize", handleScrollSpy);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1220]/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between px-6">
        <a
          href="#top"
          onClick={handleTopClick}
          className="text-xl font-bold tracking-tight text-slate-200 transition-opacity duration-200 hover:opacity-85"
        >
          Bau<span className="text-orange-400">Firma</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-slate-200"
                    : "text-slate-300 hover:text-slate-200"
                }`}
              >
                <span className="relative z-10">{link.label}</span>

                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="pointer-events-none absolute inset-0 rounded-full border border-white/10 bg-white/[0.05]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ScrollButton
            href="#kontakt"
            className="px-5 py-2.5 hover:-translate-y-[1px] active:translate-y-[1px]"
          >
            Angebot anfragen
          </ScrollButton>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="relative h-5 w-5">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-0 block h-0.5 w-5 origin-center rounded bg-current"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-2 block h-0.5 w-5 rounded bg-current"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-4 block h-0.5 w-5 origin-center rounded bg-current"
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed bottom-0 left-0 right-0 top-16 z-40 bg-[#020617]/55 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="absolute left-0 right-0 z-50 border-t border-white/10 bg-[#0B1220]/95 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Container>
                <nav className="flex flex-col py-5">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href;

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-300 ${
                            isActive
                              ? "border-white/10 bg-white/[0.05] text-slate-200"
                              : "border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-slate-200"
                          }`}
                        >
                          {link.label}
                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-orange-400" />
                          )}
                        </a>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: 0.2 }}
                  >
                    <ScrollButton href="#kontakt" className="mt-4 w-full py-3">
                      Angebot anfragen
                    </ScrollButton>
                  </motion.div>
                </nav>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
