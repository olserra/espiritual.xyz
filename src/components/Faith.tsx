import React, { use } from "react";
import { IconType } from "react-icons";
import {
  GiPerson,
  GiScales,
  GiYinYang,
  GiMagnifyingGlass,
} from "react-icons/gi";

import { MdTempleBuddhist } from "react-icons/md";
import { TbJewishStar } from "react-icons/tb";
import { FaPrayingHands } from "react-icons/fa";
import { FaPersonPraying } from "react-icons/fa6";
import { useRouter } from "next/router";

interface Denomination {
  name: string;
  description: string;
  icon: IconType;
}

const religiousDenominations: Denomination[] = [
  {
    name: "Evangelical Christianity",
    description:
      "Emphasizes personal conversion, Bible authority, and spreading Jesus's teachings.",
    icon: FaPersonPraying,
  },
  {
    name: "Catholicism",
    description:
      "Recognizes the Pope's authority, emphasizes sacraments and Church traditions.",
    icon: FaPrayingHands,
  },
  {
    name: "Buddhism",
    description:
      "Seeks enlightenment through meditation, mindfulness, and adherence to Noble Truths and Eightfold Path.",
    icon: MdTempleBuddhist,
  },
  {
    name: "Agnosticism",
    description:
      "Holds that the existence of deities is unknown or unknowable.",
    icon: GiMagnifyingGlass,
  },
  {
    name: "Hinduism",
    description: "Belief in multiple gods, karma, and reincarnation.",
    icon: GiYinYang,
  },
  {
    name: "Judaism",
    description:
      "Follows Torah, Talmud teachings, observes Shabbat, and dietary laws.",
    icon: TbJewishStar,
  },
  {
    name: "New Age/Spiritual but not religious",
    description:
      "Eclectic beliefs, focuses on personal growth and spirituality.",
    icon: GiPerson,
  },
  {
    name: "Other/Undecided",
    description:
      "Individuals with other spiritual traditions or exploring beliefs.",
    icon: GiScales,
  },
];

export const Faith: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/chat");
  };

  return (
    <div className="flex flex-col justify-center items-center text-center bg-purple-50 p-4 pb-24">
      <h1 className="my-6 mx-12 text-xl font-semibold text-purple-800">
        What is your denomination/faith tradition?
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 justify-center w-full">
        {religiousDenominations.map((denomination, index) => (
          <div
            key={index}
            className="m-4 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300 gap-2"
            onClick={handleClick}
          >
            <div className="mb-2 text-purple-800">
              {<denomination.icon size={40} />}
            </div>
            <h2 className="text-sm md:text-md font-semibold text-purple-800">
              {denomination.name}
            </h2>
            <p className="text-gray-600 text-sm">{denomination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
