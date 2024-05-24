"use client";

import Hero from "@/app/_components/hero";
import { useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(true);

  return (
    <main>
      <Hero />
    </main>
  );
}
