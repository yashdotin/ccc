"use client";
import { HeroSection } from "../components/HeroSection";
import { HoliSlideshow } from "../components/HoliSlideshow";
import { MemorySection } from "../components/MemorySection";
import { SpecialMessageSection } from "../components/SpecialMessageSection";
import { RomanticFooter } from "../components/RomanticFooter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-between bg-gradient-soft">
      <HoliSlideshow />
      <HeroSection />
      <MemorySection />
      <SpecialMessageSection />
      <RomanticFooter />
    </main>
  );
}
