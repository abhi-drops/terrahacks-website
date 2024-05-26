import Hero from "@/app/_components/sections/hero";
import About from "@/app/_components/sections/about";
import Sponsors from "@/app/_components/sections/sponsors";
import FAQ from "@/app/_components/sections/faq";

export default function Home() {
  return (
    <main className="relative bg-phone-image pb-[140%] lg:bg-laptop-image 3xl:bg-full-image lg:pb-[378%] 3xl:pb-[280%] bg-cover bg-no-repeat bg-center">
      <Hero />
      <About />
      {/* <Sponsors /> 
      <FAQ /> */}
    </main>
  );
}
