import { Hero } from "@/components/sections/Hero";
import { Narrative } from "@/components/sections/Narrative";
import { Ecosystems } from "@/components/sections/Ecosystems";
import { IndustryWork } from "@/components/sections/IndustryWork";
import { ResearchTrust } from "@/components/sections/ResearchTrust";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/layout/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory overflow-x-hidden">
      <Navigation />

      <main>
        <Hero />
        <Narrative />
        <Ecosystems />
        <IndustryWork />
        <ResearchTrust />
        <Contact />
      </main>

      {/* 
        PERFORMANCE NOTE: 
        Removed the SVG turbulence filter as it causes high GPU utilization 
        and lagginess on mobile/older devices. 
        Replaced with a clean, high-performance background foundation.
      */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_50%_50%,rgba(10,10,10,0.015),transparent)]"></div>
    </div>
  );
}
