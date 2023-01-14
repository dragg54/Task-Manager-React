import React, { useState } from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import TaskCard from '../TaskCard'
import CreateTaskCard from './CreateTaskCard'

interface StatusProps {
    status: string
}


const TaskContainer = ({ status }: StatusProps) => {
    function showCreateContainer(taskStatus:string){
       setShowCreateCartContainer({taskStatus: true})
       }
const[showCreateCartContainer, setShowCreateCartContainer] =useState({todo:false, doing: false, done:false})
    return (
        <div className='w-full h-fit flex flex-col items-center justify-center'>
            <div className={`w-[350px] bg-yellow-500 py-6 pb-4 px-3 mx-4 mt-3 rounded-md ${status == "todo" ? 'bg-red-300' : status == "doing" ? 'bg-orange-400' : 'bg-yellow-400'}`}>
                <h1 className='text-gray-700 font-bold text-2xl font-comfortaa'>{status}</h1>
                <TaskCard />
                <div className='w-[86px] flex justify-between items-center mt-4 text-gray-600 cursor-pointer'><BiPlusMedical onClick={()=>showCreateContainer(status)}/> Add Task</div>
                <div className={`${? 'block': 'hidden'}`}>
                <CreateTaskCard/>
                </div>
            
            </div>
        </div>
    )
}

export default TaskContainer