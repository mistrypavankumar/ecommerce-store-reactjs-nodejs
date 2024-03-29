import React, { useState } from "react";

import Slider from "@material-ui/core/Slider";
import { MdClose, MdArrowForward } from "react-icons/md";

const FilterSlide = ({
  price,
  priceHandler,
  categories,
  setCategory,
  ratings,
  setRatings,
}) => {
  const [showIcon, setShowIcon] = useState(true);
  const [toggleFilterSlider, setToggleFilterSlider] = useState(false);

  const filterSliderHandler = () => {
    setToggleFilterSlider(true);
  };

  const showFilterBtnHandler = () => {
    setShowIcon(false);
  };

  return (
    <div>
      {!toggleFilterSlider && (
        <div
          className="cursor-pointer group rounded-r-lg z-10 text-white transition-all duration-500 bg-primaryGreen px-2 py-2 hover:px-5 absolute left-0"
          onClick={filterSliderHandler}
          onMouseEnter={showFilterBtnHandler}
          onMouseLeave={() => setShowIcon(true)}
        >
          {showIcon ? (
            <MdArrowForward className="text-white text-xl " />
          ) : (
            <p>Apply Filter</p>
          )}
        </div>
      )}
      <div
        className={` w-full h-auto md:w-80 absolute left-0 top-32 shadow-xl border-r-2 py-5 rounded-r-lg border-2 px-5 z-20 transition-all duration-500 bg-white  ${
          toggleFilterSlider
            ? "animate-slide-in"
            : "-left-[100%] -translate-x-96"
        }`}
      >
        <div className="flex justify-between items-center">
          <p className="py-2 w-full border-b-2 border-primaryGreen text-primaryGreen font-semibold">
            Filters
          </p>
          <MdClose
            onClick={() => setToggleFilterSlider(false)}
            className="text-xl cursor-pointer text-primaryGreen/50 hover:text-primaryGreen"
          />
        </div>
        <div className="pt-5">
          <p className="filterHeadingStyle">Price</p>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={25000}
          />

          <div>
            <p className="filterHeadingStyle pt-5 pb-3 border-b-2 border-primaryGreen/50">
              Categories
            </p>
            <ul>
              {categories.map((category, index) => {
                return (
                  <li
                    className="py-1 cursor-pointer text-gray-600"
                    key={index}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <fieldset>
              <p className="filterHeadingStyle pt-3">Ratings Above</p>
              <Slider
                value={ratings}
                onChange={(e, newRatings) => setRatings(newRatings)}
                arial-labelledby="continuous-slider"
                min={0}
                max={5}
                valueLabelDisplay="auto"
                className="text-red-50"
              />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSlide;
