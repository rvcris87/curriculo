import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { ExperienceLayer } from "@/components/site/ExperienceLayer";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Method } from "@/components/site/Method";
import { Portfolio } from "@/components/site/Portfolio";
import { Services } from "@/components/site/Services";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-brand/30 selection:text-white">
      <ExperienceLayer />
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Method />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
