import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Awards from "@/components/sections/Awards";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const scrollToProjects = sessionStorage.getItem("scrollToProjects");
    if (scrollToProjects) {
      sessionStorage.removeItem("scrollToProjects");
      const timer = setTimeout(() => {
        const element = document.querySelector("#projects");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
