import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { PlansSection } from "@/components/PlansSection"
import { DisclaimerSection } from "@/components/DisclaimerSection"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <PlansSection />
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default Index;
