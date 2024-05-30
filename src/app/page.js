import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Sponsors from "@/components/sections/sponsors";
import FAQ from "@/components/sections/faq/faq";
import Contact from "@/components/sections/contact";
import Team from "@/components/sections/team";

export default function Home() {
  return (
    <main className="relative bg-phone-image pb-[140%] lg:bg-laptop-image 2xl:bg-full-image lg:pb-[378%] 2xl:pb-[280%] bg-cover bg-no-repeat bg-center flex-col">
      <Hero />
      <About />
      {/* <Sponsors /> */}
      <FAQ />
      <Contact />
      <Team />
    </main>
  );
}
