import ProduceCard from '@/components/ProduceCard'
import { products } from '@/data/product'
import React from 'react'

const Products = () => {
  return (
    <div className='bg-deep-green' id='products'>
      <div className='max-w-7xl mx-auto px-3 text-white py-10'>
        <p className='text-center text-sm md:text-base'>Popular produce</p>
        <p className='font-bold text-xl md:text-3xl lg:text-5xl text-center pb-10'>Premium Quality Only</p>
      <div className='grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'> 
        {products.map((item)=>(
 <ProduceCard {...item} key={item.title}/>
        ))}
       
      
      </div>
      </div>
    </div>
  )
}

export default Products