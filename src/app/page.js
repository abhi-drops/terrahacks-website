import Hero from "@/app/_components/sections/hero";
import About from "@/app/_components/sections/about";
import Sponsors from "@/app/_components/sections/sponsors";
import FAQ from "@/app/_components/sections/faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Sponsors /> 
      <FAQ />
    </main>
  );
}
