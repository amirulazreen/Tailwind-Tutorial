import React from "react";

export const LastSection: React.FC = () => {
  return (
    <section className="bg-blue-400">
      <div className="container flex flex-col leading-loose items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today!
        </h2>
        <div>
          <button className="bg-red-300 p-5 rounded-full shadow-lg hover:bg-gray-500 baseline ">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};
