import React from "react";

interface FaqQuestionProps {
  question: string;
  answer: React.ReactNode;
}

const faqQuestions = [
  {
    question:
      "How does blockchain technology empower personalized web experiences on Boostio.ai?",
    answer: (
      <>
        <p>
          Blockchain technology on Boostio.ai ensures ownership and security of
          your digital identity and data. By utilizing blockchain, users can
          take control of their data, leading to personalized web experiences
          tailored to their preferences.
        </p>
      </>
    ),
  },
  {
    question:
      "What benefits does decentralized profile management offer on Boostio.ai?",
    answer: (
      <>
        <p>
          Decentralized profile management allows users to manage their digital
          profile securely and privately. With blockchain, users can have
          control over their data, receiving customized recommendations and
          experiences while ensuring privacy.
        </p>
      </>
    ),
  },
  {
    question:
      "How does Boostio.ai ensure trust and authenticity in personalized web experiences?",
    answer: (
      <>
        <p>
          Boostio.ai enables users to choose the level of access that third
          parties have to their digital profile. By doing so, users can ensure
          trust and authenticity in personalized web experiences while
          maintaining control over their data.
        </p>
      </>
    ),
  },
  {
    question:
      "What advantages does cross-platform personalization offer on Boostio.ai?",
    answer: (
      <>
        <p>
          Cross-platform personalization on Boostio.ai allows users to utilize
          their decentralized digital profile seamlessly across various
          platforms. This enhances the online journey by providing tailored
          recommendations and personalized experiences.
        </p>
      </>
    ),
  },
  {
    question:
      "How does community-driven profile governance contribute to Boostio.ai?",
    answer: (
      <>
        <p>
          Boostio.ai encourages community-driven governance of digital profiles.
          Users can engage in shaping the evolution of their digital profile,
          contributing to a collaborative ecosystem of personalized web
          experiences.
        </p>
      </>
    ),
  },
  {
    question:
      "What benefits does shopping and marketplace personalization offer on Boostio.ai?",
    answer: (
      <>
        <p>
          Shopping and marketplace personalization on Boostio.ai provides better
          recommendations and personalized experiences while shopping online.
          Users can leverage their decentralized digital profile to enhance
          their journey and discover new products tailored to their preferences.
        </p>
      </>
    ),
  },
  {
    question:
      "How do personalized learning pathways enhance the Boostio.ai experience?",
    answer: (
      <>
        <p>
          Personalized learning pathways on Boostio.ai offer users a tailored
          learning journey aligned with their decentralized digital profile.
          Users can access curated content and educational resources to fuel
          continuous growth and development.
        </p>
      </>
    ),
  },
  {
    question:
      "What role does collaborative content curation play in Boostio.ai?",
    answer: (
      <>
        <p>
          Collaborative content curation allows users to join forces with the
          community to curate and share content aligned with their decentralized
          digital profile. This fosters innovation and quality within the
          personalized web experience on Boostio.ai.
        </p>
      </>
    ),
  },
];

const FaqQuestion: React.FC<FaqQuestionProps> = ({ question, answer }) => (
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
