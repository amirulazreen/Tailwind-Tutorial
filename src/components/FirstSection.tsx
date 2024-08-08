import React from "react";
import logoz from "../assets/illustration-intro.svg";

export const FirstSection: React.FC = () => {
  return (
    <section>
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0  md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better product
          </h1>
          <p className="max-w-sm text-center text-red-400 md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="p-3 px-6 pt-3 text-BrightRed bg-red-600 rounded-full baseline hover:text-red-200"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <img className="pt-2" src={logoz} />
        </div>
      </div>
    </section>
  );
};
