import React from "react";
import {NavLink} from "react-router-dom"
export default function Navbar() {
  return (
    <>
      <nav className="p-8   justify-items-center bg-black">
        <div className="container  flex content-center items-center justify-between">
          <h1 className="text-white text-4xl font-extrabold">Start Framework</h1>
          <div className="">
            <ul className=" text-white flex  gap-3 item-center ms-auto">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
