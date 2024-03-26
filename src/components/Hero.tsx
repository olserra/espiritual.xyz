import React from "react";
import Button from "./Button";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { handleSignIn } from "@/helpers/handleSignIn";

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
          <div className="text-base text-gray-400 pt-12 lg:pt-4 pb-4">
            ANALYZE CONVERSATIONS WITH AI
          </div>
          <h1 className="max-w-[300px] md:max-w-md pb-6 font-sans font-bold text-2xl md:text-5xl lg:text-4xl text-gray-200">
            Unlock the Power of Conversational AI
          </h1>
          <p className="text-gray-400 text-base lg:text-xl lg:pb-0">
            Seamlessly analyze conversations with the power of AI. Our platform
            allows you to harness the potential of your data by leveraging
            advanced AI algorithms to derive valuable insights from
            conversations, enhancing decision-making and understanding.
          </p>
        </div>

        {session ? (
          <div className="pt-8 md:px-8 xl:px-2 lg:block">
            <Button onClick={handleStart}>Your data</Button>
          </div>
        ) : (
          <div className="pt-8 md:px-8 xl:px-2 lg:block">
            <Button onClick={handleSignIn}>Get started</Button>
          </div>
        )}
      </div>
      <div className="max-w-[200px] md:max-w-[3000px] self-center items-center justify-center lg:mr-20">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/8757/8757988.png"
          alt="matrix-img"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Hero;
