import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
