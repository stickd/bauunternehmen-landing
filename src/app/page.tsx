import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      <Hero />

      <section className="py-20 md:py-28">
        <div id="leistungen" className="scroll-mt-24">
          <Services />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div id="ueber-uns" className="scroll-mt-30">
          <About />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div id="projekte" className="scroll-mt-24">
          <ProjectsGallery />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div id="kontakt" className="scroll-mt-24">
          <Contact />
        </div>
      </section>
    </main>
  );
}
