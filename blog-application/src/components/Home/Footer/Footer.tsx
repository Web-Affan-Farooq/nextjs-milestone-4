import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='w-full p-6 bg-black text-white flex flex-col gap-5 md:flex-row justify-between align-middle leading-9'>
      <div className="text-3xl font-bold text-white">Blogger.com</div>
      <div className='text-gray-400'>&copy; Muhammad affan 2024 | All rights reserved</div>
      </footer>
    </div>
  )
}

export default Footer;