'use client'

import React, { useState } from 'react';
import { FaMinimize,FaMaximize } from 'react-icons/fa6';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className={`bg-gradient-to-b from-deep-green from-90%  to-yellow text-white ${isMenuOpen ? 'w-64' : 'w-16'} relative`}>
      {isMenuOpen ? (
        <div className={` absolute -right-4 h-10 w-10 rounded-lg text-xl text-black p-3`}>
          <FaMinimize onClick={toggleMenu} />
        </div>
      ):(
        <div className={` absolute -right-4 h-10 w-10 rounded-lg text-xl text-black p-3`}>
          <FaMaximize  onClick={toggleMenu} />
        </div>
      )
    
    }
      {/* Menu items go here */}
      {isMenuOpen ? (
 <ul className="p-4 mt-10 mx-4 bg-white rounded-lg text-deep-green">
 <li className="mb-2"><a href="#">Dashboard</a></li>
 <li className="mb-2"><a href="#">Analytics</a></li>
 <li className="mb-2"><a href="#">Settings</a></li>
</ul>
      )
    :(
      <ul className="p-4 mt-10 mx-4 bg-white rounded-lg text-deep-green">
 <li className="mb-2"><a href="#">D</a></li>
 <li className="mb-2"><a href="#">A</a></li>
 <li className="mb-2"><a href="#">S</a></li>
</ul> 
    )
    }
     
    </aside>
  );
};

export default Menu;
