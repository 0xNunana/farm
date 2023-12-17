'use client'

import Link from 'next/link'
import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='bg-hero bg-cover bg-no-repeat '>
      <div className='bg-gradient-to-r from-black/80 via-black/30 to-black/5 py-20 md:py-28 lg:py-38 relative'>
      <div className='absolute right-8 bottom-5 bg-black/50 rounded-full'>
        <Image src='/assets/sdg.png' alt='SDG&apos;s' width={200} height={300} className='w-[100px] md:w-[150px] lg:w-[200px]'/>
      </div>
      <div className='max-w-7xl mx-auto  md:mt-20 md:mb-28 lg:mb-40 px-3 '
      
      >
        <motion.div  initial={{opacity:0, y:-100}}
       animate={{opacity:1, y:10}}
       transition={{
           delay:0.7
       }}>
        <p className='py-2 text-white text-2xl md:text-3xl lg:text-4xl font-semibold'>Ghana&apos;s No&apos;1 Farm</p>
        <p className='py-2 md:py-4 text-yellow text-6xl md:text-8xl font-extrabold '>Agriculture & More</p>
        <p className='text-white py-4 w-[70%] md:text-xl leading-[15px]'>You are what you eat hence we put in the extra effort to keep you healthy !</p>
        </motion.div>
        <motion.div  initial={{opacity:0, y:100}}
       animate={{opacity:1, y:0}}
       transition={{
           delay:1.7
       }}>
        <Link href='/shop' className='bg-yellow group hover:scale-105  w-[100px] sm:w-[170px] rounded-lg p-2  md:p-3 text-sm sm:text-base md:text-xl flex gap-4 items-center justify-center shadow-xl'>
          <p>Shop Now </p>
        
          <FaRegArrowAltCircleRight  className='hidden sm:flex text-2xl text-deep-green group-hover:scale-150'/>
      
        </Link>
        </motion.div>
      
      </div>
      </div>
  
      
      </div>
  )
}

export default Hero