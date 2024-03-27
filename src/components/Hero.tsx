import React from "react";
import Button from "./Button";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { handleSignIn } from "@/helpers/handleSignIn";
import WaitlistInput from "./WaitlistInput";

const Hero: React.FC = () => {
  const { data: session } = useSession();

  const handleStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/upload";
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mx-24 mb-8 px-6 sm:px-2 lg:px-0">
      <div className="flex flex-col lg:max-w-[550px] lg:mx-12">
        {/* Content Texts */}
        <div className="md:px-8 xl:px-2">
          <p className="text-base text-gray-400 pt-12 lg:pt-4 pb-4">
            UNLOCK THE POWER OF YOUR DATA
          </p>
          <h1 className="max-w-[300px] md:max-w-md pb-6 font-sans font-bold text-2xl md:text-5xl lg:text-4xl text-gray-200">
            Bridging the Human-AI With Your Own Data
          </h1>
          <p className="text-gray-400 text-base lg:text-xl lg:pb-0">
            Seamlessly integrate metadata to forge a bridge between human
            intelligence and your AI, enhancing its ability to learn from
            decentralized, blockchain-protected digital profiles ready for
            web-wide application.
          </p>
        </div>

        {session ? (
          <div className="pt-6">
            <WaitlistInput />
          </div>
        ) : (
          <div className="pt-8 md:px-8 xl:px-2 lg:block">
            <Button onClick={handleSignIn}>Get started</Button>
          </div>
        )}
      </div>
      <div className="max-w-[200px] md:max-w-[3000px] self-center items-center justify-center lg:mr-20">
        <Image
          src="https://pngimg.com/d/fingerprint_PNG38.png"
          alt="matrix-img"
          width={400}
          height={400}
          className="pt-8"
        />
      </div>
    </div>
  );
};

export default Hero;
