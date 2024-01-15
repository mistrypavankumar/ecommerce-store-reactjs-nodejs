import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    size: "small",
    readOnly: true,
    precision: 0.5,
    value: product.ratings,
  };

  return (
    <Link
      to={`/product/${product._id}`}
      className="flex flex-col justify-between w-60 h-auto m-auto rounded-lg shadow-lg bg-secColor overflow-hidden md:hover:shadow-xl transition-all duration-300 md:hover:scale-105 group decoration-transparent"
    >
      <div className="aspect-square bg-center overflow-hidden rounded-lg">
        <img
          className="object-contain h-full w-full"
          src={product.images[0].url}
          alt={product.name}
        />
      </div>

      <div className="px-3 py-2 bg-white">
        <p className="font-bold text-md capitalize line-clamp-2 mb-5">
          {product.name}
        </p>

        {/* {product.numOfReviews !== 0 && ( */}
        <div className="w-full flex items-center pb-1">
          <Rating {...options} />{" "}
          <span className="text-gray-500 text-sm">
            ({product.numOfReviews} reviews)
          </span>
        </div>
        {/* )} */}

        <span className="text-primaryGreen font-semibold">
          ₹ {product.price}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
