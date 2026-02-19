import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  const links = navLinks.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between  bg-sky-900 p-10">
      <span className="flex gap-2" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul
          className={`md:hidden  bg-teal-900 p-3 w-36  absolute ml-7 rounded-xl duration-1000 ${open ? "mt-1" : "-mt-56"} `}
        >
          {links}
        </ul>

        <h3>My menu</h3>
      </span>
      {/* 3rd option navbar */}
      <ul className="md:flex hidden">{links}</ul>
      {/* 2nd option navbar */}
      {/* <ul className="flex justify-center">
        {navLinks.map((route) => (
          <li key={route.id} className="mr-10">
            <a href={route.path}>{route.name}</a>{" "}
          </li>
        ))}
      </ul> */}
      {/* 1st option navbar */}
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
      <button>Sign in</button>
    </nav>
  );
};

export default Navbar;
