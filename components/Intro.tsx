import Image from 'next/image'
import React from 'react'
import lc from '@/public/left-c.svg'
import bc from '@/public/bottom-circle.svg'


function Intro() {
  return (
    <div className='h-[92vh] w-full flex'>      
      <div className='h-full w-2/3 '>
        <div className=' p-28'>
          <h1 className='text-9xl text-white'>QuiBlo</h1>
          <div className='w-full py-6 text-2xl '>
            <p className='p-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium doloribus cupiditate aut labore eum asperiores culpa incidunt hic, officiis laborum error voluptatum voluptate perferendis alias, atque laboriosam ea, quas consequatur!</p>
            <p className='p-3'>Adipisci quos magnam dignissimos, unde omnis beatae voluptatibus eius eos blanditiis consequatur ex excepturi, culpa ab error at illum dicta animi tenetur. Enim odit cumque ducimus reprehenderit doloribus quos cum!</p>
          </div>
        </div>
        
      </div>
      <div className='w-1/3'>
        <Image src={lc} alt="bottom-circle" className='h-full w-full'/>
      </div>
    </div>
  )
}

export default Intro
