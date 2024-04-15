import FeatureSection from "@/components/FeatureSection";
import LandingPageLayout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Faq } from "@/components/Faq";
import { FormInput } from "@/components/FormInput";

const About = () => {
  return (
    <LandingPageLayout title="About">
      <Hero />
      <FeatureSection />
      <Faq />
      <FormInput />
    </LandingPageLayout>
  );
};

export default About;
