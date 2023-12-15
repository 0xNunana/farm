import { productType } from '@/data/product'
import Image from 'next/image'
import React from 'react'

const ProduceCard = ({image,title}:productType) => {
  return (
    <div className='rounded-lg p-1 shadow-md bg-mid-green hover:border-2 hover:border-yellow'>
        <div className='flex justify-center items-center'>
        <Image src={image} alt={title} height={100} width={500}
         className='rounded-t-lg max-sm:w-[100px]'/>
        </div>
  
    <p className='text-center max-sm:text-sm py-2'>{title}</p>
    </div>
  )
}

export default ProduceCard
