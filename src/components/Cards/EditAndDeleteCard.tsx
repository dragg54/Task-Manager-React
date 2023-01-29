import React, { Dispatch, RefObject, useContext, useEffect, useRef } from 'react'
import { useTaskContext } from '../../contexts/TaskProvider'
import { WrapperDisplayContext } from '../../contexts/WrapperDisplayContext'
import useUpdateTaskStatus from '../../hooks/useUpdateTaskStatus'
import { Task } from '../../types/task'
import { changeTaskStatus } from '../../utils/helpers'

interface EditAndDeleteCardProps {
  tasks?: {
    id: number,
    description: string,
    status: string
  }
}

const EditAndDeleteCard = () => {
  const { toggleWrapperDisplayStatus, setToggleWrapperDisplayStatus } = useContext(WrapperDisplayContext)

  //ref individual destination container
  const destintationContainer = useRef<HTMLDivElement>(null)

  //function to open and close wrapper
  function toggleWrapperStatus() {
    if (setToggleWrapperDisplayStatus) {
      setToggleWrapperDisplayStatus(true)
    }
  }

  //toggle destination container display
  function showDestinationContainer() {
    if (destintationContainer.current) {
      destintationContainer.current.style.display = "flex"
    }
  }

  const currentTaskId = useContext(WrapperDisplayContext).currentTaskId
  const updateTaskStatus = useUpdateTaskStatus()
  return (
    <div className='flex h-fit  overflow-visible'>
      <div className='w-24 h-[90px] bg-gray-700 px-1 py-2 flex  flex-col justify-between -mt-14'>
        <p className='text-gray-200 cursor-pointer hover:text-black' onClick={() => toggleWrapperStatus()}>Edit</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-200 cursor-pointer hover:text-black'>Delete</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-200 cursor-pointer hover:text-black' onClick={() => showDestinationContainer()}>Move</p>
      </div>
      <div className='w-20 self-end h-20 bg-gray-700  shadow-2xl px-1 py-2  hidden  flex-col justify-between' ref={destintationContainer}>
        <p className='text-gray-200 cursor-pointer hover:text-black' onClick={() => {
          updateTaskStatus(currentTaskId, "todo")
          if(setToggleWrapperDisplayStatus)setToggleWrapperDisplayStatus(false)
        }}>Todo</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-200 cursor-pointer hover:text-black' onClick={() =>{
           updateTaskStatus(currentTaskId, "doing")!
           if(setToggleWrapperDisplayStatus)setToggleWrapperDisplayStatus(false)
           }}>Doing</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-200 cursor-pointer hover:text-black ' onClick={() =>{

          updateTaskStatus(currentTaskId, "done")!
          if(setToggleWrapperDisplayStatus)setToggleWrapperDisplayStatus(false)
          }}>Done</p>
        
      </div>
    </div>
  )
}

export default EditAndDeleteCard