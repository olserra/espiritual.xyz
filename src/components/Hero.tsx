import React from "react";
import Button from "./Button";
import Image from "next/image";
import BrainGIF from "@/assets/brain.gif";
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
            Shared knowledge bases across multiple AI agents
          </p>
          <h1 className="max-w-[350px] md:max-w-md pb-6 font-sans font-bold text-4xl md:text-5xl lg:text-4xl text-gray-200">
            Context management for AI agents and humans
          </h1>
          <p className="text-gray-400 text-base lg:text-xl lg:pb-0">
            Boostio is a marketplace for Knowledge Bases. You can create your
            own KB and share it with others or use the existing ones.
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
        <Image src={BrainGIF} alt="matrix-img" width={600} height={600} />
      </div>
      {session ? (
        <div className="flex justify-center pt-8 md:pt-16 lg:hidden">
          <Button onClick={handleStart} className="text-white">
            Create your profile
          </Button>
        </div>
      ) : (
        <div className="flex justify-center pt-8 md:pt-16 lg:hidden">
          <Button onClick={handleSignIn} className="text-white">
            Get started
          </Button>
        </div>
      )}
    </div>
  );
};

export default Hero;
