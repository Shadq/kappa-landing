import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { BsTrophyFill } from "react-icons/bs";

const Info = () => {
  return (
    <div className="mt-56">
      <div className="flex justify-center text-center">
        <h1 className="font-thick font-bold text-white text-5xl">
          <span className="bg-gradient-to-b from-sky-400 via-sky-600 to-gray-700 bg-clip-text text-transparent">
            $Kappa{" "}
          </span>
          is...
        </h1>
      </div>

      {/* Boxes Container */}
      <div className="flex justify-center align-middle">
        <div className="grid-cols-1 lg:grid-cols-2 text-white mt-16 grid gap-11 font-thick">
          <div className="h-128 w-128 rounded-xl border-2 border-zinc-700 bg-newgray cursor-pointer transition duration-500 hover:scale-105">
            {/* Title */}
            <div className="flex justify-center mt-8 ">
              <div className="p-3 rounded-xl bg-zinc-800">
                <FaLightbulb className="text-5xl" />
              </div>
            </div>
            <div className="mt-11 flex flex-col text-center p-3">
              <h2 className="text-cyan-500 font-bold text-2xl">Innovative</h2>
              <span className="text-zinc-700 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                natus nobis, aut sed vel deserunt voluptate, iusto tempore magni
              </span>
            </div>
          </div>

          <div className="h-128 w-128 rounded-xl border-2 border-zinc-700 bg-newgray cursor-pointer transition duration-500 hover:scale-105">
            {/* Title */}
            <div className="flex justify-center mt-8 ">
              <div className="p-3 rounded-xl bg-zinc-800">
                <BsFillShieldLockFill className="text-5xl" />
              </div>
            </div>
            <div className="mt-11 flex flex-col text-center p-3">
              <h2 className="text-green-600 font-bold text-2xl">Secure</h2>
              <span className="text-zinc-700 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                natus nobis, aut sed vel deserunt voluptate, iusto tempore magni
              </span>
            </div>
          </div>

          <div className="h-128 w-128 rounded-xl border-2 border-zinc-700 bg-newgray cursor-pointer transition duration-500 hover:scale-105">
            {/* Title */}
            <div className="flex justify-center mt-8 ">
              <div className="p-3 rounded-xl bg-zinc-800">
                <FiTrendingUp className="text-5xl" />
              </div>
            </div>
            <div className="mt-11 flex flex-col text-center p-3">
              <h2 className="text-orange-500 font-bold text-2xl">Growing</h2>
              <span className="text-zinc-700 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                natus nobis, aut sed vel deserunt voluptate, iusto tempore magni
              </span>
            </div>
          </div>

          <div className="h-128 w-128 rounded-xl border-2 border-zinc-700 bg-newgray cursor-pointer transition duration-500 hover:scale-105">
            {/* Title */}
            <div className="flex justify-center mt-8 ">
              <div className="p-3 rounded-xl bg-zinc-800">
                <BsTrophyFill className="text-5xl" />
              </div>
            </div>
            <div className="mt-11 flex flex-col text-center p-3">
              <h2 className="text-yellow-400 font-bold text-2xl">The Best</h2>
              <span className="text-zinc-700 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                natus nobis, aut sed vel deserunt voluptate, iusto tempore magni
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
