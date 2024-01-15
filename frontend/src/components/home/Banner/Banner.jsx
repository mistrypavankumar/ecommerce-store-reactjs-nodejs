import React from "react";
import { CgMouse } from "react-icons/cg";
import CustomIcon from "../../Icons/CustomIcon";

const Banner = ({ jsonData }) => {
  const data = jsonData[0];

  return (
    <div className="w-[100%] h-screen flex justify-center items-center bg-primaryGreen customBanner">
      <div className="flex justify-center flex-col items-center px-8 md:px-0">
        <h1 className="text-2xl font-bold text-lightGray text-center">
          Welcome to{" "}
          <span className="text-primaryGreen">{data.companyName}</span>
        </h1>

        <p className="text-4xl md:text-5xl uppercase mt-10 text-white text-center leading-relaxed">
          Find{" "}
          <span className="text-yellow-400 border-b-4 border-dotted border-yellow-400">
            Amazing
          </span>{" "}
          Products Below
        </p>

        {/* scroll button */}
        <a
          href="#ourproduct"
          className="transition-all duration-500 animate-bounce mt-24 group"
        >
          <button className="relative py-3 px-7 bg-primaryDarkGreen overflow-hidden rounded-lg border-2 border-primaryDarkGreen group-hover:text-primaryDarkGreen text-white transition-all duration-500 flex justify-center items-center gap-3">
            <div className="absolute w-full h-full top-0 bg-yellow-400 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
            <span className="group-hover:text-primaryDarkGreen z-10">
              Scroll to shop
            </span>
            <CustomIcon Icon={CgMouse} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
