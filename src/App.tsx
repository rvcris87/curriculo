import { About } from "@/components/site/About";
import { Authority } from "@/components/site/Authority";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { LocalBusinesses } from "@/components/site/LocalBusinesses";
import { Method } from "@/components/site/Method";
import { NicheShowcase } from "@/components/site/NicheShowcase";
import { Problem } from "@/components/site/Problem";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { Solution } from "@/components/site/Solution";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Authority />
        <Problem />
        <Solution />
        <Services />
        <Projects />
        <NicheShowcase />
        <LocalBusinesses />
        <Method />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
