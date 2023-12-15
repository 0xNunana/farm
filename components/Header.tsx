import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='bg-deep-green sticky top-0 z-50 shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between py-7 px-3'>
<div className=''>
  <Image src='/logo/whitelogo.png' alt='logo' priority width={250} height={200} className='max-sm:w-[150px]'/>
</div>
<ul className='flex gap-4 text-white'>
  <Link href='#home'>
  <li className='hover:underline-offset-4'>Home</li>
  </Link>
  <Link href='#about'>
  <li>About</li>
  </Link>
<Link href='#products'>
 
<li>Our Products</li>
</Link>

</ul>
      </div>
    </nav>
  )
}

export default Header