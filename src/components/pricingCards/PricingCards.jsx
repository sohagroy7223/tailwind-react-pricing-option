import React from "react";
import Feature from "../feature/Feature";

const PricingCards = ({ cards }) => {
  const { name, billing, price, description, features } = cards;
  return (
    <div className="bg-amber-600 rounded-2xl p-2">
      <h1 className="text-5xl ">{name}</h1>
      <h3 className="text-2xl ml-2">
        ${price}/{billing}
      </h3>
      <p className="mt-4 bg-amber-500 rounded-2xl p-3">
        {description}
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </p>
    </div>
  );
};

export default PricingCards;
