import React, { DetailedHTMLProps, HTMLAttributes, useContext, useRef, useState } from 'react'
import { BsPen } from 'react-icons/bs'
import { WrapperDisplayContext } from '../../contexts/WrapperDisplayContext'
import { Task } from '../../types/task'
import EditAndDeleteCard from './EditAndDeleteCard'
import { StatusProps } from '../Layouts/TaskContainer'

interface TaskProps{
    status: string,
    tasks: Task
}

const TaskCard = ({status, tasks}: TaskProps) => {
    const[showEditAndDeleteCard, setShowAndDeleteCard] = useState(false)
    const cardElement= useRef<HTMLDivElement>(null)
    const {toggleWrapperDisplayStatus} = useContext(WrapperDisplayContext)
    const setToggleWrapperDisplayStatus = useContext(WrapperDisplayContext).setToggleWrapperDisplayStatus!
    const setCurrentTaskId = useContext(WrapperDisplayContext).setCurrentTaskId!

   
    function toggleEditAndCreateCard(id: number | undefined, e:any){
        if(!showEditAndDeleteCard && cardElement.current && id == tasks?.id ){
            cardElement.current.style.display = "block"
            setShowAndDeleteCard(true)
        }
    }

    return (
        <div className=''>
            <div className='group w-full h-fit bg-[#efefef] mt-2 rounded-md px-2 py-4 text-sm shadow-2xl text-gray-500 cursor-pointer hover:bg-gray-300 relative'>
                <p className=''>{tasks.description}</p>
                <BsPen className='absolute top-3 right-3 hidden group-hover:block text-gray-700'  onClick={(e)=>{
                    setToggleWrapperDisplayStatus(true)
                    setCurrentTaskId(tasks.id)
                }
                }/>
              {/*   <div className={`absolute z-50 -bottom-5 right-2 hidden overflow-visible`} id= {`${tasks?.id}`} ref ={cardElement} >
                    <EditAndDeleteCard {...{cardElement, tasks}}/>
                </div> */}
            </div>
        </div>
    )
}

export default TaskCard