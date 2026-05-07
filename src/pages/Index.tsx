import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImpactBar from "@/components/ImpactBar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Achievements from "@/components/Achievements";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <CursorGlow />
      <Navigation />
      <Hero />
      <ImpactBar />
      <Experience />
      <Projects />
      <Skills />
      <Leadership />
      <Achievements />
      <Recognition />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
