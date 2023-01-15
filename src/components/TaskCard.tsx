import React from 'react'
import { BsPen } from 'react-icons/bs'
import EditAndDeleteCard from './EditAndDeleteCard'
import { StatusProps } from './Task/TaskContainer'

const TaskCard = ({status, tasks}: StatusProps) => {
    return (
        <div className=''>
            <div className='group w-full h-[100px] bg-[#efefef] mt-2 rounded-md p-2 text-sm shadow-2xl text-gray-500 cursor-pointer hover:bg-gray-300 relative'>
                {tasks?.description}
                <BsPen className='absolute top-3 right-3 hidden group-hover:block text-gray-700' />
                <div className='absolute bottom-2 right-2'>
                    <EditAndDeleteCard />
                </div>
            </div>
        </div>
    )
}

export default TaskCard