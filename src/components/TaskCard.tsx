import React from 'react'
import { BsPen } from 'react-icons/bs'

const TaskCard = () => {
    return (
        <div className=''>
            <div className='group w-full h-[100px] bg-[#efefef] mt-2 rounded-md p-2 text-sm shadow-2xl text-gray-600 cursor-pointer hover:bg-gray-300 relative'>
                TaskCard
                <BsPen className='absolute top-3 right-3 hidden group-hover:block text-gray-700' />
            </div>
            <div className='group w-full h-[100px] bg-[#efefef] mt-2 rounded-md p-2 text-sm shadow-2xl text-gray-600 cursor-pointer hover:bg-gray-300 relative'>
                TaskCard
                <BsPen className='absolute top-3 right-3 hidden group-hover:block text-gray-700' />
            </div>
        </div>
    )
}

export default TaskCard