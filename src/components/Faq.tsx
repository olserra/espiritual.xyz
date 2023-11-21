import React from "react";

const faqQuestions = [
  {
    question: "What is Boostio.ai?",
    answer: (
      <>
        <p>
          Boostio.ai is a cutting-edge platform that empowers lawyers with the
          capabilities of AI (Artificial Intelligence). Our solution
          revolutionizes legal practice by enhancing efficiency through
          AI-powered tools.
        </p>
        <p>Here's how it works:</p>
        <ul>
          <li>
            <strong>Step 1: Document Upload -</strong> Users upload their legal
            documents in PDF format to the Boostio platform. The documents are
            securely stored in our cloud in a vectorized format for easy access
            and analysis by our AI agent.
          </li>
          <li>
            <strong>Step 2: AI Learning -</strong> Our AI agent learns from the
            uploaded documents, extracting key information and insights using
            Retrieval Augmented Generation (RAG) technology.
          </li>
          <li>
            <strong>Step 3: Intelligent Chat Agent -</strong> Activate your
            AI-powered legal assistant with the extracted insights. Save time
            and ensure comprehensive understanding without missing critical
            details.
          </li>
          <li>
            <strong>Step 4: Legal Insights -</strong> Gain an unfair advantage
            by leveraging our powerful technology. Save time, streamline
            strategies, and access insights that competitors might overlook.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I benefit from Boostio.ai?",
    answer:
      "Boostio.ai allows you to analyze and extract insights from legal documents, saving time, streamlining strategies, and gaining a competitive edge. It is designed for forward-thinking legal professionals seeking AI-powered efficiency.",
  },
  {
    question: "What types of data can I analyze with Boostio.ai?",
    answer:
      "Boostio.ai enables analysis of legal documents in PDF format. Users can extract valuable information and insights to enhance their understanding of legal cases, precedents, and industry trends.",
  },
  {
    question: "How does the AI-powered assistant work?",
    answer:
      "Our AI-powered assistant processes legal documents, extracting key information and insights using Retrieval Augmented Generation (RAG). The assistant provides contextually relevant and valuable information, empowering users to make informed decisions.",
  },
  {
    question: "Can I generate detailed reports with Boostio.ai?",
    answer:
      "Certainly. Boostio.ai allows users to create precise and comprehensive reports based on the information extracted from legal documents. Whether for personal use or client presentations, detailed reports can be generated to highlight key findings and recommendations.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we prioritize data privacy and security at Boostio.ai. Each user has a separate, exclusive, secured, redundant, and private database. Your data and generated responses are treated with utmost confidentiality. We adhere to stringent security measures and do not share your data with third parties without your explicit consent.",
  },
  {
    question: "How is my data protected when using the OpenAI API?",
    answer: (
      <>
        <p>
          At Boostio.ai, we take data privacy and security seriously. When you
          use the OpenAI API, your data is treated with the utmost care and
          protection.
        </p>
        <p>
          <strong>Data Encryption:</strong> We employ encryption techniques to
          secure sensitive information, ensuring that your data remains
          confidential during transmission.
        </p>
        <p>
          <strong>Secure Transmission:</strong> All data sent to and from the
          OpenAI API is transmitted securely over HTTPS (SSL/TLS), safeguarding
          it against unauthorized access.
        </p>
        <p>
          <strong>Key Management:</strong> Our platform follows secure key
          management practices to handle encryption keys, adding an extra layer
          of protection to your data.
        </p>
        <p>
          <strong>Compliance:</strong> Our encryption practices align with
          relevant regulations and data protection standards to ensure the
          highest level of compliance.
        </p>
        <p>
          If you have specific concerns or questions about data protection, feel
          free to reach out to our support team. Your trust and the security of
          your data are our top priorities.
        </p>
      </>
    ),
  },
  {
    question: "Can I customize the sources for data analysis?",
    answer:
      "Certainly. Boostio.ai provides flexibility in choosing data sources for analysis. Whether it's legal documents in PDF format or other relevant sources, you can tailor the data to align with your specific analytical needs.",
  },
  {
    question: "Is assistance available while using the system?",
    answer:
      "Absolutely! Our platform offers a supportive community forum where you can connect with other users, seek advice, and share insights. Additionally, our experts and mentors are available to provide personalized guidance and assistance.",
  },
  {
    question: "Is there a trial period?",
    answer:
      "Yes, we offer a trial period during which you can explore the capabilities of Boostio.ai. This allows you to experience the benefits firsthand and determine how it can enhance your analytical processes.",
  },
  {
    question: "How do I get started?",
    answer:
      "To begin using Boostio.ai, simply sign up for an account on our platform. Once registered, you can start leveraging the power of AI for efficient data analysis, gaining insights from legal documents, and generating reports.",
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
