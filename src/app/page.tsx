"use client";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 2600, once: false });
    
  }, []);
  return (
    <main className="bg-black min-h-screen"> 
      <section id="home" data-aos="fade-up">
        <HomeSection />
      </section>
      <section id="about" data-aos="fade-up">
        <AboutSection />
      </section>
      <section id="projects" data-aos="fade-up">
        <ProjectsSection />
      </section>
      <section id="contact" data-aos="fade-up">
        <ContactSection />
      </section>
    </main>
  );
}
