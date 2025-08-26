import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { ValueProposition } from '@/components/landing/ValueProposition';
import { Features } from '@/components/landing/Features';
import { ProcessSteps } from '@/components/landing/ProcessSteps';
import { DashboardStats } from '@/components/landing/DashboardStats';
import { Partners } from '@/components/landing/Partners';
import { Pricing } from '@/components/landing/Pricing';
import { Footer } from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Features />
        <ProcessSteps />
        <DashboardStats />
        <Partners />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
