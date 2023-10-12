import Image from "next/image";
import Feature2 from "@/assets/feature2.png";

const FeatureTwo = () => (
  <div className="pt-8 pb-14 px-4 md:px-12 mx-auto max-w-screen-2xl text-center lg:px-6">
    <div className="flex flex-col md:flex-row lg:p-24 justify-center items-center">
      <div className="mx-auto max-w-screen-sm mt-12">
        <p className="pb-2 lg:pb-4 lg:py-0 text-gray-700 text-2xl md:text-4xl font-bold">
          Optimize matching
        </p>
        <p className="px-8 pb-12 text-base lg:text-xl lg:pb-14 text-gray-600">
          We guarantee that you will be matched with the right developer for the
          right task, based on your requirements and the developer's skillset.
          Never worry about hiring the wrong person again.
        </p>
      </div>
      <Image src={Feature2} width={600} height={10} alt={""} />
    </div>
  </div>
);

export default FeatureTwo;
