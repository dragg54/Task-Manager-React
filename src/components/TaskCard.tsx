import React, { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react'
import { BsPen } from 'react-icons/bs'
import EditAndDeleteCard from './EditAndDeleteCard'
import { StatusProps } from './Task/TaskContainer'

const TaskCard = ({status, tasks}: StatusProps) => {
    const[showEditAndDeleteCard, setShowAndDeleteCard] = useState(false)
    const cardElement= useRef<HTMLDivElement>(null)
    function toggleEditAndCreateCard(id: number | undefined){
        if(id == tasks?.id && cardElement.current){
            console.log()
            cardElement.current.style.display = "block"
        }
    }
    return (
        <div className=''>
            <div className='group w-full h-[100px] bg-[#efefef] mt-2 rounded-md p-2 text-sm shadow-2xl text-gray-500 cursor-pointer hover:bg-gray-300 relative'>
                <p className=''>{tasks?.description}</p>
                <BsPen className='absolute top-3 right-3 hidden group-hover:block text-gray-700' onClick={()=>toggleEditAndCreateCard(tasks?.id)}/>
                <div className='absolute bottom-2 right-2 hidden' id= {`${tasks?.id}`} ref ={cardElement}>
                    <EditAndDeleteCard />
                </div>
            </div>
        </div>
    )
}

export default TaskCard