import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProjectsSection></ProjectsSection>
      <TapeSection></TapeSection>
      <TestimonialsSection></TestimonialsSection>
      <AboutSection></AboutSection>
      <ContactSection></ContactSection>
    </main>
  );
}
