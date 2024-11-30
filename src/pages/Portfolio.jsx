import React from 'react'
import image1 from '../assets/imgs/poert1.png'
import image2 from '../assets/imgs/port2.png'
import image3 from '../assets/imgs/port3.png'
export default function Portfolio() {
  return (
    <>
    <div className=' text-center p-6 flex-col justify-between items-center justify-items-center '>
      <h2 className="text-black text-4xl font-extrabold">Portfolio Component</h2>
      <div className='my-3 flex justify-between items-center gap-3'>
        <div className='border-t-4 border-black w-20 '></div>
        <i className="text-black fa-solid fa-star"></i>
        <div className='border-t-4 border-black w-20 '></div>
      </div>
    </div>
    <div class="container mx-auto grid grid-cols-4 md:grid-cols-3 gap-8 pb-12">
        <div className='hover:bg-sky-700'>
          <img src= {image1} alt='Portfolio Item' />
        </div>
        <div className=''>
          <img src= {image2} alt='Portfolio Item'/>
        </div>
        <div className=''>
          <img src= {image3} alt='Portfolio Item'/>
        </div>
        <div className=''>
          <img src= {image1} alt='Portfolio Item' />
        </div>
        <div className=''>
          <img src= {image2} alt='Portfolio Item'/>
        </div>
        <div className=''>
          <img src= {image3} alt='Portfolio Item'/>
        </div>
    </div>
    </>
    
  )
}
