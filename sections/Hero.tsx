import React from 'react'

const Hero = () => {
  return (
    <div className='bg-hero bg-cover bg-no-repeat '>
      <div className='bg-gradient-to-r from-black/40 via-black/10 to-black/5 py-20 md:py-28 lg:py-38'>
      <div className='max-w-7xl mx-auto  md:mt-20 md:mb-28 lg:mb-40 px-3 '>
        <p className='py-2 text-white md:text-xl'>Ghana&apos;s No&apos;1 Farm</p>
        <p className='md:py-4 text-yellow text-6xl md:text-8xl font-extrabold '>Agriculture & More</p>
        <p className='text-white md:py-5 lg:py-10'>You are what you eat.</p>
        <button className='bg-yellow rounded-lg p-2 mt-2 md:p-3 max-sm:text-sm'>
          Discover More
        </button>
      </div>
      </div>
  
      
      </div>
  )
}

export default Hero