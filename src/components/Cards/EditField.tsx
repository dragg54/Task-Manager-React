import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { WrapperDisplayContext } from '../../contexts/WrapperDisplayContext'
import useUpdate from '../../hooks/useUpdate'

interface EditFieldProps{
    setShowEditField: React.Dispatch<React.SetStateAction<boolean>> 
}
const EditField = ({setShowEditField}: EditFieldProps) => {
    const currentTask =  useContext(WrapperDisplayContext).currentTask!
    const setToggleWrapperDisplayStatus = useContext(WrapperDisplayContext).setToggleWrapperDisplayStatus!
    const [description, setDescription] = useState(currentTask)
    const updateTask = useUpdate()

    useEffect(()=>{
        setDescription(currentTask)
    },[currentTask])
    useEffect(()=>{
        createFocus()
    })
    function handleChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>){
        e.preventDefault()
        setDescription(e.target.value)
    }

   const editInput = useRef<HTMLTextAreaElement>(null)
    //create input field focus
   function createFocus(){
    if(editInput.current){
        editInput.current.focus()
    }
   }

  return (
    <div className='w-full h-full bg-[#efefef] p-3 flex flex-col justify-between'>
       <form action=""className='flex justify-center items-center w-full bg-[#efefef]'>
        <textarea  name="edittask" id="" cols={30} rows={5} ref ={editInput} className='bg-[#efefef] w-full border-none outline-none text-sm text-gray-600' onChange={(e)=>handleChangeDescription(e)} value={description}/>
       </form>
       <div className='flex w-full justify-end'>
        <button className='text-sm text-white p-3 bg-red-600 mr-2 font-bold rounded-md' onClick={()=>{
            setToggleWrapperDisplayStatus(false)
            setDescription(currentTask)
            setShowEditField(false)
            }}>Cancel</button>
        <button type='button' className='text-sm text-white p-3 bg-green-500 font-bold rounded-md' onClick={()=>
            {
                if(description.length > 0){
                    updateTask(description)
                    setToggleWrapperDisplayStatus(false)
                    setDescription(currentTask)
                }
            }}>Submit</button>
       </div>
    </div>
  )
}

export default EditField