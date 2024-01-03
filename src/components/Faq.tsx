import React from "react";

const faqQuestions = [
  {
    question: "What is Boostio.ai?",
    answer: (
      <>
        <p>
          Boostio.ai is an innovative AI-enhancement platform designed to
          supercharge human capabilities in various domains like education,
          career strategy, personal assistance, and health and wellness. Our
          solution seamlessly integrates with various platforms, offering
          tailored and actionable insights to elevate your personal and
          professional life.
        </p>
        <p>Here's how it works:</p>
        <ul>
          <li>
            <strong>Education and Recruitment -</strong> Connects with
            educational platforms and job boards to provide personalized career
            guidance and improve job market competitiveness.
          </li>
          <li>
            <strong>Strategy -</strong> Offers strategic insights tailored to
            individual and corporate needs, helping you excel in your industry.
          </li>
          <li>
            <strong>Personal Assistants -</strong> Integrates with assistants
            like Siri, Alexa, and Google Assistant, enhancing your experience
            with AI-based personal assistance.
          </li>
          <li>
            <strong>Health and Wellness -</strong> Collaborates with health apps
            to offer customized advice for a healthier lifestyle, based on your
            personal health data.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I benefit from Boostio.ai?",
    answer:
      "Boostio.ai empowers you to maximize your potential through AI-driven personalized insights. Whether it's advancing your career, optimizing your learning path, enhancing personal productivity, or improving health and wellness, our platform provides the tools you need to thrive in an AI-enhanced world.",
  },
  {
    question: "What types of platforms can I integrate with Boostio.ai?",
    answer:
      "Boostio.ai is designed to integrate with a wide range of platforms, including educational resources, job boards, AI personal assistants, and health and wellness apps. This enables a comprehensive approach to personal and professional development.",
  },
  {
    question: "How does Boostio.ai tailor its advice and recommendations?",
    answer:
      "Our platform uses advanced AI algorithms to analyze your data across various platforms. It then provides personalized advice and recommendations based on your unique goals, preferences, and data patterns.",
  },
  {
    question: "Can I track my progress and development with Boostio.ai?",
    answer:
      "Yes, Boostio.ai offers features to track your progress in different areas such as learning, career development, personal productivity, and health. This allows you to see how you've improved over time and where to focus your efforts.",
  },
  {
    question: "Is my data secure with Boostio.ai?",
    answer:
      "Absolutely. At Boostio.ai, we prioritize your privacy and data security. Your information is encrypted and stored securely, with strict protocols to ensure your data is protected and confidential.",
  },
  {
    question: "How do I ensure my data is used appropriately?",
    answer: (
      <>
        <p>
          We adhere to strict data usage policies at Boostio.ai. You have
          complete control over your data, and we use it only to provide you
          with personalized recommendations. Our platform complies with all
          relevant data protection regulations, ensuring your data is used
          ethically and responsibly.
        </p>
      </>
    ),
  },
  {
    question: "Can I customize my experience on Boostio.ai?",
    answer:
      "Yes, Boostio.ai is designed for customization. You can set your preferences, goals, and interests to ensure the advice and insights you receive are aligned with your personal and professional aspirations.",
  },
  {
    question: "Is there support available for using the system?",
    answer:
      "Of course! We provide comprehensive support for all our users. Our help center, community forums, and customer support team are available to assist you in maximizing your use of Boostio.ai.",
  },
  {
    question: "Is there a trial period for Boostio.ai?",
    answer:
      "Yes, Boostio.ai offers a trial period so you can explore its full range of features and see firsthand how it can enhance your capabilities and productivity.",
  },
  {
    question: "How do I get started with Boostio.ai?",
    answer:
      "Getting started with Boostio.ai is simple. Sign up on our platform, set your personal and professional goals, and begin your journey to becoming a supercharged version of yourself with our AI-enhanced insights.",
  },
];

const renderQuestions = () => (
  <div className="flex flex-col items-start px-4 md:px-12 mx-auto max-w-screen-sm text-start lg:p-12">
    {faqQuestions.map((faqQuestion, index) => (
      <details className="p-4 border-b last:border-b-0 text-gray-300">
        <summary key={index} className="font-semibold cursor-pointer">
          {faqQuestion.question}
        </summary>
        <div className="mt-3">
          <p className="text-sm leading-6 text-gray-400">
            {faqQuestion.answer}
          </p>
        </div>
      </details>
    ))}
  </div>
);

const Faq = () => (
  <>
    <div className="px-4 md:px-12 mx-auto max-w-screen-sm text-center lg:px-6">
      <div className="mx-auto mt-12">
        <p className="mb-8 lg:mb-16 text-2xl md:text-4xl font-bold text-gray-300">
          FAQ{" "}
        </p>
        <p className="pb-8 text-gray-300">
          <strong>Frequently Asked Questions (FAQ)</strong> list is here answer
          some of the most common knowledge gaps. If you have any other
          questions, please contact us.
        </p>
      </div>
    </div>
    <div className="py-16 md:px-12 mx-auto max-w-screen-xl">
      {renderQuestions()}
    </div>
  </>
);
export default Faq;
