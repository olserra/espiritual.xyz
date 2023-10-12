import React from "react";
import WaitlistInput from "./WaitlistInput";

const Waitlist = () => {
  return (
    <div
      id="waitlist"
      className="flex flex-col items-center justify-center px-5 py-20 border-t-2 border-gray-100 bg-gray-100"
    >
      <div className="px-4 md:px-12 md:pt-20 mx-auto max-w-screen-sm text-center lg:px-6">
        <div className="mx-auto">
          <p className="mb-8 text-gray-700 lg:mb-16 text-2xl md:text-4xl font-bold ">
            Join the waitlist{" "}
          </p>
          <p className="lg:text-lg text-gray-600 pb-20">
            <strong>Join the waitlist</strong> and be the first to know when
            we're ready to launch. We'll also send you the latest updates on our
            progress.
          </p>
        </div>
      </div>
      <WaitlistInput />
    </div>
  );
};

export default Waitlist;
