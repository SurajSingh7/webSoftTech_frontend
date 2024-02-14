import React from 'react'

export const SecretPostCard = ({title,content}) => {


  return (

    <div>
    <div className='w-[90%] md:w-[60%] bg-richblack-50 m-auto mt-5 p-6 shadow-lg rounded-md'>
   
        <div class="uppercase tracking-wide text-sm text-richblack-900 font-semibold flex">
              <h1 className='mx-auto shadow-[10px_-5px_20px_-7px] shadow-caribbeangreen-100 rounded-md text-xs md:text-sm'> 
                 {"Secret Post title: "} { (title.length>11)?(title.slice(0,12)):title}
              </h1>
        </div>

        <p class="mt-2 text-slate-500 ">{content}</p>

    </div>
    </div>

  )
}
