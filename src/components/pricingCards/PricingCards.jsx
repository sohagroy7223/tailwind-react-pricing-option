import React from "react";
import Feature from "../feature/Feature";

const PricingCards = ({ cards }) => {
  const { name, billing, price, description, features } = cards;
  return (
    <div className="flex flex-col bg-amber-600 hover:bg-blue-600 transform-fill duration-800 rounded-2xl p-2">
      {/* card header */}
      <div>
        <h1 className="text-5xl ">{name}</h1>
        <h3 className="text-2xl ml-2">
          ${price}/{billing}
        </h3>
      </div>

      {/* card body */}
      <div className="mt-4 bg-amber-500 hover:bg-blue-400 duration-500 rounded-2xl p-3 flex-1">
        {description}
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="btn w-full mt-3.5">Subscribe</button>
    </div>
  );
};

export default PricingCards;
