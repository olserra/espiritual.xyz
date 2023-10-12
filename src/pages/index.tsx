import FeatureOne from "@/components/FeatureOne";
import Reviews from "@/components/Reviews";
import LandingPageLayout from "@/components/Layout";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Waitlist from "@/components/Waitlist";
import { HowItWorks } from "@/components/HowItWorks";
import FeatureTwo from "@/components/FeatureTwo";
import FeatureThree from "@/components/FeatureThree";
import Pricing from "@/components/Pricing";

const About = () => {
  return (
    <LandingPageLayout title="About">
      <Hero />
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <HowItWorks />
      <Reviews />
      <Faq />
      <Pricing />
      <Waitlist />
    </LandingPageLayout>
  );
};

export default About;
