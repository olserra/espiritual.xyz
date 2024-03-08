import React from "react";

interface FaqQuestionProps {
  question: string;
  answer: React.ReactNode;
}

const faqQuestions = [
  {
    question: "How does Boostio.ai integrate blockchain into personalized AI?",
    answer: (
      <>
        <p>
          Boostio.ai leverages blockchain technology to create a secure and
          personalized AI experience. By using decentralized digital IDs, users
          have complete control over their data, enabling tailored interactions
          and recommendations.
        </p>
      </>
    ),
  },
  {
    question: "Can I earn and spend tokens on Boostio.ai?",
    answer: (
      <>
        <p>
          Absolutely! Our platform rewards engagement with tokens that can be
          spent on premium features, or saved as investments within our
          ecosystem.
        </p>
      </>
    ),
  },
  {
    question: "What can I do with the tokens I earn on Boostio.ai?",
    answer: (
      <>
        <p>
          Tokens earned can be used to access exclusive content, personalize AI
          interactions further, or participate in governance decisions on our
          platform.
        </p>
      </>
    ),
  },
  {
    question: "How does tokenization enhance the Boostio.ai experience?",
    answer: (
      <>
        <p>
          Tokenization adds a layer of motivation and reward, enhancing user
          engagement and contribution while providing a tangible value for
          participation.
        </p>
      </>
    ),
  },
  {
    question:
      "What are the benefits of a decentralized digital ID on Boostio.ai?",
    answer: (
      <>
        <p>
          Decentralized digital IDs offer enhanced privacy, security, and
          control over personal data, leading to a more secure and customized AI
          experience.
        </p>
      </>
    ),
  },
  {
    question: "How does Boostio.ai ensure the security of my digital ID?",
    answer: (
      <>
        <p>
          We employ advanced encryption and blockchain technology to secure your
          digital ID, giving you confidence in the privacy and safety of your
          data.
        </p>
      </>
    ),
  },
  {
    question: "Can I transfer my tokens to other platforms or users?",
    answer: (
      <>
        <p>
          Yes, tokens are designed for interoperability within the Web3
          ecosystem, allowing transfers between users and platforms.
        </p>
      </>
    ),
  },
  {
    question:
      "Is Boostio.ai's token-based system accessible to non-technical users?",
    answer: (
      <>
        <p>
          Our platform is user-friendly, ensuring that everyone can participate
          in the token-based system, regardless of their technical background.
        </p>
      </>
    ),
  },
  {
    question: "How do community-driven developments work on Boostio.ai?",
    answer: (
      <>
        <p>
          Community-driven developments are guided by user proposals and
          token-based voting, ensuring that our platform evolves according to
          user needs and contributions.
        </p>
      </>
    ),
  },
  {
    question: "What role do users play in the governance of Boostio.ai?",
    answer: (
      <>
        <p>
          Users play a critical role in governance by using their earned tokens
          to vote on key decisions, directly influencing the platform's
          direction.
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
