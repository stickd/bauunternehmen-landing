import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function HomePage() {
  return (
    <main className="container section">
      <Hero />
      <div className="h-px w-full bg-neutral-200 my-10" />
      <Services />
      <div className="h-px w-full bg-neutral-200 my-10" />
      <About />
    </main>
  );
}
