// Hero.tsx

import React from "react";
import Image from "next/image";
import { useFocus } from "@/context/FocusContext"; // Import the FocusContext
import Button from "./Button";
import HeroImg from "@/assets/hero.jpeg";

const Hero: React.FC = () => {
  const { focusInput } = useFocus(); // Consume the focus method from the context

  const handleGetContacted = () => {
    focusInput();
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mx-24 mb-8 px-6 sm:px-2 lg:px-0 gap-4">
      <div className="flex flex-col lg:max-w-[550px] lg:mx-12 gap-2">
        {/* Content Texts */}
        <div className="md:px-8 xl:px-2">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-12 px-4 lg:px-8 rounded-lg">
            <p className="text-base text-white lg:pt-4 pb-4">
              CONNECT TO YOUR INNER SELF
            </p>
            <h1 className="max-w-[300px] md:max-w-md pb-6 font-sans font-bold text-2xl md:text-5xl lg:text-4xl text-white">
              Empowering Personal Growth through Spiritual Connection
            </h1>
            <p className="text-gray-200 text-base lg:text-xl lg:pb-0">
              Our mission is to facilitate your spiritual journey by providing
              insights and guidance tailored to your unique path. We understand
              the importance of connecting with your inner self and offer
              personalized support to help you achieve spiritual fulfillment.
            </p>
          </div>
        </div>
      </div>
      <div className="self-center items-center justify-center lg:mr-20">
        <Image
          src={HeroImg}
          alt="hero-img"
          width={500}
          height={500}
          className="rounded-xl"
        />
        <div className="pt-6">
          <Button onClick={handleGetContacted}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
