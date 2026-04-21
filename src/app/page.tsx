import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="top" className="mx-auto max-w-6xl px-6">
      <Hero />

      <section
        id="leistungen"
        className="scroll-mt-16 py-20 md:scroll-mt-20 md:py-28"
      >
        <Services />
      </section>

      <section
        id="ueber-uns"
        className="scroll-mt-16 py-20 md:scroll-mt-20 md:py-28"
      >
        <About />
      </section>

      <section
        id="projekte"
        className="scroll-mt-16 py-20 md:scroll-mt-20 md:py-28"
      >
        <ProjectsGallery />
      </section>
      <section
        id="kontakt"
        className="scroll-mt-[-28px] py-20 md:scroll-mt-[-32px] md:py-28"
      >
        <Contact />
      </section>
    </main>
  );
}
