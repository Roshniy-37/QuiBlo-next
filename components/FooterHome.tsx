import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.jpg'

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

function FooterHome() {
  return (
    <div className='h-24 w-full text-white'>
      <nav className="h-full w-full py-1 ">
        <div className="flex space-x-2 mx-16 items-center border-b">
          <h1 className="text-xl">QuiBlo</h1>
          <h1 className="text-lg">|</h1>
          <Image className='h-8 w-8 rounded-full' alt='yo' src={logo}/>
        </div>
        <ul className="flex px-36 justify-around pt-1">
          <li className='cursor-pointer'><a>Home</a></li>
          <li className='cursor-pointer'><a>About Us</a></li>
          <li className='cursor-pointer'><a>Contact</a></li>
          <li className='cursor-pointer'><a>Services</a></li>
        </ul>
        <div className="flex justify-center space-x-4 ">
          <a title='call' className=""><IoCallOutline className='size-6 hover:text-green-700' /></a>
          <a title='mail' className=""><FiMail className='size-6 hover:text-red-600'/></a>
          <a title='instagram' className=""><FaInstagram className='size-6 hover:fill-pink-500' /></a>
          <a title='linkdIn' className=""><FaLinkedin className='size-6 hover:fill-blue-800' /></a>
        </div>
      </nav>
    </div>
  )
}

export default FooterHome
