// Hero.tsx

import React from "react";
import Image from "next/image";
import { useFocus } from "@/context/FocusContext"; // Import the FocusContext
import Button from "./Button";

const Hero: React.FC = () => {
  const HeroImg =
    "https://media.licdn.com/dms/image/C5612AQHxqGJ2ghE43Q/article-cover_image-shrink_600_2000/0/1649347974860?e=2147483647&v=beta&t=oAq57hGgw1PNR-oo-2ATSj4D2cnC8WndLfyecDsGIhg";
  const { focusInput } = useFocus(); // Consume the focus method from the context

  const handleGetContacted = () => {
    focusInput();
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mx-24 mb-8 px-6 sm:px-2 lg:px-0">
      <div className="flex flex-col lg:max-w-[550px] lg:mx-12">
        {/* Content Texts */}
        <div className="md:px-8 xl:px-2">
          <p className="text-base text-gray-400 lg:pt-4 pb-4">
            UNLOCK THE POWER OF YOUR DATA
          </p>
          <h1 className="max-w-[300px] md:max-w-md pb-6 font-sans font-bold text-2xl md:text-5xl lg:text-4xl text-gray-200">
            Bridging AI for Data Analysis and Content Personalization
          </h1>
          <p className="text-gray-400 text-base lg:text-xl lg:pb-0">
            Our value resides in the ability to provide insights to help you
            make data-driven decisions. We understand how your data can be
            leveraged to personalize your content and reach your objectives.
          </p>
        </div>
        <div className="pt-6">
          <Button onClick={handleGetContacted}>Contact Us</Button>
        </div>
      </div>
      <div className="max-w-[200px] md:max-w-[3000px] self-center items-center justify-center lg:mr-20">
        <Image
          src={HeroImg}
          alt="hero-img"
          width={400}
          height={400}
          className="pt-8 color-overlay"
        />
      </div>
    </div>
  );
};

export default Hero;
