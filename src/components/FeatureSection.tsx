import Link from "next/link";

type StepProps = {
  title: string;
  description: string;
};

const Step = ({ title, description }: StepProps) => (
  <div className="relative w-full p-4 border-gray-300 border rounded-lg mb-4 md:p-4 md:mb-0 lg:h-58 xl:min-h-[220px]">
    <div className="flex flex-row justify-between">
      <p
        className={`text-base md:text-base lg:text-lg lg:font-bold text-gray-700 pb-4 pl-4 font-bold text-start`}
      >
        {title}
      </p>
    </div>
    <p
      className={`leading-loose text-gray-500 text-start text-sm md:text-base px-4 pb-4`}
    >
      {description}
    </p>
  </div>
);

const FeatureSection = () => (
  <div className="lg:py-8 px-4 md:px-12 mx-auto max-w-screen-2xl text-center lg:px-6">
    <div className="mx-auto max-w-screen-sm mt-12">
      <p className="pt-12 pb-2 lg:pb-4 lg:py-0 text-gray-500 text-2xl md:text-4xl font-bold dark:text-gray-700">
        How it works
      </p>
      <p className="pb-12 text-base lg:text-lg lg:pb-14 text-gray-500">
        Understand our product in 4 simple steps
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:px-32">
      <Step
        title="1 - Upload Your Legal Documents"
        description="User uploads PDFs on Boostio plataform, and we will safely store them in our cloud, in a vectorized format, which allows for easy access and analysis from our AI agent."
      />
      <Step
        title="2 - Our AI Learn From Your Documents"
        description="Our AI agent will learn from your documents, and extract the most important information, and insights, using a technique called RAG (Retrieval-Augmented Generation)."
      />
      <Step
        title="3 - Activate the Intelligent Chat Agent"
        description="With the extracted insights and information, activate your AI-powered legal assistant. You'll save countless hours of reading while ensuring that nothing important slips through the cracks."
      />
      <Step
        title="4 - Get Legal Insights for an Unfair Advantage"
        description="By harnessing this powerful technology, you gain an unfair advantage over the competition. Save time, streamline your strategies, and access insights that competitors might overlook."
      />
    </div>
  </div>
);

export default FeatureSection;
