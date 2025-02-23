import React from "react";

export const SecondSection: React.FC = () => {
  return (
    <section>
      <div className="container flex flex-col mx-auto px-4 mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's difference about manage?
          </h2>
          <p className="max-w-md text-center text-red-400 md:text-left">
            Manage provides all functionality your teams needs, without the
            complexity. Our producst is tailor made for the modern digital
            products teams.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-red-400 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-blue-400 rounded-full md:py-1 bg-black">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p className="text-red-500">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-red-400 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-blue-400 rounded-full md:py-1 bg-black">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advance Reporting
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Advance Reporting
              </h3>
              <p className="text-red-500">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-red-400 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-blue-400 rounded-full md:py-1 bg-black">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p className="text-red-500">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
