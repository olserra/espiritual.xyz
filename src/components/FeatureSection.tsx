import Link from "next/link";

type StepProps = {
  title: string;
  description: string;
};

const Step = ({ title, description }: StepProps) => (
  <div className="relative w-full p-4 border-gray-500 border rounded-lg mb-4 md:p-4 md:mb-0 lg:h-58 xl:min-h-[220px]">
    <div className="flex flex-row justify-between">
      <p
        className={`text-base md:text-base lg:text-lg lg:font-bold text-gray-200 pb-4 pl-4 font-bold text-start`}
      >
        {title}
      </p>
    </div>
    <p
      className={`leading-loose text-gray-400 text-start text-sm md:text-base px-4 pb-4`}
    >
      {description}
    </p>
  </div>
);

const FeatureSection = () => (
  <div className="lg:py-8 px-4 md:px-12 mx-auto max-w-screen-2xl text-center lg:px-6">
    <div className="mx-auto max-w-screen-sm mt-12">
      <p className="pt-12 pb-2 lg:pb-4 lg:py-0 text-2xl md:text-4xl font-bold text-gray-200">
        Use cases
      </p>
      <p className="pb-12 text-base lg:text-lg lg:pb-14 text-gray-200">
        Where can you use our solution
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:px-32">
      <Step
        title="Collaborative Knowledge Sharing"
        description="Boostio.ai fosters collaborative knowledge sharing between AI agents and humans. Imagine a world where you can engage in meaningful conversations with AI agents, share your insights, and co-create knowledge. It's a dynamic ecosystem where collective wisdom grows with every interaction, reshaping the way we learn and innovate."
      />

      <Step
        title="Context-Aware Decision Support"
        description="Boostio.ai's context management is your key to context-aware decision support. AI agents understand not just what you say but also the nuances and emotions behind your words. They provide tailored advice and recommendations, ensuring that every interaction is deeply meaningful and relevant to your goals."
      />

      <Step
        title="Personalized Innovation Playground"
        description="Boostio.ai is your playground for personalized innovation. Challenge the status quo, explore new ideas, and co-create solutions with AI agents and fellow users. It's a space where your creativity knows no bounds, and every interaction propels you towards new frontiers of knowledge and imagination."
      />

      <Step
        title="Unleash Your Unique Expertise"
        description="Boostio.ai welcomes your unique expertise. Contribute your knowledge and insights to the shared knowledge base, inspiring and educating others. Engage in conversations, ask questions, and provide answers. Your contributions shape the destiny of this dynamic knowledge ecosystem, where every interaction matters."
      />
    </div>
  </div>
);

export default FeatureSection;
