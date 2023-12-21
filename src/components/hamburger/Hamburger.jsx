"use client";

import { useState } from "react";

const Hamburger = () => {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    const svg = document.querySelector("svg");
    svg.classList.toggle("svgEffect", !clicked);
    setclicked(!clicked);
    const navbar = document.querySelector("#navbar");
    navbar.classList.toggle("navbarEffect", !clicked);
  };

  return (
    <>
      <button onClick={handleClick} className=" block lg:hidden z-[5]">
        <svg id="hamburger" className="Header__toggle-svg" viewBox="0 0 60 40">
          <g
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path id="top-line" d="M10,10 L50,10 Z"></path>
            <path id="middle-line" d="M10,20 L50,20 Z"></path>
            <path id="bottom-line" d="M10,30 L50,30 Z"></path>
          </g>
        </svg>
      </button>

      <div
        id="navbar"
        className=" list-none flex flex-col gap-4 justify-start items-center text-[16px] absolute top-[-240px] opacity-0 left-0 w-full h-auto bg-white py-5 duration-300"
      >
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT US</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#team">TEAM</a>
        </li>
        <li>
          <a href="#reservation">RESERVATION</a>
        </li>
        <li>
          <a href="#review">REVIEW</a>
        </li>

        <button className="py-[8px] px-[30px] border-black border-[1px] rounded-3xl font-[500] hover:bg-black hover:text-white duration-500">
          <a href="#popular">Our Menu</a>
        </button>
      </div>
    </>
  );
};

export default Hamburger;
