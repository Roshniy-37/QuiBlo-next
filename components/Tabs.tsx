import React from 'react'

import { TbBulb } from "react-icons/tb";
import { BsQuestionLg } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";


function Tabs() {
  return (
    <div className='h-[92vh] w-full border-b flex justify-center items-center'>
      <div className="bg-[#E57494] h-fit text-white w-72 py-8 rounded-2xl shadow-md shadow-black cursor-pointer duration-300 hover:scale-110 ">
        <h1 className="font-bold text-2xl text-center">Create Quiz</h1>
        <p className=" text-center my-4 mx-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nihil iusto molestias officiis. Labore iure blanditiis, accusamus enim vel sint repellat quos.</p>
        <BsQuestionLg className='size-28 w-full' />
      </div>

      <div className="bg-[#E57494] h-fit text-white w-72 py-8 rounded-2xl shadow-md shadow-black cursor-pointer duration-300 hover:scale-110 ">
        <h1 className="font-bold text-2xl text-center">Play Quiz</h1>
        <p className=" text-center my-4 mx-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nihil iusto molestias officiis. Labore iure blanditiis, accusamus enim vel sint repellat quos.</p>
        <TbBulb className='size-28 w-full' />
      </div>

      <div className="bg-[#E57494] h-fit text-white w-72 py-8 rounded-2xl shadow-md shadow-black cursor-pointer duration-300 hover:scale-110 ">
        <h1 className="font-bold text-2xl text-center">Blog</h1>
        <p className="text-center my-4 mx-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nihil iusto molestias officiis. Labore iure blanditiis, accusamus enim vel sint repellat quos.</p>
        <FaBloggerB className='size-28 w-full' />
      </div>
    </div>
  )
}

export default Tabs
