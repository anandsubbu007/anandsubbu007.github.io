"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import TechStackSection from "@/components/sections/TechStackSection";
import CurrentWorkSection from "@/components/sections/CurrentWorkSection";
import ImpactSection from "@/components/sections/ImpactSection";
import DomainsSection from "@/components/sections/DomainsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AISection from "@/components/sections/AISection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--bg-base)" }}>
      <Navbar />
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <PhilosophySection />
      <Divider />
      <TechStackSection />
      <Divider />
      <CurrentWorkSection />
      <Divider />
      <ImpactSection />
      <Divider />
      <DomainsSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <AISection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <ContactSection />
      <Footer />
    </main>
  );
}
