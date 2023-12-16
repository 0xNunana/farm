'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaMinimize,FaMaximize } from 'react-icons/fa6';
import { IoHomeSharp } from "react-icons/io5";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className={`bg-[#cde2c1] text-white  relative`}>
     
 
      {/* Menu items go here */}
      {/* web */}
      <div className='hidden md:flex'>
      {isMenuOpen ? (
        <div className={`${isMenuOpen ? 'w-64' : 'w-16'}`}> 
        <>
        <Link href='/' className='p-10 flex justify-center'>
          <Image src='/logo/blacklogo.png' alt='Logo' width={200} height={200}/>
          </Link>
       
        <div className={` absolute -right-4 h-10 w-10 rounded-lg text-xl text-black bg-yellow flex justify-center items-center`}>
          <FaMinimize onClick={toggleMenu} />
        </div>
        <ul className="p-4 mt-16 mx-4 bg-white rounded-lg text-deep-green">
 <li className="mb-2"><a href="#">Dashboard</a></li>
 <li className="mb-2"><a href="#">Analytics</a></li>
 <li className="mb-2"><a href="#">Settings</a></li>
</ul>
        </>

   
        </div>

      )
    :(
      <div className={`${isMenuOpen ? 'w-64' : 'w-16'}`}> 
       <>
        <Link href='/' className='py-10 flex justify-center text-deep-green'>
        <IoHomeSharp />
        </Link>
        <div className={` absolute -right-4  h-10 w-10 rounded-lg text-xl text-black bg-yellow flex justify-center items-center`}>
          <FaMaximize  onClick={toggleMenu} />
        </div>
        <ul className="p-4 mt-16 mx-4 bg-white rounded-lg text-deep-green">
 <li className="mb-2"><a href="#">D</a></li>
 <li className="mb-2"><a href="#">A</a></li>
 <li className="mb-2"><a href="#">S</a></li>
</ul>
        </>
 
</div>
    )
    }
      </div>

      {/* mobile */}
      <div className=' md:hidden'>
 {!isMenuOpen ? (
<>
<Link href='/' className='p-10 flex justify-center'>
          <Image src='/logo/blacklogo.png' alt='Logo' width={200} height={200}/>
          </Link>
          <div className={` absolute -right-4 h-10 w-10 rounded-lg text-xl text-black bg-yellow flex justify-center items-center`}>
          <FaMinimize onClick={toggleMenu} />
        </div>

          <ul className="p-4 mt-16 mx-4 bg-white rounded-lg text-deep-green">
 <li className="mb-2"><a href="#">Dashboard</a></li>
 <li className="mb-2"><a href="#">Analytics</a></li>
 <li className="mb-2"><a href="#">Settings</a></li>
</ul>

</>


      )
    :(
<>
<Link href='/' className='py-10 flex justify-center text-deep-green'>
        <IoHomeSharp />
        </Link>
        <div className={` absolute -right-4  h-10 w-10 rounded-lg text-xl text-black bg-yellow flex justify-center items-center`}>
          <FaMaximize  onClick={toggleMenu} />
        </div>
<ul className="p-4 mt-16 mx-4 bg-white rounded-lg text-deep-green">
 <li className="mb-2"><a href="#">D</a></li>
 <li className="mb-2"><a href="#">A</a></li>
 <li className="mb-2"><a href="#">S</a></li>
</ul> 
</>

    
    )
    }
</div>
     
     
    </aside>
  );
};

export default Menu;
