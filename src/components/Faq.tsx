import React, { ReactNode } from "react";

interface FAQQuestion {
  question: string;
  answer: ReactNode;
}

const faqQuestions: FAQQuestion[] = [
  {
    question: "What is the AI agent and how does it assist users?",
    answer: (
      <>
        <p>
          The AI agent is an interactive digital assistant designed to
          facilitate conversations and provide guidance on spiritual matters.
          Using advanced natural language processing algorithms, the AI agent
          engages users in meaningful dialogues, offering insights, advice, and
          support tailored to their individual needs and inquiries. Whether
          you're seeking guidance on meditation techniques, spiritual practices,
          or personal growth, the AI agent is here to assist you.
        </p>
      </>
    ),
  },
  {
    question: "How does the AI agent personalize conversations with users?",
    answer: (
      <>
        <p>
          The AI agent personalizes conversations with users by analyzing their
          input, preferences, and past interactions. Through machine learning
          techniques, it adapts its responses and recommendations to align with
          each user's unique spiritual journey and interests. By incorporating
          user feedback and data, the AI agent continually improves its ability
          to provide relevant and valuable guidance, fostering deeper
          connections and understanding between users and the platform.
        </p>
      </>
    ),
  },
  {
    question: "What topics can users discuss with the AI agent?",
    answer: (
      <>
        <p>
          Users can discuss a wide range of topics with the AI agent, including
          meditation, mindfulness, spiritual beliefs, personal growth, and more.
          Whether you're seeking advice on overcoming challenges, exploring new
          spiritual practices, or deepening your understanding of spiritual
          concepts, the AI agent is equipped to engage in meaningful
          conversations and provide valuable insights and support.
        </p>
      </>
    ),
  },
  {
    question:
      "How does the AI agent ensure a supportive and empathetic interaction?",
    answer: (
      <>
        <p>
          The AI agent is programmed to emulate empathy and understanding in its
          interactions with users. Through careful design and programming, it
          employs language and tone that convey warmth, compassion, and
          supportiveness, creating a safe and welcoming environment for users to
          express themselves and seek guidance. Additionally, the AI agent is
          trained to recognize and respond sensitively to emotional cues,
          ensuring that users feel heard, validated, and supported throughout
          their conversations.
        </p>
      </>
    ),
  },
  {
    question:
      "Can users provide feedback to improve the AI agent's performance?",
    answer: (
      <>
        <p>
          Yes, users are encouraged to provide feedback to help improve the AI
          agent's performance and enhance the overall user experience. Whether
          it's suggesting new conversation topics, providing input on the
          agent's responses, or sharing preferences for future interactions,
          user feedback is valuable in guiding the development and refinement of
          the AI agent. By actively engaging with users and incorporating their
          input, we strive to continually enhance the AI agent's capabilities
          and effectiveness in supporting users on their spiritual journeys.
        </p>
      </>
    ),
  },
];

const FaqQuestion: React.FC<FAQQuestion> = ({ question, answer }) => (
  <details className="px-12 py-8 last:border-b-0">
    <summary className="cursor-pointer text-gray-500">{question}</summary>
    <div className="mt-3">
      {typeof answer === "string" ? (
        <p className="text-sm leading-6 text-gray-500">{answer}</p>
      ) : (
        <p className="text-sm leading-6 text-gray-400">{answer}</p>
      )}
    </div>
  </details>
);

export const Faq = () => (
  <>
    <div className="px-12 md:px-12 mx-auto max-w-screen-sm text-center lg:px-6">
      <div className="mx-auto mt-12">
        <p className="mb-8 lg:mb-10 text-lg md:text-4xl font-bold text-gray-600">
          FAQ
        </p>
        <p className="pb-8 text-gray-400 italic">
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
