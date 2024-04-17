import React, { ReactNode } from "react";

interface FAQQuestion {
  question: string;
  answer: ReactNode;
}

const faqQuestions: FAQQuestion[] = [
  {
    question: "How does our platform personalize content using AI and data?",
    answer: (
      <>
        <p>
          We utilize advanced AI and data analysis to tailor content to your
          specific needs and preferences. By bridging AI and data, we provide
          insights that empower you to make informed, data-driven decisions for
          your brand.
        </p>
      </>
    ),
  },
  {
    question:
      "How does decentralized data management benefit personalized experiences?",
    answer: (
      <>
        <p>
          Decentralized data management puts you in control of your information,
          allowing you to manage and leverage your data for personalized web
          experiences. This approach ensures trust, authenticity, and privacy in
          content personalization.
        </p>
      </>
    ),
  },
  {
    question:
      "What measures ensure trust and authenticity in personalized web experiences?",
    answer: (
      <>
        <p>
          We provide customizable access levels to your digital profile,
          ensuring that third parties only access the data you authorize. This
          transparency fosters trust and authenticity while maintaining your
          data sovereignty.
        </p>
      </>
    ),
  },
  {
    question:
      "How can our platform enhance marketing content for your audience?",
    answer: (
      <>
        <p>
          Our platform enables the creation and delivery of personalized
          marketing content tailored to your audience's preferences. By
          leveraging your decentralized digital profile, we enhance engagement
          and drive conversions with targeted marketing strategies.
        </p>
      </>
    ),
  },
  {
    question: "How does our platform support developer relations?",
    answer: (
      <>
        <p>
          We empower brands to create compelling videos that advocate for their
          products or services. By personalizing content based on your
          decentralized digital profile, we drive engagement and strengthen
          connections with your audience.
        </p>
      </>
    ),
  },
  {
    question:
      "How can our platform help with documentation creation and delivery?",
    answer: (
      <>
        <p>
          Our platform facilitates the creation and delivery of personalized
          documentation for employees or clients. By leveraging your
          decentralized digital profile, we enhance engagement and streamline
          communication to drive conversions and efficiency.
        </p>
      </>
    ),
  },
  {
    question: "What role does personalized learning play in our platform?",
    answer: (
      <>
        <p>
          Our platform offers personalized learning journeys tailored to your
          decentralized digital profile. Access curated content and educational
          resources aligned with your interests and goals, fostering continuous
          growth and development.
        </p>
      </>
    ),
  },
  {
    question: "How does collaborative content creation work on our platform?",
    answer: (
      <>
        <p>
          Join forces with the community to curate and share content aligned
          with your decentralized digital profile. By collaborating with others,
          you can foster innovation and ensure quality within the personalized
          web experience.
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
        <p className="mb-8 lg:mb-10 text-lg md:text-4xl font-bold text-gray-300">
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
