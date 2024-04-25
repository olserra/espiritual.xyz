import LandingPageLayout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Faq } from "@/components/Faq";

const About = () => {
  return (
    <LandingPageLayout title="About">
      <Hero />
      <Services />
      <Faq />
    </LandingPageLayout>
  );
};

export default About;
