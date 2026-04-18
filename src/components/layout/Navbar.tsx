"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#projekte", label: "Projekte" },
  { href: "#kontakt", label: "Kontakt" },
];

const getScrollOffset = (id: string) => {
  const isMobile = window.innerWidth < 768;

  if (id === "#ueber-uns") {
    return isMobile ? 130 : 105;
  }

  return isMobile ? 90 : 70;
};

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (!element) return;

  const offset = getScrollOffset(id);
  const y = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean) as HTMLElement[];

      const isMobile = window.innerWidth < 768;
      const scrollPosition = window.scrollY + (isMobile ? 140 : 100);

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(`#${section.id}`);
          return;
        }
      }

      setActiveSection("");
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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => {
            scrollToTop();
            setIsOpen(false);
          }}
          className="text-xl font-bold tracking-tight text-neutral-900 transition-opacity duration-200 hover:opacity-80"
        >
          Bau<span className="text-neutral-500">Firma</span>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className={`relative z-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                <span className="relative z-10">{link.label}</span>

                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="pointer-events-none absolute inset-0 rounded-full bg-neutral-100"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => scrollToSection("#kontakt")}
            className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-md"
          >
            Angebot anfragen
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="relative h-5 w-5">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-0 block h-0.5 w-5 origin-center rounded bg-black"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-2 block h-0.5 w-5 rounded bg-black"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-4 block h-0.5 w-5 origin-center rounded bg-black"
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed left-0 right-0 bottom-0 top-16 z-40 bg-black/20 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="absolute left-0 right-0 z-50 border-t border-neutral-200 bg-white shadow-lg md:hidden"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <nav className="mx-auto flex max-w-6xl flex-col px-6 py-5">
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
                      <button
                        type="button"
                        onClick={() => {
                          scrollToSection(link.href);
                          setIsOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-neutral-100 text-neutral-900"
                            : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-neutral-900" />
                        )}
                      </button>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ delay: 0.2 }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      scrollToSection("#kontakt");
                      setIsOpen(false);
                    }}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-black"
                  >
                    Angebot anfragen
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
