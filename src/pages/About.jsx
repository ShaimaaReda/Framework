import React from "react";

export default function About() {
  return (
    <>
       <div className='bg-green-300'>
    <div className=' text-center p-6 flex-col justify-between items-center justify-items-center bg-green-300'>
      <h2 className="text-white text-4xl font-extrabold">ABOUT COMPONENT</h2>
      <div className='my-3 flex justify-between items-center gap-3'>
        <div className='border-t-4 border-white w-20 '></div>
        <i className="text-white fa-solid fa-star"></i>
        <div className='border-t-4 border-white w-20 '></div>
      </div>
    </div>
    <div className='container mx-auto pb-9 flex text-white'>
    <div className=''>
    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
    </div>
    <div className=''>
    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
    </div>
    </div>
    </div>
    </>
  );
}
