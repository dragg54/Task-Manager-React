import React from 'react'

const EditAndDeleteCard = () => {
  return (
    <div className='w-24 h-[90px] bg-white shadow-2xl px-1 py-2 flex  flex-col justify-between'>
        <p className='text-gray-500 cursor-pointer'>Edit</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-500 cursor-pointer'>Delete</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-500 cursor-pointer'>Move</p>
    </div>
  )
}

export default EditAndDeleteCard