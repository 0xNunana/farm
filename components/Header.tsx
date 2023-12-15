'use client'
import Image from 'next/image'
import Link from 'next/link'
import { TiShoppingCart } from "react-icons/ti";
import React,{useState} from 'react'
import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [ismenuOpen,setIsMenuOpen]=useState(false)
  return (
    <header className='bg-deep-green sticky top-0 z-50 shadow-md'>
      <nav className='max-w-7xl mx-auto flex justify-between py-6 px-3'>
<div className='flex items-center'>
  <Link href='/'>
  <Image src='/logo/whitelogo.png' alt='logo' priority width={250} height={200} className='max-sm:w-[150px]'/>
  </Link>
  
</div>
{/* mobile */}
<div className='md:hidden text-white'>
<IoMenu  className='h-8 w-8' onClick={()=>setIsMenuOpen(true)} />
</div>



{/* web */}
<div className='hidden md:flex items-center justify-between gap-5'>
<ul className=' gap-4 text-white hidden md:flex'>
  <Link href='#home'>
  <li className='hover:underline-offset-4'>Home</li>
  </Link>
  <Link href='#about'>
  <li>About</li>
  </Link>
<Link href='#products'>
 
<li>Products</li>
</Link>
<Link href='/contact'>
 
<li>Contact Us</li>
</Link>

</ul>
<div className='text-yellow text-2xl relative hover:text-white hover:bg-gray-400 rounded-full p-3'>
<TiShoppingCart />
<div className='bg-black absolute w-5 h-5 rounded-full p-1 -top-1 right-1 flex justify-center items-center'>
  <p className='text-xs'>2</p>
</div>
</div>
</div>

      </nav>
      {ismenuOpen && (
    <div className=' text-white  fixed inset-y-0 top-0 p-4 bottom-0 w-full sm:w-[50%] right-0 md:hidden bg-deep-green'>

    <div>
    <div className='flex justify-end  '>
        <GrClose onClick={()=>setIsMenuOpen(false)}  className='h-10 w-10  rounded-full  flex my-5 justify-center  z-20 items-center'/>

        </div>
        <div className='grid gap-6'>
        <Link href='/' onClick={()=>setIsMenuOpen(false)} className='hover:bg-mid-green p-3 rounded-md'>
        <p>Home</p>
        </Link>
        <Link href='#about' onClick={()=>setIsMenuOpen(false)} className='hover:bg-mid-green p-3 rounded-md'>
        <p>About</p>
        </Link>
       <Link href='#products' onClick={()=>setIsMenuOpen(false)} className='hover:bg-mid-green  p-3 rounded-md'>
       <p>Products</p>
       </Link>

       <Link href='#projects' onClick={()=>setIsMenuOpen(false)}className='hover:bg-mid-green  p-3 rounded-md'>
       <p>Projects</p>
       </Link>

       <Link href='/shop' onClick={()=>setIsMenuOpen(false)}className='hover:bg-mid-green  p-3 rounded-md'>
       <p>Shop Now</p>
       </Link>
       <Link href='/contact' onClick={()=>setIsMenuOpen(false)}className='hover:bg-mid-green  p-3 rounded-md'>
       <p>Contact Us</p>
       </Link>
        </div>
      
    </div>
    </div>
)}
    </header>
  )
}

export default Header