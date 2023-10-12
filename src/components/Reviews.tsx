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

const socialProofs = {
  name: "Michael Oreinly",
  role: "VP of Engineering",
  image: "/images/social-1.webp",
  quote:
    "We struggled with idle developers and high recruitment costs for years. But since we started using BoostioAI to hire on-demand, our costs have significantly decreased, and we no longer have developers sitting idle",
  backgroundColor: "#e35957",
};

export default function Reviews() {
  return (
    <div className="flex p-8 md:p-40 text-center bg-black">
      <div
        className="flex flex-col justify-between items-center h-full"
        key={socialProofs.name}
      >
        <div className="p-4 md:min-w-[200px] lex-grow">
          <div className="flex flex-col items-center">
            <Image src={Quote2} alt={"quote-img"} width={30} height={30} />
            <p className="text-lg md:text-2xl text-gray-400 mt-4">
              "{socialProofs.quote}"
            </p>
            <Image
              src={socialProofs.image}
              alt={socialProofs.name}
              width={70}
              height={70}
              className="rounded-full object-cover mt-8 mb-2"
            />
            <div className="flex flex-col items-center">
              <p className="text-base md:text-base text-gray-300 ml-2">
                {socialProofs.name}
              </p>
              <p className="text-xs text-gray-400 ml-2">{socialProofs.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
