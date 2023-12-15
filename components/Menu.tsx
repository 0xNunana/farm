'use client'

import React, { useState } from 'react';
import { FaMinimize,FaMaximize } from 'react-icons/fa6';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className={`bg-gradient-to-b from-deep-green from-90%  to-yellow text-white  relative`}>
      {isMenuOpen ? (
        <div className={` absolute -right-4 h-10 w-10 rounded-lg text-xl text-black bg-yellow flex justify-center items-center`}>
          <FaMinimize onClick={toggleMenu} />
        </div>
      ):(
        <div className={` absolute -right-4  h-10 w-10 rounded-lg text-xl text-black bg-yellow flex justify-center items-center`}>
          <FaMaximize  onClick={toggleMenu} />
        </div>
      )
    
    }
      {/* Menu items go here */}
      {/* web */}
      <div className='hidden md:flex'>
      {isMenuOpen ? (
        <div className={`${isMenuOpen ? 'w-64' : 'w-16'}`}> 
         <ul className="p-4 mt-16 mx-4 bg-white rounded-lg text-deep-green">
 <li className="mb-2"><a href="#">Dashboard</a></li>
 <li className="mb-2"><a href="#">Analytics</a></li>
 <li className="mb-2"><a href="#">Settings</a></li>
</ul>
        </div>

      )
    :(
      <div className={`${isMenuOpen ? 'w-64' : 'w-16'}`}> 
      <ul className="p-4 mt-16 mx-4 bg-white rounded-lg text-deep-green">
 <li className="mb-2"><a href="#">D</a></li>
 <li className="mb-2"><a href="#">A</a></li>
 <li className="mb-2"><a href="#">S</a></li>
</ul> 
</div>
    )
    }
      </div>

      {/* mobile */}
      <div className=' md:hidden'>
 {!isMenuOpen ? (
 <ul className="p-4 mt-16 mx-4 bg-white rounded-lg text-deep-green">
 <li className="mb-2"><a href="#">Dashboard</a></li>
 <li className="mb-2"><a href="#">Analytics</a></li>
 <li className="mb-2"><a href="#">Settings</a></li>
</ul>
      )
    :(
      <ul className="p-4 mt-16 mx-4 bg-white rounded-lg text-deep-green">
 <li className="mb-2"><a href="#">D</a></li>
 <li className="mb-2"><a href="#">A</a></li>
 <li className="mb-2"><a href="#">S</a></li>
</ul> 
    )
    }
</div>
     
     
    </aside>
  );
};

export default Menu;
