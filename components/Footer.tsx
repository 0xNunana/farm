import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-yellow py-10'>
      <div className='max-w-7xl mx-auto px-3'>
        <div className='grid lg:grid-cols-4'>
<div className='flex items-center '>
  <Link href='/'>
  <Image src='/logo/blacklogo.png' alt='Logo' priority width={250} height={200} className='max-sm:w-[150px]'/>
  </Link>
 
</div>
<div>
  socials
</div>
<div>
  Policy
</div>
<div>
  <p>+233558669969</p>
</div>
        </div>
        <div className='h-[1px] bg-deep-green my-2'/>
        <p className='text-center '>&copy;2023 | Nunana Farms Ltd. All rights reserved</p>

      </div>
    </footer>
  )
}

export default Footer