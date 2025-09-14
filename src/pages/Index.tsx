import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import StatsModule from "@/components/StatsModule";
import CommunityResults from "@/components/CommunityResults";
import LiveBetFeed from "@/components/LiveBetFeed";
import Testimonials from "@/components/Testimonials";
import ProBrain from "@/components/ProBrain";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SocialProof />
      <Comparison />
      <HowItWorks />
      <StatsModule />
      <CommunityResults />
      <LiveBetFeed />
      <Testimonials />
      <ProBrain />
      <Pricing />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
