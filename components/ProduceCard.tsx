import Image from 'next/image'
import React from 'react'

const ProduceCard = () => {
  return (
    <div className='rounded-lg p-1 shadow-md bg-mid-green'>
        <div className='flex justify-center items-center'>
        <Image src='/assets/calf.jpg' alt='product' height={100} width={500}
         className='rounded-t-lg max-sm:w-[100px]'/>
        </div>
  
    <p className='text-center'>Heifer</p>
    </div>
  )
}

export default ProduceCard
