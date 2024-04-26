import React from "react";
import { SiPlanetscale } from "react-icons/si";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-row items-center cursor-pointer">
        <SiPlanetscale />
        <p className="sm:text-xl text-xl text-gray-600 font-bold font-pacifico ml-2">
          espiritual.xyz
        </p>
      </div>
    </Link>
  );
};

export default Logo;
