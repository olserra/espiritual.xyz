export const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center text-center py-12">
      <div className="mx-auto max-w-screen-sm py-2">
        <p className="pb-2 lg:pb-4 lg:pt-12 text-gray-700 text-2xl md:text-4xl font-bold">
          How it works
        </p>
        <p className="px-8 pb-12 text-base lg:text-lg lg:pb-14 text-gray-600">
          Step by step guide to get you started. Simple, easy, and fast.
        </p>
      </div>
      <div className="max-w-xl mx-auto w-full p-4 mb-8">
        <div className="relative text-gray-700 antialiased text-sm font-semibold">
          <div className="hidden sm:block w-1 bg-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-8 bg-white rounded-xl shadow-lg border text-lg">
                    Company creates a task on Boostio platform
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-black border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-white">
                1
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-end w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-8 bg-white rounded-xl shadow-lg border text-lg">
                    Boostio matches the task with the best candidate
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-black border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-white">
                2
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-8 bg-white rounded-xl shadow-lg border text-lg">
                    Company receives updates on the progress
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-black border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-white">
                3
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-end w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-8 bg-white rounded-xl shadow-lg border text-lg">
                    Boostio guarantees the work is done
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-black border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-white">
                4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
