import { vegetableType } from '@/data/vegetables'
import React from 'react'
import Image from 'next/image'

const DisplayCard = ({item}:{item:vegetableType}) => {
  return (
    <div  className='shadow-lg rounded-lg relative group'>
        <div className='flex justify-center'>
        <Image src={item.image} alt={item.name} width={500} height={300} className='rounded-lg w-[150px] md:w-[300px] lg:w-[500px]  '/>
        </div>
   <div className='flex flex-wrap items-center justify-between p-2'>
    <p className='text-xs sm:text-sm md:text-base'>{item.name}</p>
    <p className='text-xs sm:text-sm md:text-base group-hover:hidden'>GHC {item.price} / kg</p>

   </div >
  <div className='hidden group-hover:flex bg-black/30 absolute bottom-0 right-0 border p-10 rounded-tl-xl'>
BUY Now
  </div>
  </div>
  )
}

export default DisplayCard