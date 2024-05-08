'use client'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-dark opacity-[75%] text-brand max-md:h-[46px] h-[60px] flex justify-center items-center font-mono'>
        <ul className='flex pt-[15px] pb-[13px] pr-[21px] pl-[21px] justify-center items-center gap-[36px] text-[14px] md:text-[22px]'>
            <a href="#who"><li>Quem somos</li></a>
            <a href="#team"><li>Equipe</li></a>
            <a href="#work"><li>Conheça</li></a>
            
        </ul>
    </nav>
  )
}

export default Navbar