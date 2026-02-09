import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Offer } from "@/components/sections/Offer";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Offer />
    </main>
  );
}
