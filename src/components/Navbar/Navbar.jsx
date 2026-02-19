import React from "react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },

  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center">
        {navLinks.map((route) => (
          <li className="mr-10">
            <a href={route.path}>{route.name}</a>{" "}
          </li>
        ))}
      </ul>

      {/* <ul className="flex ">
        <li className="mr-10">
          <a href="/home">Home</a>
        </li>
        <li className="mr-10">
          <a href="/about">About</a>
        </li>
        <li className="mr-10">
          <a href="/contact">Contact</a>
        </li>
        <li className="mr-10">
          <a href="/blog">Blog</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
