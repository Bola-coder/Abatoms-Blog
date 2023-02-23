import React from "react";
import { FaSearch, FaPlusCircle, FaHome } from "react-icons/fa";
const SideNav = () => {
  return (
    <div
      className="flex flex-col h-[95vh] border-green-400 border-r-2 fixed w-[7vw
    ] md:flex-row md:h-[12vh] md:w-[90vw] md:m-auto md:bottom-0 md:left-[5vw] md:border-2 md:z-50 md:bg-slate-900 "
    >
      <div className="basis-3/5 md:basis-4/5 md:flex">
        <div className="p-3 bg-green-400 w-10/12 rounded-full text-center mt-5 cursor-pointer md:w-12 md:h-12  md:mt-2 md:ml-4">
          <h3 className="text-xl font-bold">S</h3>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-7/12 text-center cursor-pointer md:mt-0">
          <FaSearch className="text-2xl text-green-400" />
          <p>Search</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-7/12 text-center cursor-pointer md:mt-0 ">
          {/* <FaArrow className="text-2xl text-green-400" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
          <p>Trending</p>
        </div>
      </div>
      <div className="basis-2/5 md:basis-1/5 md:flex md:flex-row ">
        {/* <div className="flex flex-col justify-center items-center mt-9 w-7/12 text-center cursor-pointer md:mt-0 ">
          <FaPlusCircle className="text-2xl text-green-400" />
          <p>Create</p>
        </div> */}
        <div className="flex flex-col justify-center items-center mt-9 w-7/12 text-center cursor-pointer md:mt-0">
          <FaHome className="text-2xl text-green-400" />
          <p>Home</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
