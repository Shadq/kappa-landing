import React from "react";

const Hero = () => {
  return (
    <div className="mt-24">
      {/* Text */}
      <div className="h-64 flex text-center justify-center flex-col">
        <h1 className="text-7xl font-thick font-extrabold ">
          <span className="bg-gradient-to-t from-gray-900 via-gray-300 to-slate-50 bg-clip-text text-transparent">
            Join the{" "}
          </span>
          <span className="bg-gradient-to-b from-sky-400 via-sky-600 to-gray-700 bg-clip-text text-transparent">
            $Kappa
          </span>{" "}
          <br />
          <span className="bg-gradient-to-t from-gray-900 via-gray-300 to-slate-50 bg-clip-text text-transparent">
            revolution
          </span>
        </h1>
      </div>

      {/* Buttons */}
      <div className="md:mt-2 flex gap-10 justify-center align-middle">
        <button className="text-black border-2  bg-gray-300 font-thick font-medium p-4 rounded-full transition duration-500 hover:opacity-80 hover:scale-110">
          Join Discord
        </button>
        <button className="text-black border-2 bg-gray-300 font-thick font-medium p-4 rounded-full transition duration-500 hover:opacity-80 hover:scale-110">
          Buy $Kappa
        </button>
      </div>
    </div>
  );
};

export default Hero;
