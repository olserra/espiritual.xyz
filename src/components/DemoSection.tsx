import svgs from "../helpers/svgs";

export const DemoSection = () => {
  const videoId = "v=-dhYfBMls_g";

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-6 lg:p-32">
      <div className="flex flex-col md:mb-12 lg:mb-0 text-center lg:max-w-xl lg:pr-12">
        <h1 className="mb-8 text-gray-400 text-2xl md:text-4xl font-bold dark:text-gray-700">
          Why adopt?
        </h1>
        <p className="mb-8 md:mb-0 text-sm lg:text-base lg:px-16 pb-12">
          <div className="flex flex-col">
            <div className="flex flex-row pb-4">
              <span className="pr-2 pt-[1.7px]">{svgs.checkIcon}</span>
              <span className="text-start text-gray-600 text-sm lg:text-base">
                <b>Personalized learning</b> Our AI with craft a personalized
                learning path for you to understand the gap between your current
                profile and your future profile.
              </span>
            </div>
            <div className="flex flex-row pb-4">
              <span className="pr-2 pt-[1.7px]">{svgs.checkIcon}</span>
              <span className="text-start text-gray-600 text-sm lg:text-base">
                <b>Customized content</b> - Using Generative AI technology, we
                will generate content that is customized to your needs.
              </span>
            </div>
            <div className="flex flex-row pb-4">
              <span className="pr-2 pt-[1.7px]">{svgs.checkIcon}</span>
              <span className="text-start text-gray-600 text-sm lg:text-base">
                <b>Clear progress visualization</b> - Our dashboard will help
                you to track your progress and analyze your performance with
                data visualization.
              </span>
            </div>
          </div>
        </p>
      </div>
      <iframe
        className="pb-24 lg:pb-0 lg:w-[600px] lg:h-[400px]"
        src="https://www.youtube.com/embed/L7af_9906GQ"
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  );
};
