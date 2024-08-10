import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.jpeg'


function HomeHeader() {
  return (
    <div className='flex justify-between items-center py-4 px-8 bg-purple-900 text-white border-b-2 border-white'>
      <div className="flex space-x-1">
      <Image className='h-7 w-7 bg-white rounded-full' alt='yo' src={logo}/>
      <p className='font-bold text-xl'>QuiBlo</p>
      </div>
      <div className='flex space-x-2'>
        <button className='border-white border-2 cursor-pointer rounded-md text-center text-sm py-1 w-20'>Home</button>
        <button className='border-white border-2 cursor-pointer rounded-md text-center text-sm py-1 w-20'>Join Quiz</button>
        <button className='border-white border-2 cursor-pointer rounded-md text-center text-sm py-1 w-20'>Login</button>
        <button className='border-white border-2 cursor-pointer rounded-md text-center text-sm py-1 w-20'>Sign up</button>
      </div>
    </div>
  )
}

export default HomeHeader
