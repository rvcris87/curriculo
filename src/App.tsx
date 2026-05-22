import { About } from "@/components/site/About";
import { BentoSolutions } from "@/components/site/BentoSolutions";
import { CTA } from "@/components/site/CTA";
import { ExperienceLayer } from "@/components/site/ExperienceLayer";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Method } from "@/components/site/Method";
import { NicheShowcase } from "@/components/site/NicheShowcase";
import { Problem } from "@/components/site/Problem";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-brand/30 selection:text-brand-foreground">
      <ExperienceLayer />
      <Header />
      <main>
        <Hero />
        <Problem />
        <BentoSolutions />
        <NicheShowcase />
        <Method />
        <Services />
        <FAQ />
        <Projects />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
