import React from "react";
import logo from "../assets/react.svg";

export const ThirdSection: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto mt-32 text-center max-w-6xl ">
        <div>
          <h1 className="text-4xl font-bold uppercase">
            What's difference about Manage?
          </h1>
        </div>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center p-6 space-y-6  rounded-lg bg-slate-400 md:w-1/3">
            <img src={logo} className="w-16 -mt-14" />
            <h1 className="font-bold">Anisha Li</h1>
            <p className="text-sm text-red-300">
              {" "}
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className="hidden  flex-col items-center p-6 space-y-6  rounded-lg bg-slate-400 md:flex md:w-1/3">
            <img src={logo} className="w-16 -mt-14" />
            <h1 className="font-bold">React</h1>
            <p className="text-sm text-red-300">
              {" "}
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className="hidden  flex-col items-center p-6 space-y-6  rounded-lg bg-slate-400 md:flex md:w-1/3">
            <img src={logo} className="w-16 -mt-14" />
            <h1 className="font-bold">React</h1>
            <p className="text-sm text-red-300">
              {" "}
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        <div>
          <button className="rounded-xl m-20 bg-red-400 hover:bg-red-100 p-4">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};
