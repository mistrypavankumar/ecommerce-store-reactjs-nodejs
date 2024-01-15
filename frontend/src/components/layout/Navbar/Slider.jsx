import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import CustomIcon from "./../../Icons/CustomIcon";

const isActiveStyle = "font-semibold opacity-100 transition-all duration-500";
const isNotActiveStyle = "font-semibold opacity-50 transition-all duration-500";

const Slider = ({ menuOptions, setCloseToggle, closeToggle }) => {
  const handleCloseToggle = () => {
    if (closeToggle) setCloseToggle(false);
  };

  return (
    <>
      {closeToggle ? (
        <div
          onClick={handleCloseToggle}
          className="md:hidden absolute z-50 w-screen h-screen bg-black/50"
        />
      ) : null}
      <div
        className={`md:hidden w-[80%] md:w-1/2 h-screen absolute top-0 left-0 bottom-0 z-[999] transition-all duration-500 ${
          closeToggle
            ? "animate-slide-in block opacity-100"
            : "-left-[100%] -translate-x-96 opacity-0"
        }`}
      >
        <div className="flex flex-col relative z-20 justify-center items-center bg-white w-full h-screen">
          <div className="absolute top-3 right-3 text-white">
            <CustomIcon
              Icon={AiOutlineClose}
              onClick={handleCloseToggle}
              customStyle="text-3xl"
            />
          </div>

          {menuOptions.map((menu, index) => {
            return (
              <div
                key={index}
                className="my-10 text-primaryGreen font-semibold"
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyle : isNotActiveStyle
                  }
                  onClick={handleCloseToggle}
                  to={menu.path}
                >
                  {menu.menuName}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
