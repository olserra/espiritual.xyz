export const DemoSection = () => {
  const videoId = "v=-dhYfBMls_g";

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-6 lg:p-32">
      <div className="flex flex-col md:mb-12 lg:mb-0 text-center lg:max-w-xl lg:pr-12">
        <h1 className="mb-8 text-gray-500 text-2xl md:text-4xl font-bold dark:text-gray-700">
          Why adopt?
        </h1>
        <p className="mb-8 md:mb-0 text-sm lg:text-base lg:px-16 pb-12">
          Our technology simplifies legal document analysis, and instantly
          condenses lengthy legal documents in a agent, for insightful
          conversations. Boostio ensures the utmost privacy and security of your
          data. <br />
          <br />
          Obtain unfair advantage in the legal field, saving countless hours of
          reading, and supercharging your legal strategies. Welcome to the
          future of legal intelligence with Boostio.
        </p>
      </div>
      <iframe
        className="pb-24 lg:pb-0 lg:w-[600px] lg:h-[400px]"
        src="https://www.youtube.com/embed/ywxnZwbYghk"
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  );
};
