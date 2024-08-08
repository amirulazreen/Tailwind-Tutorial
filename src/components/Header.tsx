import React from "react";
import logo from "../assets/react.svg";

export const Header: React.FC = () => {
  return (
    <nav className="relative container mx-auto   p-6">
      <div className="flex items-center  justify-between">
        <img className="pt-2" src={logo} />

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-red-200">
            Pricing
          </a>
          <a href="#" className="hover:text-red-200">
            Product
          </a>
          <a href="#" className="hover:text-red-200">
            About Us
          </a>
          <a href="#" className="hover:text-red-200">
            Careers
          </a>
          <a href="#" className="hover:text-red-200">
            Contact
          </a>
        </div>
        <a
          href=""
          className="hidden md:block p-3 px-6 pt-3 text-BrightRed bg-red-600 rounded-full baseline hover:text-red-200"
        >
          Get started
        </a>
      </div>
    </nav>
  );
};
