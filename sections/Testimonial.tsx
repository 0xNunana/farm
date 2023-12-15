import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className='bg-[#334b35]/90'>
      <div className='max-w-7xl mx-auto px-3 pt-2 pb-10'>
        <p className='text-sm md:text-base lg:text-2xl text-center text-white pt-16'>Testimonial</p>
        <p className='text-center text-white text-sm md:text-base lg:text-5xl font-extrabold lg:mb-10 pb-10 lg:pb-16'>What are people saying about us</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
<div className=' flex justify-center shrink-0 '>
  <Image src='/people/sandy.jpeg' alt='Sandy' width={350} height={300} className='rounded-full w-[120px] h-[120px] md:w-[200px] md:h-[200px]'/>

</div>
<div className='md:col-span-2 text-white  flex justify-center items-center relative'>

  <div className=' ml-16 relative'>
    <div className='absolute -top-5 max-sm:-left-10 -left-14 text-yellow md:text-3xl lg:text-5xl'>
<FaQuoteLeft />
</div>
  <p className='md:text-xl lg:text-2xl font-semibold'>Mr. Sandy Owusu-Asiedu</p>
  <p>I-Neema Ghana</p>
  <p className='w-[70%] max-md:text-xs'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates, natus et ipsa facere veniam, amet perferendis facilis a quia autem maxime ratione totam, amet consectetur adipisicing elit. Dignissimos voluptates, natus et ipsa facere veniam, amet perferendis facilis a quia autem maxime ratione totam,doloribus at laborum assumenda eligendi eius!
</p>
  </div>
 
</div>
        </div>

      </div>
    </div>
  )
}

export default Testimonial