import Link from "next/link";

type StepProps = {
  title: string;
  description: string;
};

const Step: React.FC<StepProps> = ({ title, description }) => (
  <div className="relative w-full p-4 border-gray-500 border rounded-lg mb-4 md:p-4 md:mb-0 lg:h-58 xl:min-h-[220px]">
    <div className="flex flex-row justify-between">
      <p className="text-base md:text-base lg:text-lg lg:font-bold text-gray-200 pb-4 pl-4 font-bold text-start">
        {title}
      </p>
    </div>
    <p className="leading-loose text-gray-400 text-start text-sm md:text-base px-4 pb-4">
      {description}
    </p>
  </div>
);

const FeatureSection: React.FC = () => (
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
        title="Developers' Language Preferences"
        description="Developers can calibrate responses to their preferred programming language, ensuring that code examples and technical explanations are consistently presented in their language of choice. For example, they can specify responses in TypeScript instead of JavaScript for better alignment with their project requirements."
      />

      <Step
        title="Content Creators' Tone Control"
        description="Content creators can adjust the tone of responses based on the intended audience or context. They have the flexibility to generate content in a formal or informal language, depending on the platform, target audience, or specific campaign requirements. This allows them to maintain brand voice consistency while adapting to various communication styles."
      />

      <Step
        title="Educators' Learning Styles"
        description="Educators can customize responses to accommodate different learning styles and preferences of their students. They can calibrate the AI to provide explanations, examples, and learning materials in formats that align with visual, auditory, or kinesthetic learning styles, fostering a more inclusive and engaging learning environment."
      />

      <Step
        title="Customer Support Tailoring"
        description="Customer support teams can tailor responses to meet the specific needs and preferences of individual customers. They can calibrate the AI to deliver responses in different languages, adjust the level of formality, or personalize recommendations based on past interactions and customer profiles, enhancing the overall customer experience."
      />

      <Step
        title="Legal Professionals' Terminology Preferences"
        description="Legal professionals can customize responses to adhere to specific legal terminology or citation formats. They can calibrate the AI to generate legal documents, case summaries, or contract clauses using precise language and referencing conventions relevant to their jurisdiction or practice area, ensuring accuracy and compliance."
      />

      <Step
        title="Medical Practitioners' Patient Communication"
        description="Medical practitioners can adjust the tone and level of detail in responses to effectively communicate with patients. They can calibrate the AI to provide medical information in layman's terms for patient education purposes or deliver more technical explanations for discussions with colleagues or researchers, improving patient understanding and healthcare outcomes."
      />

      <Step
        title="Marketing Personalization"
        description="Marketing professionals can personalize responses to match the preferences and interests of their target audience segments. They can calibrate the AI to generate tailored marketing messages, product recommendations, and promotional offers based on demographic data, past interactions, and behavioral patterns, maximizing engagement and conversion rates."
      />

      <Step
        title="Language Learners' Proficiency Levels"
        description="Language learners can adjust the difficulty level and complexity of responses to match their proficiency levels and learning objectives. They can calibrate the AI to provide simple explanations and vocabulary for beginners or more advanced language structures and idiomatic expressions for intermediate and advanced learners, facilitating language acquisition and fluency development."
      />
    </div>
  </div>
);

export default FeatureSection;
