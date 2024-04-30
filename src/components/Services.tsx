// Services.tsx

import React from "react";
import { FaMedal, FaHeart, FaBrain } from "react-icons/fa";

const ServiceCard: React.FC<{
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}> = ({ icon, title, description, color }) => (
  <div
    className={`flex flex-col items-start p-12 ${color} rounded-lg m-6 max-w-[300px] max-h-[300px] gap-4`}
  >
    <div className="text-gray-800 text-5xl mb-2">{icon}</div>
    <h3 className="mb-1 font-semibold text-2xl text-gray-900">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const colors = ["bg-white", "bg-pink-400", "bg-yellow-400"]; // Replace with your color preferences

  return (
    <div className="py-12 lg:px-24 bg-gray-100">
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-10">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center">
        <ServiceCard
          icon={<FaMedal />}
          title="AI Assistant"
          description="One-on-one sessions to explore spiritual paths and practices best suited for you."
          color={colors[0]}
        />
        <ServiceCard
          icon={<FaHeart />}
          title="Community"
          description="Join our community gatherings, workshops, and seminars to connect with like-minded individuals."
          color={colors[1]}
        />
        <ServiceCard
          icon={<FaBrain />}
          title="Resources"
          description="Access a wealth of knowledge through our curated articles, books, and other learning materials."
          color={colors[2]}
        />
      </div>
    </div>
  );
};

export default Services;
