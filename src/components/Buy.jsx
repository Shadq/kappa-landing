import React from "react";
import uniswap from "../assets/uniswap.png";
import sushiswap from "../assets/sushiswap.png";
import oneinch from "../assets/oneinch.png";

const Buy = () => {
  return (
    <div>
      <div className="flex text-center justify-center mt-44 align-middle">
        <h1 className="text-5xl font-thick font-bold">
          <span className="text-white">Buy </span>
          <span className="bg-gradient-to-b from-sky-400 via-sky-600 to-gray-700 bg-clip-text text-transparent">
            $Kappa
          </span>
        </h1>
      </div>
      <div className=" flex flex-col items-center gap-14 md:flex md:flex-row justify-center text-white md:pl-14 md:pr-14  mt-20">
        <div className="flex flex-col text-center justify-center w-64 h-56 rounded-xl border-2 border-zinc-700 bg-newgray cursor-pointer transition duration-500 hover:scale-105">
          <img
            src={uniswap}
            alt="uniswap-logo"
            className="h-36 object-contain"
          />
          <h2 className="font-thick text-2xl">Uniswap</h2>
        </div>
        <div className="flex flex-col text-center justify-center w-64 h-56 rounded-xl border-2 border-zinc-700 bg-newgray cursor-pointer transition duration-500 hover:scale-105">
          <img
            src={sushiswap}
            alt="sushiswap-logo"
            className="h-36 object-contain"
          />
          <h2 className="font-thick text-2xl">Sushiswap</h2>
        </div>
        <div className="flex flex-col text-center justify-center w-64 h-56 rounded-xl border-2 border-zinc-700 bg-newgray cursor-pointer transition duration-500 hover:scale-105">
          <img
            src={oneinch}
            alt="oneinch-logo"
            className="h-36 object-contain"
          />
          <h2 className="font-thick text-2xl">1INCH</h2>
        </div>
      </div>
    </div>
  );
};

export default Buy;
