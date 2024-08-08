import React from "react";
import logo from "../assets/react.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-500">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0 ">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <div className="flex justify-around space-x-32">
            <div className="h-8">
              <img src={logo} />
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-red-400">
                Home
              </a>
              <a href="#" className="hover:text-red-400">
                Pricing
              </a>
              <a href="#" className="hover:text-red-400">
                Products
              </a>
              <a href="#" className="hover:text-red-400">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-red-400">
                Careers
              </a>
              <a href="#" className="hover:text-red-400">
                Community
              </a>
              <a href="#" className="hover:text-red-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-400">
                Privacy Policy
              </a>
            </div>
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />

                <button className="px-6 py-2 text-white rounded-full bg-red-400 hover:bg-red-500 focus:outline-none">
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden text-white md:text-center  md:block">
        Copyright &copy; 2022, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
