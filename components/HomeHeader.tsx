import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.jpg'


function HomeHeader() {
  return (
    <div className='h-16 w-full'>
      <div className='flex justify-between items-center py-2 px-6 border-b border-white text-white'>
        <div className="flex items-center">
          <Image className='h-12 w-12 rounded-full' alt='yo' src={logo}/>
          <p className='font-bold text-3xl px-3 text-white'>QuiBlo</p>
        </div>
        <div className='flex'>
          <button className='border-[#1acdd5] border-2 cursor-pointer rounded-md text-center text-xl py-1 px-3 w-fit'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
