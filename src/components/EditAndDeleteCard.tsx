import React, { Dispatch, RefObject, useContext, useEffect } from 'react'
import { WrapperDisplayContext } from '../contexts/WrapperDisplayContext'
import { Task } from '../types/Tasks'
import { changeTaskStatus } from '../utils/helpers'

interface EditAndDeleteCardProps {
  cardElement: RefObject<HTMLDivElement>
  tasks?:{
    id:number,
    description: string,
    status: string
  }
}

const EditAndDeleteCard = ({ cardElement, tasks }: EditAndDeleteCardProps) => {
  const { toggleWrapperDisplayStatus, setToggleWrapperDisplayStatus } = useContext(WrapperDisplayContext)

  function toggleWrapperStatus() {
    if (setToggleWrapperDisplayStatus) {
      setToggleWrapperDisplayStatus(true)
    }
    if (cardElement.current) {
      cardElement.current.style.display = "none"
    }
  }

  function set(){
    console.log(tasks?.status)
  }
 
 
  return (
    <div className='flex h-full  overflow-visible'>
      <div className='w-24 h-[90px] bg-white px-1 py-2 flex  flex-col justify-between -mt-14'>
        <p className='text-gray-500 cursor-pointer hover:text-black' onClick={() => toggleWrapperStatus()}>Edit</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-500 cursor-pointer hover:text-black'>Delete</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-500 cursor-pointer hover:text-black'>Move</p>
      </div>
      <div className='w-20 self-end h-20 bg-white  shadow-2xl px-1 py-2 flex  flex-col justify-between'>
        <p className='text-gray-500 cursor-pointer hover:text-black' onClick={() => changeTaskStatus(tasks, "todo")}>Todo</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-500 cursor-pointer hover:text-black'  onClick={() => changeTaskStatus(tasks, "doing")!}>Doing</p>
        <div className='w-full h-[0.2px] bg-gray-300 shadow-md'></div>
        <p className='text-gray-500 cursor-pointer hover:text-black ' onClick={() => changeTaskStatus(tasks, "done")!}>Done</p>
      </div>
    </div>
  )
}

export default EditAndDeleteCard