import React from "react";

function Heading({ title, description }) {
  return (
    <div className="px-5">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

export default Heading;
