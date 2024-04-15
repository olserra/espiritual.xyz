import React, { ReactNode } from "react";

interface FAQQuestion {
  question: string;
  answer: ReactNode;
}

const faqQuestions: FAQQuestion[] = [
  {
    question:
      "How can our LinkedIn Marketing Agency enhance your B2B strategy?",
    answer: (
      <>
        <p>
          Our agency specializes in enhancing B2B strategies by crafting
          personalized LinkedIn marketing plans. We focus on deepening your
          market presence, increasing engagement, and driving leads by
          optimizing your LinkedIn profile and implementing targeted content
          campaigns.
        </p>
      </>
    ),
  },
  {
    question: "What services does our LinkedIn Marketing Agency offer?",
    answer: (
      <>
        <p>
          We provide a comprehensive range of services including content
          creation, lead generation, profile optimization, and strategic
          consulting to empower your business on LinkedIn. Our aim is to
          position your brand as a thought leader in your industry.
        </p>
      </>
    ),
  },
  {
    question: "How do we track and report your campaign performance?",
    answer: (
      <>
        <p>
          We ensure transparency and accountability in all campaigns by
          providing detailed analytics and regular performance reports. Our
          clients have real-time access to track ROI and see how our strategies
          directly contribute to their business objectives.
        </p>
      </>
    ),
  },
  {
    question: "Why choose us for your LinkedIn marketing needs?",
    answer: (
      <>
        <p>
          Our agency stands out due to our tailored approach to each client,
          deep understanding of B2B markets, and our ability to leverage
          LinkedIn to generate substantial leads and engagement effectively.
        </p>
      </>
    ),
  },
  {
    question: "How do we ensure your success on LinkedIn?",
    answer: (
      <>
        <p>
          We commit to your success by aligning our marketing strategies with
          your business goals, offering ongoing support, and adapting our
          tactics based on market feedback and performance data to continuously
          drive your business forward.
        </p>
      </>
    ),
  },
  {
    question: "What makes our LinkedIn marketing strategies effective?",
    answer: (
      <>
        <p>
          Our strategies are effective because they are data-driven, tailored,
          and continuously optimized based on the latest LinkedIn trends and
          algorithm updates. This approach ensures we are always ahead,
          providing maximum visibility and engagement.
        </p>
      </>
    ),
  },
  {
    question: "How do we tailor strategies to meet your specific needs?",
    answer: (
      <>
        <p>
          We start with a thorough analysis of your business and goals, followed
          by the development of a customized strategy that includes content
          planning, targeted advertising, and strategic engagements to meet your
          unique needs and maximize your LinkedIn potential.
        </p>
      </>
    ),
  },
  {
    question: "What ongoing support do we offer our clients?",
    answer: (
      <>
        <p>
          Our agency provides continuous support and consulting to ensure that
          our clients are fully equipped to leverage all LinkedIn features. From
          onboarding to advanced campaign management, we are with you every step
          of the way.
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
    <div className="md:px-12 mx-auto max-w-screen-xl">
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
