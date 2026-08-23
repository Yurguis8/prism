import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TechAndFaqSection } from "@/components/TechAndFaqSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-500 selection:text-neutral-950">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <FeaturesSection />
      
      <ProcessSection />
      <TechAndFaqSection />
      <CTASection />
      <Footer />
    </main>
  );
}