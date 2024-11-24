import React from 'react'
import image from '../assets/imgs/avataaars.svg'

export default function Home() {
  return (
    <>
    <div className=' text-center p-6 flex-col justify-between items-center justify-items-center bg-green-300'>
      <div className='w-52'>
        <img className='w-100' src={image} alt=''/>
      </div>
      <h2 className="text-white text-4xl font-extrabold">start Framework </h2>
      <div className='flex justify-between items-center gap-3'>
        <div className='border-t-4 border-white w-20 '></div>
        <i className="text-white fa-solid fa-star"></i>
        <div className='border-t-4 border-white w-20 '></div>
      </div>
      <div className="text-white">Graphic Artist - Web Designer - Illustrator</div>
    </div>
    </>
  )
}
