import Image from "next/image";
import Feature1 from "@/assets/feature1.png";

const FeatureOne = () => (
  <div className="pt-8 pb-14 px-4 md:px-12 mx-auto max-w-screen-2xl text-center lg:px-6 bg-black">
    <div className="flex flex-col md:flex-row lg:p-24 mt-12 lg:mt-0">
      <div>
        <Image src={Feature1} width={600} height={10} alt={""} />
      </div>
      <div className="mx-auto max-w-screen-sm mt-12">
        <p className="pb-2 lg:pb-4 lg:py-0 text-gray-300 text-2xl md:text-4xl font-bold">
          Diverse Talent Pool
        </p>
        <p className="px-8 pb-12 text-base lg:text-xl lg:pb-14 text-gray-400">
          Discover a wide spectrum of professionals across various technologies
          and expertise levels. Whether you're looking for software engineers,
          no-code / low-code, data scietists, data engineers, or more, our
          platform connects you with a diverse talent pool.
        </p>
      </div>
    </div>
  </div>
);

export default FeatureOne;
