import React, { ReactNode } from "react";

interface FAQQuestion {
  question: string;
  answer: ReactNode;
}

const faqQuestions: FAQQuestion[] = [
  {
    question: "How does Boostio.ai works?",
    answer: (
      <>
        <p>
          Boostio.ai leverages advanced data engineering and AI technologies to
          create personalized web experiences. By combining decentralized data
          ownership with collaborative AI model training, Boostio.ai empowers
          users to control their data and train their own AI algorithms for
          tailored recommendations and enhanced privacy.
        </p>
      </>
    ),
  },
  {
    question:
      "What role does decentralized data ownership play in Boostio.ai's AI-driven approach?",
    answer: (
      <>
        <p>
          Decentralized data ownership on Boostio.ai ensures that users have
          full control over their data, empowering them to authorize AI
          algorithms to access and analyze their information. This model
          prioritizes user privacy while enabling AI-driven personalization.
        </p>
      </>
    ),
  },
  {
    question:
      "How does Boostio.ai ensure trust and transparency in AI-powered web experiences?",
    answer: (
      <>
        <p>
          Boostio.ai implements transparent AI processes, allowing users to
          understand how their data is utilized for personalized experiences.
          Through decentralized governance and blockchain technology, Boostio.ai
          fosters trust by providing visibility into AI-driven decisions.
        </p>
      </>
    ),
  },
  {
    question:
      "What advantages does AI-driven cross-platform personalization offer on Boostio.ai?",
    answer: (
      <>
        <p>
          AI-driven cross-platform personalization on Boostio.ai enables users
          to seamlessly transition between different digital environments while
          maintaining a consistent personalized experience. This unified
          approach enhances user engagement and satisfaction.
        </p>
      </>
    ),
  },
  {
    question: "How does Boostio.ai empower users to train their own AI?",
    answer: (
      <>
        <p>
          Boostio.ai provides tools and resources for users to train their AI
          models based on their preferences and behavior. This self-learning
          capability empowers users to fine-tune their personalized experiences,
          fostering continuous improvement.
        </p>
      </>
    ),
  },
  {
    question:
      "What benefits does collaborative AI model training offer on Boostio.ai?",
    answer: (
      <>
        <p>
          Collaborative AI model training allows users to contribute anonymized
          data to enhance the overall AI algorithms used on Boostio.ai. By
          pooling resources, users collectively improve the accuracy and
          effectiveness of personalized recommendations.
        </p>
      </>
    ),
  },
  {
    question:
      "How does Boostio.ai ensure data security while leveraging AI capabilities?",
    answer: (
      <>
        <p>
          Boostio.ai implements robust security measures, including encryption
          and blockchain-based data storage, to safeguard user information while
          utilizing AI. This comprehensive approach ensures data privacy and
          integrity throughout the AI-driven processes.
        </p>
      </>
    ),
  },
  {
    question:
      "What role does user feedback play in enhancing AI-powered experiences on Boostio.ai?",
    answer: (
      <>
        <p>
          User feedback is integral to refining AI algorithms and improving
          personalized experiences on Boostio.ai. By collecting and analyzing
          user input, Boostio.ai iteratively enhances its AI models to better
          meet user needs and preferences.
        </p>
      </>
    ),
  },
];

const FaqQuestion: React.FC<FAQQuestion> = ({ question, answer }) => (
  <details className="p-4 border-b border-b-gray-500 last:border-b-0 text-gray-300">
    <summary className="cursor-pointer">{question}</summary>
    <div className="mt-3">
      {typeof answer === "string" ? (
        <p className="text-sm leading-6 text-gray-400">{answer}</p>
      ) : (
        answer
      )}
    </div>
  </details>
);

export const Faq = () => (
  <>
    <div className="px-4 md:px-12 mx-auto max-w-screen-sm text-center lg:px-6">
      <div className="mx-auto mt-12">
        <p className="mb-8 lg:mb-16 text-lg md:text-4xl font-bold text-gray-300">
          FAQ
        </p>
        <p className="pb-8 text-gray-300 italic">
          <strong>Frequently Asked Questions (FAQ)</strong> list is here to
          answer some of the most common knowledge gaps. If you have any other
          questions, please contact us.
        </p>
      </div>
    </div>
    <div className="py-16 md:px-12 mx-auto max-w-screen-xl">
      {faqQuestions.map((faqQuestion, index) => (
        <FaqQuestion
          key={index}
          question={faqQuestion.question}
          answer={faqQuestion.answer}
        />
      ))}
    </div>
  </>
);
