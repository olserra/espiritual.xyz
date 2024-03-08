import React from "react";
import Button from "./Button";
import Image from "next/image";
import BlocksImg from "@/assets/blocks.png";
import { useSession } from "next-auth/react";
import { handleSignIn } from "@/helpers/handleSignIn";

const Hero: React.FC = () => {
  const { data: session } = useSession();

  const handleStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/profiler";
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mx-24 mb-8 px-6 sm:px-2 lg:px-0">
      <div className="flex flex-col lg:max-w-[550px] lg:mx-12">
        {/* Content Texts */}
        <div className="md:px-8 xl:px-2">
          <p className="text-base text-gray-400 pt-12 lg:pt-4 pb-4">
            Enhance Your Experience and Own Your Data
          </p>
          <h1 className="max-w-[350px] md:max-w-md pb-6 font-sans font-bold text-4xl md:text-5xl lg:text-4xl text-gray-200">
            Personalize your experience and have better recommendations
          </h1>
          <p className="text-gray-400 text-base lg:text-xl lg:pb-0">
            Create a digital profile, decentralized and protected by blockchain,
            ready to be used across the web for better recommendations and
            personalized experiences.
          </p>
        </div>

        {session ? (
          <div className="pt-8 md:px-8 xl:px-2 lg:block">
            <Button onClick={handleStart} className="text-white">
              Create your profile
            </Button>
          </div>
        ) : (
          <div className="pt-8 md:px-8 xl:px-2 lg:block">
            <Button onClick={handleSignIn} className="text-white">
              Get started
            </Button>
          </div>
        )}
      </div>
      <div className="items-center justify-center lg:mr-20">
        <Image src={BlocksImg} alt="matrix-img" width={600} height={600} />
      </div>
    </div>
  );
};

export default Hero;
