import FeatureSection from "@/components/FeatureSection";
import LandingPageLayout from "@/components/Layout";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";

const About = () => {
  return (
    <LandingPageLayout title="About">
      <Hero />
      <FeatureSection />
      <Faq />
    </LandingPageLayout>
  );
};

export default About;
