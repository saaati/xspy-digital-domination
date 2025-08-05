import { AggressiveHero } from "@/components/AggressiveHero"
import { MockupDemo } from "@/components/MockupDemo"
import { AggressivePlans } from "@/components/AggressivePlans"
import { FixedCTA } from "@/components/FixedCTA"
import { DiscreteFooter } from "@/components/DiscreteFooter"

const Index = () => {
  return (
    <div className="min-h-screen">
      <AggressiveHero />
      <MockupDemo />
      <AggressivePlans />
      <DiscreteFooter />
      <FixedCTA />
    </div>
  );
};

export default Index;
