import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div className='w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 flex-col gap-6' name="Home">
      <div className='text-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4'>
          Hi, I'm <span className='text-purple-500 font-bold'>Shivansh Saxena</span>
        </h1>
        <TypeAnimation
          sequence={[
            'Welcome To',
            2000,
            'My Portfolio',
            1000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-purple-500'
        />

      </div>

      <div >
        <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mb-2 relative hover:scale-110 transition-all duration-200'>Resume<span className='absolute top-[0.80rem] right-1 text-white'><FaArrowRight size={13}/></span></button>
      </div>
    </div>
  )
}

export default Home