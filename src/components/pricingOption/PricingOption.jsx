import React, { use } from "react";
import PricingCards from "../pricingCards/PricingCards";

const PricingOption = ({ pricingOptions }) => {
  const pricingData = use(pricingOptions);
  //   console.log(pricingData);
  return (
    <div className="p-6 mt-3">
      <h2 className="text-5xl">Get Our Membership</h2>
      <div className="grid grid-cols-3 gap-2.5 mt-3">
        {pricingData.map((cards) => (
          <PricingCards key={cards.id} cards={cards}></PricingCards>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
