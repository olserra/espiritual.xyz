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
      "Followers of this faith emphasize personal conversion, the authority of the Bible, and spreading the teachings of Jesus Christ.",
    icon: FaPersonPraying,
  },
  {
    name: "Catholicism",
    description:
      "This branch of Christianity recognizes the Pope's authority and emphasizes traditions such as the sacraments and the teachings of the Church Fathers.",
    icon: FaPrayingHands,
  },
  {
    name: "Buddhism",
    description:
      "Followers of Buddhism seek enlightenment through practices such as meditation, mindfulness, and adherence to the Four Noble Truths and the Eightfold Path.",
    icon: MdTempleBuddhist,
  },
  {
    name: "Agnosticism",
    description:
      "Agnostics hold that the existence of deities is unknown or unknowable.",
    icon: GiMagnifyingGlass,
  },
  {
    name: "Hinduism",
    description:
      "Hinduism encompasses a wide range of beliefs and practices, including belief in multiple gods and goddesses, karma, and reincarnation.",
    icon: GiYinYang,
  },
  {
    name: "Judaism",
    description:
      "Jews follow the teachings of the Torah and Talmud, observing traditions such as Shabbat and dietary laws.",
    icon: TbJewishStar,
  },
  {
    name: "New Age/Spiritual but not religious",
    description:
      "This category includes individuals who may have eclectic beliefs, often centered around personal growth, holistic health, and spirituality outside of traditional religious institutions.",
    icon: GiPerson,
  },
  {
    name: "Other/Undecided",
    description:
      "Some individuals may identify with other spiritual traditions not listed here, or they may still be exploring their beliefs.",
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center w-full">
        {religiousDenominations.map((denomination, index) => (
          <div
            key={index}
            className="m-4 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300 gap-2"
            style={{ minWidth: "250px" }}
            onClick={handleClick}
          >
            <div className="mb-2 text-purple-800">
              {<denomination.icon size={40} />}
            </div>
            <h2 className="text-md font-semibold text-purple-800">
              {denomination.name}
            </h2>
            <p className="text-gray-600 text-sm">{denomination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
