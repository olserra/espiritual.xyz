import React from "react";
import Image from "next/image";
import EspiritualLogo from "@/assets/logo2.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-row items-center cursor-pointer">
        <Image src={EspiritualLogo} alt="Espiritual.xyz logo" width={20} />
        <p className="sm:text-xl text-xl text-gray-600 font-bold font-pacifico ml-2">
          espiritual.xyz
        </p>
      </div>
    </Link>
  );
};

export default Logo;
