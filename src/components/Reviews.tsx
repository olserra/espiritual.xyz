import Image from "next/image";
import Quote from "@/assets/quote.svg";
import Quote2 from "@/assets/quote2.svg";

interface Testimonial {
  name: string;
  image: string;
  role: string;
  quote: string;
  backgroundColor: string;
}

const socialProofs: Testimonial[] = [
  {
    name: "Joshua Mitchell",
    role: "Senior Counsel",
    image: "/images/social-2.webp",
    quote:
      "Boostio has transformed the way we handle legal documents. It's like having an entire legal library at our fingertips. An indispensable tool for legal professionals.",
    backgroundColor: "#68a1e3",
  },
  {
    name: "Michael Chang",
    role: "Managing Partner",
    image: "/images/social-1.webp",
    quote:
      "As a managing partner, time is my most valuable asset. Boostio not only saves me hours of reading but also equips me with invaluable legal insights. It's a game-changer.",
    backgroundColor: "#e35957",
  },
  {
    name: "Jennifer Lopez",
    role: "General Counsel",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
    quote:
      "Privacy is paramount in our field. Boostio's commitment to data security is commendable. It's the perfect blend of efficiency and confidentiality for legal professionals.",
    backgroundColor: "#74cc75",
  },
];

export default function Reviews() {
  return (
    <div className="px-2 pt-24 lg:px-6">
      <div className="flex justify-center">
        <div className="flex flex-row items-center mb-8">
          <p className="mr-4 text-gray-500 text-2xl md:text-4xl font-bold dark:text-gray-700">
            Some reviews
          </p>
          <Image src={Quote} alt={"quote-img"} width={50} height={50} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-56 lg:gap-12 text-center px-4 md:px-32 pb-12 md:pb-28">
        {socialProofs.map((proof) => (
          <div
            className="flex flex-col justify-between items-center h-full"
            key={proof.name}
          >
            <div className="border p-4 md:min-w-[200px] rounded-lg flex-grow">
              <div className="flex flex-row items-center">
                <Image
                  src={proof.image}
                  alt={proof.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col items-start">
                  <p className="text-base md:text-base text-gray-700 ml-2">
                    {proof.name}
                  </p>
                  <p className="text-xs text-gray-700 ml-2">{proof.role}</p>
                </div>
              </div>
              <p className="text-xs lg:text-base md:text-sm text-gray-700 mt-4 italic">
                "{proof.quote}"
              </p>
              <Image
                src={Quote2}
                alt={"quote-img"}
                width={20}
                height={20}
                className="mt-8"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
