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
        title="Education and Recruitment"
        description="Integration with education platforms and job boards. The AI will analyze the user’s profile and offer tailored advice on how to improve their chances of getting hired. The AI will also provide personalized advice on how to improve the user’s chances of getting hired."
      />
      <Step
        title="Strategy"
        description="Understand the user or the company’s needs and preferences is key to make assertive analysis and recommendations. The AI will provide personalized advice on how to strive in the user’s industry, based on the oppportunities and challenges that the user is facing."
      />
      <Step
        title="Personal Assistants"
        description="Integration with personal assistants, such as Siri, Alexa, and Google Assistant. The AI will provide personalized advice on how to improve the user’s experience with the personal assistant, based on the user’s preferences and goals."
      />
      <Step
        title="Health and Wellness"
        description="Integration with health and wellness apps to provide personalized advice on exercise routines, diet plans, stress management, or sleep patterns, based on the user’s health data and personal goals."
      />
    </div>
  </div>
);

export default FeatureSection;
