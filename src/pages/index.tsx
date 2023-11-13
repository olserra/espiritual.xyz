import { DemoSection } from "@/components/DemoSection";
import FeatureSection from "@/components/FeatureSection";
import Reviews from "@/components/Reviews";
import LandingPageLayout from "@/components/Layout";
import Hero from "@/components/Hero";

const About = () => {
  return (
    <LandingPageLayout title="About">
      <Hero />
      <FeatureSection />
      <Reviews />
      <DemoSection />
    </LandingPageLayout>
  );
};

export default About;
