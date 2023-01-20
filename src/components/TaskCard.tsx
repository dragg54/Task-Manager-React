import React, { DetailedHTMLProps, HTMLAttributes, useContext, useRef, useState } from 'react'
import { BsPen } from 'react-icons/bs'
import { WrapperDisplayContext } from '../contexts/WrapperDisplayContext'
import EditAndDeleteCard from './EditAndDeleteCard'
import { StatusProps } from './Task/TaskContainer'

const TaskCard = ({status, tasks}: StatusProps) => {
    const[showEditAndDeleteCard, setShowAndDeleteCard] = useState(false)
    const cardElement= useRef<HTMLDivElement>(null)
    const {toggleWrapperDisplayStatus} = useContext(WrapperDisplayContext)
   
    function toggleEditAndCreateCard(id: number | undefined, e:any){
        if(!showEditAndDeleteCard && cardElement.current && id == tasks?.id ){
            cardElement.current.style.display = "block"
            setShowAndDeleteCard(true)
        }
    }

    return (
        <div className=''>
            <div className='group w-full h-[200px] bg-[#efefef] mt-2 rounded-md p-2 text-sm shadow-2xl text-gray-500 cursor-pointer hover:bg-gray-300 relative'>
                <p className=''>{tasks?.description}</p>
                <BsPen className='absolute top-3 right-3 hidden group-hover:block text-gray-700'  onClick={(e)=>toggleEditAndCreateCard(tasks?.id, e)}/>
                <div className={`absolute bottom-2 right-2 hidden overflow-visible`} id= {`${tasks?.id}`} ref ={cardElement} >
                    <EditAndDeleteCard {...{cardElement, tasks}}/>
                </div>
            </div>
        </div>
    )
}

export default TaskCard