import React from 'react'
import { BsSearch } from "react-icons/bs"
import { useAuth } from '../contexts/AuthProvider'

const Header = () => {
  const {state} = useAuth()
  return (
    <div className='w-full h-20 bg-white flex items-center  justify-between px-6 shadow-[5px_5px_#efefef]'>
        <h1 className="font-marhey text-black">Husk<span className='text-red-700'>a</span></h1>
        {state.user? 
        <>
        <div className='relative'>
        <input type="text" placeholder='search' className='rounded-md h-8 w-60 border border-1 border-gray-500 p-3 outline-none text-gray-600 relative' />
        <BsSearch className='absolute top-1/3 text-gray-600 right-2 -translate-y-0.5'/>
    </div>
    <div className='w-10 h-10 bg-blue-300 rounded-full flex justify-center items-center'>SA</div> </>:""}
    </div>
  )
}

export default Header