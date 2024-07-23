import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-full bg-gray-400 text-white font-bold flex justify-center p-4 dark:bg-slate-900'>
        <div className='flex flex-row items-center justify-center text-center gap-4'>
           <button><a href="https://www.linkedin.com/in/shivansh-saxena-0679ab22a/"><FaLinkedin size={24}/></a></button>
           <button><a href="https://x.com/ShivanshPvt69"><FaSquareXTwitter size={24}/></a></button>
           <button><a href="https://github.com/ShivVk18"><FaGithub size={24}/></a></button>
        </div>
    </div>
  )
}

export default Footer