import React from "react";
import Image from "next/image";
import { FaSearch, FaPlusCircle, FaHome } from "react-icons/fa";
const SideNav = () => {
  return (
    <div className="flex flex-col w-5/12 h-[95vh] border-green-400 border-r-2 fixed w-[7vw]">
      <div className="basis-3/5">
        <div className="p-3 bg-green-400 w-7/12 rounded-full text-center mt-5 cursor-pointer">
          <h3 className="text-xl font-bold">S</h3>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-7/12 text-center cursor-pointer">
          <FaSearch className="text-2xl text-green-400" />
          <p>Search</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-7/12 text-center cursor-pointer ">
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
      <div className="basis-2/5">
        <div className="flex flex-col justify-center items-center mt-9 w-7/12 text-center cursor-pointer">
          <FaPlusCircle className="text-2xl text-green-400" />
          <p>Create</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 w-7/12 text-center cursor-pointer">
          <FaHome className="text-2xl text-green-400" />
          <p>Home</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
<div>
  <h3>S</h3>
</div>;
