import React from "react";
import Button from "./Button";

type CardProps = {
  title: string;
  description: any;
};

const Card = ({ title, description }: CardProps) => (
  <div className="w-full p-8 border border-gray-700 rounded-lg mb-4 md:p-4 md:mb-0">
    <div className="text-start">
      <p className="text-base md:text-base lg:text-xl lg:font-bold text-gray-700 pb-4">
        {">"} {title}
      </p>
    </div>
    <ul className="leading-loose text-gray-500 text-start text-sm md:text-base">
      {description.map((feat: string, index: number) => (
        <li key={index}>
          <br />
          <strong>• </strong>
          {feat}
        </li>
      ))}
    </ul>
  </div>
);

const handleClick = () => {
  window.location.href = "https://buy.stripe.com/28o2bP98PeI5a4MdQQ";
};

const profilerCard = [
  "Map your gaps",
  "Map your strengths",
  "Spider chart",
  "Team analysis",
  "Individual analysis",
];

const contentRecommendationsCard = [
  "Learning content",
  "Assertive content",
  "Microlearning",
  "Courses",
  "Curation",
];

const roadmapsCard = [
  "Tailored Roadmaps",
  "Predefined Roadmaps",
  "Team Roadmaps",
  "Individual Roadmaps",
  "Onboarding Roadmaps",
  "Offboarding Roadmaps",
];

const AICoachCard = [
  "Technical questions",
  "Behavioral questions",
  "Presentation preparation",
  "Stategy support",
  "Error and debugging",
];

const Pricing = () => (
  <div className="px-4 md:px-12 mx-auto max-w-screen-xl text-center lg:px-6 lg:pb-40">
    <div className="mx-auto max-w-screen-sm mt-12">
      <p className="pb-8 text-gray-500 lg:mb-2 text-2xl md:text-4xl font-bold dark:text-gray-700">
        Pricing
      </p>
      <p>
        <strong>Premium plan:</strong> USD 10/month (per user)
      </p>
      <p className="py-8 text-gray-600">
        Boostio is the <strong>most affordable all-in-one</strong> suite for
        everything people enablement. Plus, our prices adjust to your needs -
        without making you pay for modules you don’t want.
      </p>
    </div>
    {/* <div className="hidden lg:grid grid-cols-1 md:grid-cols-4 md:gap-4 lg:px-12">
      <Card title="Profiler" description={profilerCard} />
      <Card title="Recommendations" description={contentRecommendationsCard} />
      <Card title="Roadmaps" description={roadmapsCard} />
      <Card title="AI Tutor" description={AICoachCard} />
    </div> */}
    <div className="py-2 lg:py-4">
      <Button onClick={handleClick} className="text-white">
        Subscribe
      </Button>
    </div>
  </div>
);

export default Pricing;
