import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full h-screen bg-neutral-100'>
      <div className='flex justify-center items-center flex-col pt-[10vh] relative'>

        {/* Question */}
        <div className='space-y-6 text-center bg-[#7560EE]/20 px-[38vw] py-[6vh] absolute top-0'>
            <h1 className='text-6xl font-bold'>Question 1</h1>
            <p className='text-2xl font-medium'>What is the capital of France?</p>
        </div>

        {/* Choices */}
        <div className='flex justify-center px-40 pt-[24vh] z-40'>
            <div className='grid grid-cols-2 gap-10'>
                <div className='border shadow-sm bg-neutral-50 rounded-xl py-16 px-40 flex justify-center items-center  hover:bg-[#7560EE]/80 hover:text-white transition-all duration-150'>
                    <p className='text-2xl font-medium'>Paris</p>
                </div>
                <div className='border shadow-sm bg-neutral-50 rounded-xl py-16 px-40 flex justify-center items-center  hover:bg-[#7560EE]/80 hover:text-white transition-all duration-150'>
                    <p className='text-2xl font-medium'>Athens</p>
                </div>
                <div className='border shadow-sm bg-neutral-50 rounded-xl py-16 px-40 flex justify-center items-center  hover:bg-[#7560EE]/80 hover:text-white transition-all duration-150'>
                    <p className='text-2xl font-medium'>Tokyo</p>
                </div>
                <div className='border shadow-sm bg-neutral-50 rounded-xl py-16 px-40 flex justify-center items-center  hover:bg-[#7560EE]/80 hover:text-white transition-all duration-150'>
                    <p className='text-2xl font-medium'>Delhi</p>
                </div>
            </div>
        </div>

        {/* Buttons */}
        <div className='flex justify-center items-center gap-2 pt-10'>
            <Button className='font-bold' variant={'outline'}><ChevronLeft size={28} className='text-[#7560EE]' /></Button>
            <Button className='px-12 bg-[#7560EE] hover:bg-[#7560EE]/80 font-bold text-lg'>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Page
