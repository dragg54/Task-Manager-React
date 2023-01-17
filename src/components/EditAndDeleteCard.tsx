import React, { useContext } from 'react'
import { WrapperDisplayContext } from '../contexts/WrapperDisplayContext'

const EditAndDeleteCard = () => {
  const{ toggleWrapperDisplayStatus, setToggleWrapperDisplayStatus} = useContext(WrapperDisplayContext)

  function toggleWrapperStatus(){
    if(setToggleWrapperDisplayStatus){
      setToggleWrapperDisplayStatus(true)
    }
  }
  return (
    <div className='w-24 h-[90px] bg-white shadow-2xl px-1 py-2 flex  flex-col justify-between'>
        <p className='text-gray-500 cursor-pointer' onClick={()=>toggleWrapperStatus()}>Edit</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-500 cursor-pointer'>Delete</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-500 cursor-pointer'>Move</p>
    </div>
  )
}

export default EditAndDeleteCard