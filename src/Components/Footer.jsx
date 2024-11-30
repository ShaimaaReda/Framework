import React from "react";

export default function Footer() {
  return (
    <div className="footer bg-black text-white">
      <div className="px-10 py-10 flex justify-between">
        <div className="p-8 text-center">
          <h2 className="font-bold text-xl">LOCATION</h2>
          <p className="py-2">2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="p-8 text-center">
          <h2 className="font-bold text-xl">AROUND THE WEB</h2>
          <ul className="px-8 flex gap-3 justify-center">
            <li><i className="p-3 fa-brands fa-facebook"></i></li>
            <li><i className="p-3 fa-brands fa-linkedin-in"></i></li>
            <li><i className="p-3 fa-brands fa-twitter"></i></li>
            <li><i className="p-3 fa-solid fa-globe"></i></li>
          </ul>
        </div>
        <div className="py-8 text-center">
          <h2 className="font-bold text-xl">ABOUT FREELANCER</h2>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
  );
}