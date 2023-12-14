import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='bg-deep-green/80 '>
      <div className='max-w-7xl mx-auto px-3'>
<div className='grid md:grid-cols-2 lg:grid-cols-3 py-10 lg:py-20 gap-5 '>
<div className='hidden  md:inline-flex col-span-1 '>
  <Image src='/assets/hand.jpg' alt='hand' width={500} height={100} className='h-[400px] w-[350px]'/>
</div>
<div className='col-span-1  lg:col-span-2 text-white '>
<p className='text-sm lg:text-2xl max-md:text-center'>About Us</p>
<p className=' font-bold text-2xl lg:text-5xl py-1 lg:py-3 max-md:text-center'>Modern Agriculture and Investment</p>
<p className='text-yellow lg:text-xl py-2 font-bold max-md:text-center'>We are the leadersof the Agric revolution in Ghana</p>
<p className='text-sm lg:text-base max-md:text-center'>A team of dedicated indiviuals with a passion for food and the environment</p>
<div className='max-md:flex justify-center '>
<ul className='pt-3 lg:pt-10  gap-4 justify-center'> 
  <li className='flex items-center gap-4 '>
    <div className='text-yellow'>icon</div>
    <p>Organic foods</p>
  </li>
  <li className='flex items-center gap-4'>
    <div className='text-yellow'>icon</div>
    <p>Grown with love</p>
  </li>
  <li className='flex items-center gap-4'>
    <div className='text-yellow'>icon</div>
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