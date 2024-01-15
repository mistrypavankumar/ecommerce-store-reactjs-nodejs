import React from "react";
import { Link } from "react-router-dom";

const FooterContent = ({ data, title }) => {
  return (
    <div>
      <h1 className="text-yellow-400 font-semibold uppercase tracking-widest">
        {title}
      </h1>
      <div className="mt-5">
        {data
          ? data.map((item, index) => {
              return (
                <div key={index} className="my-2 group">
                  <Link
                    className="text-lightGray group-hover:pl-3 transition-all duration-500 group-hover:text-white"
                    to={item.path}
                  >
                    {item.link}
                  </Link>
                </div>
              );
            })
          : "Please provide data"}
      </div>
    </div>
  );
};

export default FooterContent;
