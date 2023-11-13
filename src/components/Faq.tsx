import React from "react";

const faqQuestions = [
  {
    question: "What is the GPT Assistant?",
    answer: (
      <>
        <p>
          The GPT Assistant is a powerful tool that harnesses the capabilities
          of GPT (Generative Pre-trained Transformer) with your own data. It
          employs Retrieval Augmented Generation (RAG) to augment your prompts
          with information from various sources like PDFs, APIs, and text files.
        </p>
        <p>Here's how it works:</p>
        <ul>
          <li>
            Step 1: Data Augmentation - You provide prompts along with external
            data sources such as PDFs and APIs.
          </li>
          <li>
            Step 2: Information Extraction - The tool analyzes the data sources
            and extracts key information for enhanced generation.
          </li>
          <li>
            Step 3: Insightful Responses - Based on your prompts and augmented
            data, the GPT Assistant generates informative and context-rich
            responses.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I benefit from the GPT Assistant?",
    answer:
      "By using the GPT Assistant, you gain the ability to analyze and extract insights from large documents and data sources, conduct market research, generate detailed reports, and enhance your decision-making process.",
  },
  {
    question: "What types of data can I analyze with the GPT Assistant?",
    answer:
      "The GPT Assistant allows you to analyze a variety of data sources, including PDFs, APIs, and text files. You can extract valuable information from these sources to gain insights into your business, competitors, and market trends.",
  },
  {
    question: "How does the market research feature work?",
    answer:
      "Our AI-driven market research feature empowers you to analyze market trends and gather insights about your competitors. By inputting relevant data, you can obtain a deeper understanding of the market landscape and make informed decisions.",
  },
  {
    question: "How can the GPT Assistant provide insights?",
    answer:
      "The GPT Assistant generates insights by processing your prompts and augmented data. It leverages the power of GPT to provide contextually relevant and valuable information, enabling you to uncover hidden patterns and make data-driven choices.",
  },
  {
    question: "Can I generate detailed reports with the GPT Assistant?",
    answer:
      "Absolutely. The GPT Assistant allows you to create precise and comprehensive reports based on the information you provide. Whether for your own business or for clients, you can generate detailed reports that highlight key findings and recommendations.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we prioritize data privacy and security. Your data and generated responses are treated with utmost confidentiality. We adhere to stringent security measures and do not share your data with third parties without your explicit consent.",
  },
  {
    question: "Can I customize the sources for data augmentation?",
    answer:
      "Certainly. You have the flexibility to choose the data sources you want to augment your prompts with. Whether it's PDFs, APIs, or text files, you can tailor the data to align with your specific analytical needs.",
  },
  {
    question: "Is assistance available while using the GPT Assistant?",
    answer:
      "Absolutely! Our platform offers a supportive community forum where you can connect with other users, seek advice, and share insights. Additionally, our experts and mentors are available to provide personalized guidance and assistance.",
  },
  {
    question: "Is there a trial period for the GPT Assistant?",
    answer:
      "Yes, we offer a trial period during which you can explore the capabilities of the GPT Assistant. This allows you to experience the benefits firsthand and determine how it can enhance your analytical processes.",
  },
  {
    question: "How do I get started with the GPT Assistant?",
    answer:
      "To begin using the GPT Assistant, simply sign up for an account on our platform. Once registered, you can start leveraging the power of GPT for data analysis, market research, insights, and report generation.",
  },
];

const renderQuestions = () => (
  <div className="flex flex-col items-start px-4 md:px-12 mx-auto max-w-screen-sm text-start lg:p-12">
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
    <div className="px-4 md:px-12 mx-auto max-w-screen-sm text-center lg:px-6">
      <div className="mx-auto mt-12">
        <p className="mb-8 text-gray-500 lg:mb-16 text-2xl md:text-4xl font-bold dark:text-gray-700">
          FAQ{" "}
        </p>
        <p className="pb-8">
          <strong>Frequently Asked Questions (FAQ)</strong> list is here answer
          some of the most common knowledge gaps. If you have any other
          questions, please contact us on otavio@boostio.ai.
        </p>
      </div>
    </div>
    <div className="md:px-12 mx-auto max-w-screen-xl">{renderQuestions()}</div>
  </>
);
export default Faq;
