import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MetaData from "../../components/layout/MetaData";

const SearchProducts = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate(`/products`);
    }
  };
  return (
    <>
      <div className="h-screen bg-primaryGreen z-10 flex justify-center items-center fixed top-0 left-0 right-0">
        <MetaData title="Search A Product | E-Commerce" />
        <form className="  py-24" onSubmit={searchSubmitHandler}>
          <div className="flex  items-center px-8 md:px-20">
            <div className="w-full flex items-center shadow-lg bg-white rounded-lg">
              <MdSearch className="text-2xl ml-2 text-slate-500" />
              <input
                type="text"
                onChange={(e) => setKeyword(e.target.value)}
                className="py-2 md:py-3 md:w-96 px-3 w-full outline-none text-base"
                placeholder="Search a product ..."
              />
              <input
                className="bg-yellow-400 py-3  md:py-4 px-3 md:px-10 rounded-r-lg outline-none border-primaryGreen text-primaryDarkGreen font-semibold opacity-80 hover:opacity-100 cursor-pointer transition-all duration-500"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchProducts;
