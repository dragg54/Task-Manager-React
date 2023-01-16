import React from 'react'
import TaskContainer from './TaskContainer'

const TaskBoard = () => {
    return (
        <div>
            <div className='w-[150%] h-full flex justify-center pl-2 bg-white'>
                <div className='w-[80%]  h-fit bg-white flex justify-between'>
                    <TaskContainer status="todo"/>
                    <TaskContainer status="doing" />
                    <TaskContainer status="done" />
                </div>
            </div>
        </div>
    )
}

export default TaskBoard