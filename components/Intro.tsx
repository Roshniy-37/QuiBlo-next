import Image from 'next/image'
import React from 'react'

function Intro() {
  return (
    <div className='h-[92vh] w-full flex'>      
      <div className='h-full w-1/2 '>
        <div className='p-20 pl-28 h-3/4 '>
          <h1 className='text-9xl text-white'>QuiBlo</h1>
          <div className='w-full p-6 '>
            <p className='p-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium doloribus cupiditate aut labore eum asperiores culpa incidunt hic, officiis laborum error voluptatum voluptate perferendis alias, atque laboriosam ea, quas consequatur!</p>
            <p className='p-3'>Adipisci quos magnam dignissimos, unde omnis beatae voluptatibus eius eos blanditiis consequatur ex excepturi, culpa ab error at illum dicta animi tenetur. Enim odit cumque ducimus reprehenderit doloribus quos cum!</p>
          </div>
        </div>
        <div className='h-1/4 '>
          <img src="image-border.png" alt="" className='h-full' />
        </div>
        
      </div>
      <div className='w-1/2'>
        {/* <Image src={lc} alt="bottom-circle" className='h-full w-full'/> */}
        <img src="left-c.png" alt="" className='h-full w-full'/>
      </div>
    </div>
  )
}

export default Intro
