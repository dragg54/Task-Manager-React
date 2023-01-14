import React from 'react'
import TaskContainer from './TaskContainer'

const TaskBoard = () => {
    return (
        <div>
            <div className='w-[111%] h-full bg-white flex justify-center'>
                <div className='w-[90%]  h-fit bg-white flex justify-start'>
                    <TaskContainer status="todo" />
                    <TaskContainer status="doing" />
                    <TaskContainer status="done" />
                </div>
            </div>
        </div>
    )
}

export default TaskBoard