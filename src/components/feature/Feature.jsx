import { CircleCheck } from "lucide-react";
import React from "react";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex gap-2 m-1.5">
        <CircleCheck></CircleCheck> {feature}
      </p>
    </div>
  );
};

export default Feature;
