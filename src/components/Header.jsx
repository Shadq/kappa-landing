import React from "react";

const Header = () => {
  return (
    <div className="h-20 flex items-center border-b-2 border-zinc-700 bg-black bottom-0 text-white pl-14 pr-14">
      <nav className="flex items-center justify-between w-screen">
        <h1 className="font-thick text-sky-500 text-2xl font-bold">$Kappa</h1>
        <ul className="hidden md:flex items-center gap-7 text-gray-300 font-thick">
          <li className="hover:cursor-pointer hover:text-gray-600 transition duration-500 hover:scale-105">
            What's $Kappa
          </li>
          <li className="hover:cursor-pointer hover:text-gray-600 transition duration-500 hover:scale-105">
            Charts
          </li>
          <li className="hover:cursor-pointer hover:text-gray-600 transition duration-500 hover:scale-105">
            Team
          </li>
          <li className="hover:cursor-pointer hover:text-gray-600 transition duration-500 hover:scale-105">
            FAQ
          </li>
        </ul>
        <button className="text-black border-2 bg-gray-300 font-thick font-medium p-2 rounded-full transition duration-500 hover:opacity-80 hover:scale-110 text-md">
          Buy $Kappa
        </button>
      </nav>
    </div>
  );
};

export default Header;
