import React from 'react'
import { Dancing_Script } from 'next/font/google'
import { FaPlay } from "react-icons/fa";

const dance = Dancing_Script({ subsets: ['latin'] })


const Video = () => {
  return (
    <div className='bg-experience bg-no-repeat bg-cover '>
      <div className='bg-black/30'>
      <div className='max-w-7xl mx-auto px-3 py-40'>
  <div className='flex justify-between flex-wrap'>
<p className='text-5xl font-extrabold text-white w-[60%]'>Agriculture Matters to the future of Ghana</p>
<div className='space-y-5 ' >
<div className='h-16 w-16 rounded-full bg-white flex justify-center text-yellow items-center text-2xl font-extrabold'>
<FaPlay  />
</div>
<div className='flex justify-end'>
<p className={`${dance.className } text-yellow text-3xl font-semibold`}>Experience Ghana</p>
</div>

</div>
  </div>
</div>
      </div>



    </div>
  )
}

export default Video