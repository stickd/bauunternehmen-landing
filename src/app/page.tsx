import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <Services />
      <About />
      <ProjectsGallery />
      <Contact />
    </main>
  );
}
