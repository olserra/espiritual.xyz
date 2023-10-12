import React from "react";

const faqQuestions = [
  {
    question: "What is BoostioAI?",
    answer:
      "BoostioAI is a revolutionary mobile app available on Android and iOS that specializes in connecting developers, data scientists, and related professionals with job opportunities. We're dedicated to finding the perfect fit for both candidates and companies, whether it's full-time, part-time, remote, hybrid, or freelancing work.",
  },
  {
    question: "How does BoostioAI match professionals to jobs?",
    answer:
      "BoostioAI leverages advanced algorithms to match professionals with the right jobs. We consider both hard skills and soft skills, ensuring a comprehensive fit for both the job requirements and the company culture. Our goal is to make the perfect match and optimize your career journey.",
  },
  {
    question: "What types of jobs does BoostioAI offer?",
    answer:
      "BoostioAI offers a diverse range of job opportunities, including full-time positions, part-time roles, remote work, hybrid arrangements, and freelancing opportunities. We believe in providing flexibility to professionals and companies to optimize their budgets and time.",
  },
  {
    question:
      "Can BoostioAI help companies find professionals for specific tasks or projects?",
    answer:
      "Absolutely. BoostioAI aims to bring more jobs by demand, including features and small tasks. This means companies can find professionals for specific projects and tasks, allowing them to efficiently allocate resources and optimize their budgets.",
  },
  {
    question: "Is BoostioAI available for both Android and iOS?",
    answer:
      "Yes, BoostioAI is available on both Android and iOS platforms, making it accessible to a wide range of professionals and companies seeking their ideal matches.",
  },
  {
    question: "How can I get started with BoostioAI?",
    answer:
      "Getting started with BoostioAI is easy. Simply download our app from the Google Play Store or Apple App Store, sign up, and start your journey toward finding the perfect job or the ideal candidate. BoostioAI is here to help you optimize your career or recruitment process.",
  },
  {
    question: "Is my data secure with BoostioAI?",
    answer:
      "We take data security and privacy seriously. Your personal information and preferences are treated with the utmost confidentiality. BoostioAI employs stringent security measures to safeguard your data and ensure a secure job matching environment.",
  },
  {
    question: "Is there a trial period or free features available?",
    answer:
      "Yes, BoostioAI offers trial options so you can experience our platform's capabilities firsthand. You can explore our features and see how BoostioAI can optimize your job search or hiring process.",
  },
];

const renderQuestions = () => (
  <div className="flex flex-col items-start px-4 py-12 md:px-12 mx-auto max-w-screen-sm text-start lg:p-12">
    {faqQuestions.map((faqQuestion, index) => (
      <details className="p-4 border-b last:border-b-0">
        <summary key={index} className="font-semibold cursor-pointer">
          {faqQuestion.question}
        </summary>
        <div className="mt-3">
          <p className="text-sm leading-6 text-gray-600">
            {faqQuestion.answer}
          </p>
        </div>
      </details>
    ))}
  </div>
);

const Faq = () => (
  <>
    <div className="px-4 md:px-12 md:pt-20 mx-auto max-w-screen-sm text-center lg:px-6">
      <div className="mx-auto mt-12">
        <p className="mb-8 text-gray-700 lg:mb-16 text-2xl md:text-4xl font-bold">
          FAQ{" "}
        </p>
        <p className="md:pb-20 lg:text-lg">
          <strong>Frequently Asked Questions (FAQ)</strong> list is here answer
          some of the most common knowledge gaps.
        </p>
      </div>
    </div>
    <div className="md:px-12 md:pb-20 mx-auto max-w-screen-xl">
      {renderQuestions()}
    </div>
  </>
);
export default Faq;
