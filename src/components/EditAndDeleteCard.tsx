import React from 'react'

const EditAndDeleteCard = () => {
  return (
    <div className='w-24 h-[60px] bg-white shadow-2xl p-1  flex-col justify-between hidden'>
        <p className='text-gray-500 cursor-pointer'>Edit</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-500 cursor-pointer'>Delete</p>
    </div>
  )
}

export default EditAndDeleteCard