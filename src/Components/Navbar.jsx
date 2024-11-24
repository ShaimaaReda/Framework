import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="p-8   justify-items-center bg-black">
        <div className="container  flex content-center items-center justify-between">
          <h1 className="text-white text-4xl font-extrabold">Start Framework</h1>
          <div className="">
            <ul className=" text-white flex  gap-3 item-center ms-auto">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">portfolio</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
