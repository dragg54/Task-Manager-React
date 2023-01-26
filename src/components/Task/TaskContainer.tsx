import React, { useEffect, useState } from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { useTaskContext } from '../../contexts/TaskContext'
import { task } from '../../data'
import { useFetchTask } from '../../hooks/useFetchTask'
import TaskCard from '../TaskCard'
import CreateTaskCardField from './CreateTaskCardField'

export interface StatusProps {
    status: string
}


const TaskContainer = ({ status }: StatusProps) => {
    const getTask = useFetchTask()
    const { state } = useTaskContext()
    useEffect(() => {
        getTask("http://localhost:8080/api/V1/tasks")
    }, [state.loading])
    console.log(state)
    function toggleContainerStatus(taskStatus: string) {
        setShowCreateCartContainer({ ...showCreateCartContainer, [status]: !showCreateCartContainer[taskStatus] })
    }
    const [showCreateCartContainer, setShowCreateCartContainer] = useState({ todo: false, doing: false, done: false }) as any
    if(state.loading) return <p></p>
    else{
        return (
        <div className='w-full h-fit flex flex-col items-between mt-20'>
            <div className={`w-[320px] bg-yellow-500 py-6 pb-4 px-3 mx-4 mt-3 rounded-md ${status === "todo" ? 'bg-red-200' : status === "doing" ? 'bg-orange-200' : 'bg-green-200'}`}>
                <h1 className='text-gray-700 font-bold text-2xl font-comfortaa'>{status}</h1>
                {
                  state.data && state.data.map((tasks) => {
                        return (
                            <div key={tasks.id}>
                                 <TaskCard {...{ status, tasks }}/>: ""
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
}

export default TaskContainer