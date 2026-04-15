import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="container section">
      <Hero />
      <div className="h-px w-full bg-neutral-200 my-10" />
      <Services />
      <div className="h-px w-full bg-neutral-200 my-10" />
      <About />
      <div className="h-px w-full bg-neutral-200 my-10" />
      <ProjectsGallery />
      <div className="h-px w-full bg-neutral-200 my-10" />
      <Contact />
    </main>
  );
}
