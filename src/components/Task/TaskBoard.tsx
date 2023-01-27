import React, { Dispatch, FunctionComponent } from 'react'
import { useOutletContext } from 'react-router-dom'
import TaskContainer from './TaskContainer'

interface WrapperStatusProps{
    toggleWrapperStatus?: boolean
}
const TaskBoard= ({toggleWrapperStatus}: WrapperStatusProps) => {
    const setToggleWrapperStatus = useOutletContext()
    return (
            <div className='w-full h-full flex justify-center pl-2 bg-white overflow-scroll'>
                <div className='w-[80%] h-fit bg-white flex justify-between'>
                    <TaskContainer status="todo"/>
                    <TaskContainer status="doing" />
                    <TaskContainer status="done" />
                </div>
            </div>
    )
}

export default TaskBoard