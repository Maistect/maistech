import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <section className='min-h-screen flex justify-center items-center md:gap-9 text-dark'>
        <h1 className='md:text-[80px] text-[30px] w-[50%] font-bold pl-[20px ] md:top-[-60px] relative p-2'>Um novo capítulo para o seu negócio</h1>
        <Image src="/images/+tech.png" width={500} height={500} alt='' className='max-md:w-[200px] max-md:h-[200px]'/>
    </section>
  )
}

export default HomePage