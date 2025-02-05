"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [navStatus, setnavStatus] = useState<boolean>(false);

  const handleMenu = () => {
   if(window.innerWidth <=768) {
    setnavStatus(!navStatus);
   }else {
    console.log("disabled");
   }
  }

  return (
    <div>
      <header className='w-[100vw] fixed z-10'>

        <nav className={` w-full p-6 bg-[rgba(54, 53, 53, 0.9)] backdrop-blur-xl backdrop-opacity-100 flex justify-between items-center leading-4 max-md:items-start ${navStatus? "h-auto" : ""}`}>

          <div className="text-[26px] font-bold text-gray-600 relative max-md:top-2">Blogger.com</div>

          <div className={`flex-col md:flex-row relative right-16 top-16 md:top-0 gap-10 md:flex transition-opacity duration-200 ease-in-out md:bg-transparent bg-[rgba(54, 53, 53, 0.9)] backdrop-blur-xl backdrop-opacity-100 md:opacity-100 ${navStatus ? "flex w-full h-96 opacity-100" : "opacity-0 hidden"}`}>
            <div className='nav-options text-center mx-auto py-2.5 px-2 font-normal text-gray-500 '><Link href={'/'} onClick={handleMenu}>Home</Link></div>
            <div className='nav-options text-center py-2.5 px-2 font-normal text-gray-500 '><Link href={'/'} onClick={handleMenu}>About</Link></div>
            <div className='nav-options text-center py-2.5 px-2 font-normal text-gray-500 '><Link href={'/signup'} onClick={handleMenu}>Signup</Link></div>
            <div className='nav-options text-center py-2.5 px-2 font-normal text-gray-500 '><Link href={'/login'} onClick={handleMenu}>Login</Link></div>
          </div>
          <div id="menu-icon" onClick={handleMenu} className="md:hidden text-gray-600">{navStatus ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars"></i>)}
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;