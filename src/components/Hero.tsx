import React from "react";
import Board from "@/assets/board.jpeg";
import { signIn } from "next-auth/react";
import Image from "next/image";
import WaitlistInput from "./WaitlistInput";

const Hero = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn("google", {
      callbackUrl: "https://www.boostio.ai/api/auth/callback/google",
    });
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between pb-12 lg:pb-44 lg:px-28">
        <div className="flex flex-col lg:items-start mb-8 px-6">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-400 pt-8 md:max-w-2xl pb-6 font-sans text-start font-bold text-4xl md:text-5xl lg:text-6xl lg:max-w-2xl">
            The right developer for the right task
          </h1>
          <p className="md:max-w-2xl text-start text-gray-500 text-base lg:text-xl md:pb-8 lg:max-w-lg">
            We help companies find the right developer for the right task,
            reducing the time and cost of hiring a full-time resource
          </p>
          <div className="hidden lg:block justify-center">
            <WaitlistInput />
          </div>
        </div>
        <div>
          <Image src={Board} width={450} height={450} alt="" />
        </div>
        <div className="flex justify-center items-center text-center lg:hidden pt-12">
          <WaitlistInput />
        </div>
      </div>
    </>
  );
};

export default Hero;
