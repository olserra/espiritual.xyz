import React from "react";

const Pricing = () => (
  <section className="bg-black py-12">
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="px-8 lg:pb-4 text-2xl md:text-4xl font-bold text-gray-300">
          Introducing agile and lean hiring
        </h2>
        <p className="p-8 lg:text-lg lg:px-52 text-gray-400">
          Unlock Tremendous Savings and Unparalleled Flexibility: Say Goodbye to
          Overhead Costs and Say Hello to Hiring Developers On-Demand, Tailored
          to Your Company's Needs. With Boostio.ai, Cost-Effective Scalability
          Has Never Been Easier.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.title} plan={plan} />
        ))}
      </div>
    </div>
  </section>
);

const PricingCard = ({ plan }: any) => (
  <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
    <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
    <p className="text-lg font-light text-gray-500 mb-8">{plan.description}</p>
    <div className="flex justify-center items-baseline mb-8">
      <span className="text-5xl font-extrabold">${plan.price}</span>
      <span className="text-gray-500 dark:text-gray-400">/month</span>
    </div>
    <ul className="mb-8 space-y-4 text-left">
      {plan.features.map((feature: any) => (
        <li key={feature} className="flex items-center space-x-3">
          <svg
            className="w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href="#"
      className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
    >
      Get started
    </a>
  </div>
);

const pricingPlans = [
  {
    title: "Starter",
    description: "Best option for personal use & for your next project.",
    price: 29,
    features: [
      "Individual configuration",
      "No setup or hidden fees",
      "Project size: 10 tasks",
      "Premium support: 6 months",
      "Free updates: 6 months",
    ],
  },
  {
    title: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: 99,
    features: [
      "Individual configuration",
      "No setup or hidden fees",
      "Project size: 50 tasks",
      "Premium support: 24 months",
      "Free updates: 24 months",
    ],
  },
  {
    title: "Enterprise",
    description:
      "Best for large-scale uses and extended redistribution rights.",
    price: 499,
    features: [
      "Individual configuration",
      "No setup or hidden fees",
      "Project size: 100+ tasks",
      "Premium support: 36 months",
      "Free updates: 36 months",
    ],
  },
];

export default Pricing;
