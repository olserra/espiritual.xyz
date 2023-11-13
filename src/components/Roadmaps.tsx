import React, { useContext } from "react";
import { Context } from "@/context/context";

type StepProps = {
  title: string;
  description: string;
  href?: string;
};

const Roadmaps = () => {
  const [_state, _setState] = useContext<any>(Context);

  const Roadmap = ({ title, description, href }: StepProps) => (
    <a
      href={href}
      className="relative w-full p-4 border-gray-300 border rounded-lg mb-4 md:p-4 md:mb-0 lg:h-40"
      target="_blank"
      download
    >
      <div className="flex flex-row justify-between">
        <p
          className={`text-base md:text-base lg:text-lg lg:font-bold text-gray-700 pb-4 pl-4 font-bold`}
        >
          {title}
        </p>
      </div>
      <p
        className={`leading-loose text-gray-500 text-start text-sm md:text-base px-4 pb-4`}
      >
        {description}
      </p>
    </a>
  );

  return (
    <>
      <div className="pb-24 lg:pt-8 lg:pb-40 px-4 md:px-12 mx-auto max-w-screen-xl text-center lg:px-6">
        <div className="mx-auto max-w-screen-sm mt-12">
          <p className="py-12 lg:py-0 text-gray-500 lg:mb-8 text-2xl md:text-4xl font-bold dark:text-gray-700">
            Roadmaps
          </p>
          <p className="pb-12 text-base lg:text-lg lg:pb-14 text-gray-500">
            Explore the best roadmaps for your team. Our AI will curate the best
            ones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:px-32">
          <Roadmap
            title="Frontend Developer"
            description="Master the skills required to become a Frontend Developer. Learn HTML, CSS, JavaScript, React, and more."
            href="https://drive.google.com/file/d/1-3nTkGMyQZK06HmmON62qRnZKsOuvee2/view?usp=drive_link"
          />
          <Roadmap
            title="Backend Developer"
            description="Learn Python, NodeJS, SQL, and more. Master the skills required to become a Backend Developer."
            href="https://drive.google.com/file/d/1-2U2W6ndWTu8VS0HxltJwqtTPMDMRvIw/view?usp=sharing"
          />
          <Roadmap
            title="Data Scientist"
            description="Learn Python, SQL, Machine Learning, and more. Master the skills required to become a Data Scientist."
            href="https://drive.google.com/file/d/1-D18fyMCDcSpf9clI8MO2fHfwIj0suHF/view?usp=drive_link"
          />
          <Roadmap
            title="QA Engineer"
            description="Testing is an essential part of the software development process. Learn how to test your software and deliver high-quality products."
            href="https://drive.google.com/file/d/10om4pT5gRHXGPmRsz0im-OHnjkRzUTdb/view?usp=drive_link"
          />
          <Roadmap
            title="DevOps Engineer"
            description="Infrastructure as Code, Continuous Integration & Deployment, and more. Master the skills required to become a DevOps Engineer."
            href="https://drive.google.com/file/d/1-4VqrnHGzT-fZqRwXkaZKIIxyyHD-lN3/view?usp=drive_link"
          />
          <Roadmap
            title="iOS Developer"
            description="Swift UI, UIKit, and more. Master the skills required to become an iOS Developer."
            href="https://drive.google.com/file/d/1-LmFGs_l85w9Av7-57UGPgq31oNpLNvJ/view?usp=drive_link"
          />
          <Roadmap
            title="Android Developer"
            description="Kotlin and more. Master the skills required to become an Android Developer."
            href="https://drive.google.com/file/d/1-GkIO7C2N6fYv8NkDoQoefRMHDCwOfzM/view?usp=drive_link"
          />
        </div>
      </div>
    </>
  );
};

export default Roadmaps;
