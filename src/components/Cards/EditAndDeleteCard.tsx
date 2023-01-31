import React, { Dispatch, RefObject, useContext, useEffect, useRef, useState } from 'react'
import { useTaskContext } from '../../contexts/TaskProvider'
import { WrapperDisplayContext } from '../../contexts/WrapperDisplayContext'
import useUpdateTaskStatus from '../../hooks/useUpdateTaskStatus'
import { AiOutlineDelete, AiOutlineArrowRight } from "react-icons/ai"
import { FaEdit } from "react-icons/fa"
import { GiPush } from "react-icons/gi"
import { useDelete } from '../../hooks/useDelete'

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

  //function to open and close edit and delete container
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

  function closeDestinationContainer() {
    if (destintationContainer.current) {
      destintationContainer.current.style.display = ""
    }
  }

  const currentTaskId = useContext(WrapperDisplayContext).currentTaskId
  const updateTaskStatus = useUpdateTaskStatus()
  const deleteTask = useDelete(`http://localhost:8080/api/V1/task/${currentTaskId}/delete`)

  return (
    <div className='flex h-fit  overflow-visible'>
      <div className='w-24 h-[90px] bg-gray-700 px-1 py-2 flex  flex-col justify-between -mt-14'>
        <p className='text-gray-200 cursor-pointer hover:text-black flex items-center justify-start' onClick={() => toggleWrapperStatus()}><FaEdit className='mr-2' />Edit</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-200 cursor-pointer hover:text-black flex items-center justify-start' onClick={() => {
          deleteTask()
          if (setToggleWrapperDisplayStatus) setToggleWrapperDisplayStatus(false)
          closeDestinationContainer()
        }}><AiOutlineDelete className='mr-2' />Delete</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-200 cursor-pointer hover:text-black flex items-center justify-start' onClick={() => showDestinationContainer()}><AiOutlineArrowRight className='mr-2' />Move</p>
      </div>
      <div className='w-20 self-end h-20 bg-gray-700  shadow-2xl px-1 py-2  hidden  flex-col justify-between' ref={destintationContainer}>
        <p className='text-gray-200 cursor-pointer hover:text-black' onClick={() => {
          updateTaskStatus(currentTaskId, "todo")
          if (setToggleWrapperDisplayStatus) setToggleWrapperDisplayStatus(false)
          closeDestinationContainer()
        }}>Todo</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-200 cursor-pointer hover:text-black' onClick={() => {
          updateTaskStatus(currentTaskId, "doing")!
          if (setToggleWrapperDisplayStatus) setToggleWrapperDisplayStatus(false)
          closeDestinationContainer()
        }}>Doing</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-200 cursor-pointer hover:text-black ' onClick={() => {

          updateTaskStatus(currentTaskId, "done")!
          if (setToggleWrapperDisplayStatus) setToggleWrapperDisplayStatus(false)
          closeDestinationContainer()
        }}>Done</p>

      </div>
    </div>
  )
}

export default EditAndDeleteCard