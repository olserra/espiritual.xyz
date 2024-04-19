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
          Our platform leverages advanced AI and data analysis to personalize
          content for your specific needs and preferences. By analyzing data
          from your digital profile, we tailor content to enhance engagement and
          drive conversions. Whether you're creating a post on LinkedIn or a
          video to advocate for your brand, we've got you covered. We analyze
          your content and provide insights to help you make data-driven
          decisions.
        </p>
      </>
    ),
  },
  {
    question: "What a sentiment analysis is capable of?",
    answer: (
      <>
        <p>
          Sentiment analysis enables you to understand the emotions and opinions
          expressed in text data. By leveraging this technology, you can gain
          valuable insights into customer feedback, social media sentiment, and
          other unstructured data sources. Either conversations in WhatsApp,
          Teams, Slack, Emails or even with ChatGPT, sentiment analysis can help
          you understand the tone and mood of the conversation.
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
          We ensure trust and authenticity by providing customizable access
          levels to your digital profile. This allows you to control who
          accesses your data, fostering transparency and maintaining data
          sovereignty. By implementing security measures such as encryption and
          multi-factor authentication, we protect your data and ensure a secure
          personalized web experience.
        </p>
      </>
    ),
  },
  {
    question: "How does our platform support developer relations?",
    answer: (
      <>
        <p>
          Our platform empowers brands to create compelling content that
          resonates with their audience. By personalizing content based on your
          digital profile, we drive engagement and strengthen connections with
          your audience.
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
          Our platform streamlines documentation creation and delivery for
          employees or clients. By leveraging your digital profile, we enhance
          engagement and communication to drive efficiency and conversions. We
          provide insights to help you make data-driven decisions and improve
          your content strategies. Whether you're creating documentations for
          your employees or external clients, we've got you covered. Notion and
          Confluence are great tools to start with. We automate the process of
          creating and delivering personalized documentation to enhance your
          user experience and guarantee the quality of your content.
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
          digital profile. Access curated content and educational resources
          aligned with your interests and goals, fostering continuous growth and
          development. By leveraging data from your digital profile, we provide
          insights to help you make data-driven decisions and enhance your
          skills and knowledge. Whether you're training your workforce or
          enhancing your own skills, we've got you covered. We provide
          personalized learning journeys tailored to your needs and objectives,
          ensuring continuous growth and development. By leveraging data from
          your digital profile, we provide insights to help you make data-driven
          decisions and enhance your skills and knowledge.
        </p>
      </>
    ),
  },
  {
    question: "How does collaborative content creation work on our platform?",
    answer: (
      <>
        <p>
          Collaborate with the community to curate and share content aligned
          with your digital profile. By working together, you can foster
          innovation and ensure quality within the personalized web experience.
          We provide insights to help you make data-driven decisions and improve
          your content strategies. Whether you're collaborating with the
          community or your team, we've got you covered. We streamline the
          process of collaborative content creation to enhance engagement and
          drive growth.
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
