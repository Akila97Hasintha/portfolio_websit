"use client";

import HeroSection from "../componts/sections/heroSection";
import ProjectsSection from "../componts/sections/projectSetion";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { useScrollY } from "@/hooks/useScrollspy";
import NavBar from "@/componts/layouts/navbar";
import SkillSelection from "@/componts/sections/skillSection";
import ExperienceSection from "@/componts/sections/experienceSection";
import ContactSection from "@/componts/sections/contactSection";
import Footer from "@/componts/layouts/footer";

export default function Home() {
  const mouse = useMouseGlow();
  const scrollY = useScrollY();
   const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
       <NavBar onNavigate={scrollToSection} />
      <HeroSection scrollY={scrollY} />
      <ProjectsSection />
      <SkillSelection/>
      <ExperienceSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
