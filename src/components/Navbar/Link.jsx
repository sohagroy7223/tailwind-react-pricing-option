import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="lg:mr-10 p-2 hover:bg-cyan-600">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
