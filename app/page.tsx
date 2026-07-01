import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
