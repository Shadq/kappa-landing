import React from "react";

const Footer = () => {
  return (
    <div className="h-40 border-t-2 border-zinc-700 mt-28 flex justify-center items-center">
      <h2 className="text-white font-thick text-2xl ">
        © 2023{" "}
        <span className="bg-gradient-to-b from-sky-400 via-sky-600 to-gray-700 bg-clip-text text-transparent">
          $Kappa
        </span>
        , All rights reserved
      </h2>
    </div>
  );
};

export default Footer;
