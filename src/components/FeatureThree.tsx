import Image from "next/image";
import Feature3 from "@/assets/feature3.png";

const FeatureThree = () => (
  <div className="pt-8 pb-14 px-4 md:px-12 mx-auto max-w-screen-2xl text-center lg:px-6 bg-black">
    <div className="flex flex-col md:flex-row lg:p-24 justify-center items-center">
      <div className="p-12">
        <Image src={Feature3} width={600} height={10} alt={""} />
      </div>
      <div className="mx-auto max-w-screen-sm">
        <p className="pb-2 lg:pb-4 lg:py-0 text-gray-300 text-2xl md:text-4xl font-bold">
          Efficient Resources
        </p>
        <p className="px-8 pb-12 text-base lg:text-xl lg:pb-14 text-gray-400">
          Unlock a world of cost-effective and efficient resources with our
          platform. Our platform ensures you have the resources you need without
          overextending your budget, helping you streamline your operations and
          maximize your ROI, hiring on demand.
        </p>
      </div>
    </div>
  </div>
);

export default FeatureThree;
