import React, { useEffect, useState } from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { useTaskContext } from '../../contexts/TaskProvider'
import { task } from '../../data'
import { useFetchTask } from '../../hooks/useFetchTask'
import { Task } from '../../types/task'
import TaskCard from '../Cards/TaskCard'
import CreateTaskCardField from '../Cards/CreateTaskCard'

export interface StatusProps {
    status: string
}


const TaskContainer = ({ status }: StatusProps) => {
    const taskState = useTaskContext().state!
    const getTasks = useFetchTask()
    useEffect(()=>{
        getTasks()
    }, [taskState.loading])
    function toggleContainerStatus(taskStatus: string) {
        setShowCreateCartContainer({ ...showCreateCartContainer, [status]: !showCreateCartContainer[taskStatus] })
    }
    const [showCreateCartContainer, setShowCreateCartContainer] = useState({ todo: false, doing: false, done: false }) as any
    if(!taskState.loading && taskState.data.length == 0){
        return <></>
    }
    if (!taskState.loading && taskState.data.length) {
        return (
            <div className='w-full h-fit flex flex-col items-between mt-10'>
                <div className={`w-[320px] bg-yellow-500 py-6 pb-4 px-3 mx-4 mt-3 rounded-md ${status === "todo" ? 'bg-red-200' : status === "doing" ? 'bg-orange-200' : 'bg-green-200'}`}>
                    <h1 className='text-gray-700 font-bold text-2xl font-comfortaa'>{status}</h1>
                    {
                        taskState.data.map((tasks) => {
                            return (
                                <div key={tasks.id}>
                                    {tasks.status == status ? <TaskCard {...{ status, tasks }} /> : ""}
                                </div>
                            )
                        })
                    }
                    <div> {Object.keys(showCreateCartContainer).map((taskStatus: string, index) => {
                        return taskStatus === status && showCreateCartContainer[status] === true ? <CreateTaskCardField {...{ toggleContainerStatus, status }} /> : taskStatus == status ?
                            <div className='w-[89px] text-sm flex justify-between items-center mt-4 text-gray-600 cursor-pointer'><BiPlusMedical onClick={() => toggleContainerStatus(status)} /> Add Task</div>
                            : ""
                    })}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <p></p>
    }

}

export default TaskContainer