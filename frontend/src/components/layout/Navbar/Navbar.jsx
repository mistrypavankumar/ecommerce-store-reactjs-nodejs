import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import CustomIcon from "../../Icons/CustomIcon";
import { Link, NavLink } from "react-router-dom";
import Slider from "./Slider";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions";

const isActiveStyle = "font-semibold opacity-100 transition-all duration-500";
const isNotActiveStyle = "font-semibold opacity-50 transition-all duration-500";

const Navbar = ({ webName, menuOptions }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const handlecloseToggle = () => {
    setToggleSidebar(true);
  };

  return (
    <>
      <div className="w-[100%] absolute top-0 z-50 bg-primaryDarkGreen py-4 md:py-5 px-8 lg:px-24 rounded-bl-3xl rounded-br-3xl text-white border-b-2 border-b-white shadow-lg">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1 className="font-bold text-yellow-400 text-lg md:text-xl">
              {webName}
            </h1>
          </Link>

          {/* Only for desktop */}
          <div className="hidden md:block">
            <div className="flex gap-10">
              {menuOptions.map((menu, index) => {
                return (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? isActiveStyle : isNotActiveStyle
                    }
                    to={menu.path}
                    key={index}
                  >
                    {menu.menuName}
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="flex items-start gap-4 md:gap-6">
            <CustomIcon path="/search" Icon={AiOutlineSearch} />

            <CustomIcon path="/cart" Icon={AiOutlineShoppingCart} />
            {isAuthenticated ? (
              <UserOptions user={user} />
            ) : (
              <CustomIcon path="/login" Icon={AiOutlineUser} />
            )}

            <CustomIcon
              path="/#"
              Icon={AiOutlineMenu}
              onClick={handlecloseToggle}
              customStyle="block md:hidden"
            />
          </div>
        </div>
      </div>
      {toggleSidebar ? (
        <Slider
          menuOptions={menuOptions}
          setCloseToggle={setToggleSidebar}
          closeToggle={toggleSidebar}
        />
      ) : (
        <Slider
          menuOptions={menuOptions}
          setCloseToggle={setToggleSidebar}
          closeToggle={toggleSidebar}
        />
      )}
    </>
  );
};

export default Navbar;
