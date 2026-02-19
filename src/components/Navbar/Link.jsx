import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="lg:mr-7 p-2 hover:bg-cyan-600">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
