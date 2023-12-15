import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { BsFillTrophyFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='bg-deep-green relative  '>
      <div className='hidden md:flex bg-about-green h-[300px] w-[25%] 4xl:w-[35%] 7xl:w-[50%] absolute'/>
      <div className='max-w-7xl mx-auto px-3'>
<div className='grid md:grid-cols-2 lg:grid-cols-3 py-10 lg:py-20 gap-5 '>
<div className='hidden  md:inline-flex col-span-1  justify-center  '>
  <div className=' relative'> 
   <Image src='/assets/hand.jpg' alt='hand' width={500} height={100} className='h-[400px] w-[350px] rounded-lg z-30'/> 
<div className='flex justify-center items-center'>
  <div className='p-4 rounded-lg  -mt-7 bg-mid-green divide-x-2 gap-2 text-white flex items-center'>
    <p className='text-yellow text-3xl'><BsFillTrophyFill /></p>
    <div className='pl-2'>
      <p>5000 Acres</p>
      <p>successfully cultivated</p>
    </div>
    
    </div>
    <div className='bg-yellow h-[50%] w-5 absolute -left-5 bottom-20 rounded-l-lg z-10' />
</div>
 

  </div>
 

</div>
<div className='col-span-1  lg:col-span-2 text-white '>
<p className='text-sm lg:text-2xl max-md:text-center'>About Us</p>
<p className=' font-bold text-2xl lg:text-5xl py-1 lg:py-3 max-md:text-center'>Modern Agriculture and Investment</p>
<p className='text-yellow lg:text-xl py-2 font-bold max-md:text-center'>We are the leaders of the Agric revolution in Ghana</p>
<p className='text-sm lg:text-base max-md:text-center'>A team of dedicated indiviuals with a passion for food and the environment</p>
<div className='max-md:flex justify-center '>
<ul className='pt-3 lg:pt-10  gap-4 justify-center'> 
  <li className='flex items-center gap-4 '>
    <div className='text-yellow'><FaCheckCircle /></div>
    <p>Organic foods</p>
  </li>
  <li className='flex items-center gap-4'>
    <div className='text-yellow'><FaCheckCircle /></div>
    <p>Grown with love</p>
  </li>
  <li className='flex items-center gap-4'>
    <div className='text-yellow'><FaCheckCircle /></div>
    <p>Extensive research</p>
  </li>
</ul>
</div>


</div>
</div>
      </div>
    </div>
  )
}

export default About