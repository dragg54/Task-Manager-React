import React, { useState } from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { task } from '../../data'
import TaskCard from '../TaskCard'
import CreateTaskCardField from './CreateTaskCardField'

export interface StatusProps {
    status: string,
    tasks?:{
        id:number,
        description: string,
        status:string
    }
}


const TaskContainer = ({ status, tasks }: StatusProps) => {
    function toggleContainerStatus(taskStatus: string) {
        setShowCreateCartContainer({ ...showCreateCartContainer, [status]: !showCreateCartContainer[taskStatus]})
    }
    const [showCreateCartContainer, setShowCreateCartContainer] = useState({ todo: false, doing: false, done: false }) as any
    return (
        <div className='w-full h-fit flex flex-col items-between mt-20'>
            <div className={`w-[320px] bg-yellow-500 py-6 pb-4 px-3 mx-4 mt-3 rounded-md ${status == "todo" ? 'bg-red-300' : status == "doing" ? 'bg-orange-400' : 'bg-yellow-400'}`}>
                <h1 className='text-gray-700 font-bold text-2xl font-comfortaa'>{status}</h1>
                {
                    task.map((tasks)=>{
                        return (
                            tasks.status == status? <div key={tasks.id}><TaskCard {...{status, tasks}}/></div>: "")
                    })
                }
                
                <div> {Object.keys(showCreateCartContainer).map((taskStatus: string, index) => {
                    return taskStatus == status && showCreateCartContainer[status] == true ? <CreateTaskCardField {...{toggleContainerStatus, status}}/>: taskStatus == status?
                      <div className='w-[89px] text-sm flex justify-between items-center mt-4 text-gray-600 cursor-pointer'><BiPlusMedical onClick={() => toggleContainerStatus(status)} /> Add Task</div>
                      :""
                })}
                </div>
            </div>
        </div>
    )
}

export default TaskContainer