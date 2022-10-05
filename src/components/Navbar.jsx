import React from "react";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed w-full bg-black/10 backdrop-blur-sm">
      <nav className="flex justify-between items-center container mx-auto px-4 py-4">
        <h1 className="font-bold text-xl">MyPortfolio</h1>
        <ul className="hidden md:flex gap-4 items-center uppercase font-semibold">
          <li>
            <a href="" className="hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-primary">
              About me
            </a>
          </li>
          <li>
            <a href="" className="hover:text-primary">
              What I Do
            </a>
          </li>
          <li>
            <a href="" className="hover:text-primary">
              Work
            </a>
          </li>
          <li>
            <a href="" className="hover:text-primary">
              Contact me
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <BiX size={30} /> : <BiMenu size={30} />}
        </div>
        <div
          className={
            nav
              ? "fixed md:hidden top-[40px] py-5 right-0 w-full   uppercase font-semibold duration-500 ease-in-out"
              : "fixed right-[-100%] top-[60px]  "
          }
        >
          <ul className="flex flex-col justify-between gap-5  bg-black/10 backdrop-blur-sm">
            <li>
              <a href="" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-primary">
                About me
              </a>
            </li>
            <li>
              <a href="" className="hover:text-primary">
                What I Do
              </a>
            </li>
            <li>
              <a href="" className="hover:text-primary">
                Work
              </a>
            </li>
            <li>
              <a href="" className="hover:text-primary">
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
