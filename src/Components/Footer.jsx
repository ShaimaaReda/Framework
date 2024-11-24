import React from "react";

export default function Footer() {
  return (
    <>
    <div className="bottom-0 left-0 px-10 py-10 bg-black flex justify-items-center justify-between">
      <div className="p-8 text-center text-white">
       <h2 className="font-bold text-xl">LOCATION</h2>
       <p className="py-2">2215 John Daniel Drive</p>
       <p>Clark, MO 65243</p>
      </div>
      <div className="p-8 text-center text-white">
      <h2 className="font-bold text-xl">AROUND THE WEB</h2>
      <div>
        <ul className="px-8 text-white flex  gap-3 item-center ms-auto">
          <li>
          <i class="p-3 fa-brands fa-facebook"></i>
          </li>
          <li>
          <i class="p-3 fa-brands fa-linkedin-in"></i>
          </li>
          <li>
          <i class="p-3 fa-brands fa-twitter"></i>
          </li>
          <li>
          <i class="p-3 fa-solid fa-globe"></i>
          </li>
        </ul>
      </div>
      </div>
      <div className="py-8 text-center text-white">
      <h2 className="font-bold text-xl">ABOUT FREELANCER</h2>
      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
    </>
  )
}
