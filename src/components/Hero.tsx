import React from "react";
import Button from "./Button";
import Image from "next/image";
import BrainGIF from "@/assets/brain.gif";
// import Matrix from "@/assets/neural-network.png";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

const Hero = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn("google", {
      callbackUrl: "https://www.boostio.ai/api/auth/callback/google",
    });
  };

  const handleChat = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/upload-doc");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mx-24 mb-8 px-6 sm:px-2 lg:px-0">
        <div className="flex flex-col lg:max-w-[550px] lg:mx-12">
          <p className="text-base text-gray-400 pt-12 lg:pt-4 pb-4 md:px-8 xl:px-2">
            Personalize AI with Your Metadata
          </p>
          <h1 className="max-w-[350px] md:max-w-md pb-6 font-sans font-bold text-4xl md:text-5xl lg:text-4xl text-gray-200 md:px-8 xl:px-2">
            Tailor Every AI to Your Unique Needs and Preferences
          </h1>
          <p className="text-gray-400 text-base lg:text-xl lg:pb-0 md:px-8 xl:px-2">
            Transform How You Interact with AI: Introducing a Groundbreaking
            Platform for Secure, Personalized Metadata Management
          </p>
          <div className="justify-center pt-8 lg:block md:px-8 xl:px-2"></div>
          {!session ? (
            <div className="hidden justify-center pl-2 lg:block">
              <Button onClick={handleSignIn} className="text-white">
                Get started
              </Button>
            </div>
          ) : (
            <div className="hidden justify-center pl-8 lg:block xl:pl-2">
              <Button onClick={handleChat} className="text-white">
                Chat
              </Button>
            </div>
          )}
        </div>
        <div className="items-center justify-center lg:mr-20">
          <Image src={BrainGIF} alt="matrix-img" width={600} height={600} />
        </div>
        {!session ? (
          <div className="flex justify-center pt-8 md:pt-16 lg:hidden">
            <Button onClick={handleSignIn} className="text-white">
              Get started
            </Button>
          </div>
        ) : (
          <div className="flex justify-center pt-16 lg:hidden">
            <Button onClick={handleChat} className="text-white">
              Chat
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
