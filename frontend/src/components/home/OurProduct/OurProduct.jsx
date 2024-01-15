import React from "react";
import ProductCard from "./ProductCard";

const OurProduct = ({ products }) => {
  return (
    <div className="w-[100%] h-auto py-14" id="ourproduct">
      <div className="">
        <h1 className="headingStyle">Featured Products</h1>

        <div className="w-[90%] mx-auto">
          <div className="productsLayoutStyle">
            {products &&
              products.map((product, index) => {
                return <ProductCard key={index} product={product} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
