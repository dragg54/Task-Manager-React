import React, { useContext, useEffect, useState } from 'react'
import { WrapperDisplayContext } from '../../contexts/WrapperDisplayContext'
import useUpdate from '../../hooks/useUpdate'

const EditField = () => {
    const currentTask =  useContext(WrapperDisplayContext).currentTask!
    const setToggleWrapperDisplayStatus = useContext(WrapperDisplayContext).setToggleWrapperDisplayStatus!
    const [description, setDescription] = useState(currentTask)
    const updateTask = useUpdate()

    useEffect(()=>{
        setDescription(currentTask)
    },[currentTask])
    function handleChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>){
        e.preventDefault()
        setDescription(e.target.value)
    }

  return (
    <div className='w-full h-full bg-[#efefef] p-3 flex flex-col justify-between'>
       <form action=""className='flex justify-center items-center w-full bg-[#efefef]'>
        <textarea name="" id="" cols={30} rows={5} autoFocus className='bg-[#efefef] w-full border-none outline-none text-sm text-gray-600' onChange={(e)=>handleChangeDescription(e)} value={description}></textarea>
       </form>
       <div className='flex w-full justify-end'>
        <button className='text-sm text-white p-3 bg-red-600 mr-2 font-bold rounded-md' onClick={()=>setToggleWrapperDisplayStatus(false)}>Cancel</button>
        <button type='button' className='text-sm text-white p-3 bg-green-500 font-bold rounded-md' onClick={()=>
            {
                if(description.length > 0){
                    updateTask(description)
                    setToggleWrapperDisplayStatus(false)
                    setDescription("")
                }
            }}>Submit</button>
       </div>
    </div>
  )
}

export default EditField