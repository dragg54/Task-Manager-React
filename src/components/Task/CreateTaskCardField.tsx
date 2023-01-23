import React, { ChangeEvent, FormEvent, useState } from 'react'
import { IRequest, usePostTask } from '../../hooks/usePostTask'

type TaskStatusProps = {
  toggleContainerStatus:any,
  status:string
}

const CreateTaskCardField = ({toggleContainerStatus, status}: TaskStatusProps) => {
  const [descriptionInputValue, setDescriptionInputValue] = useState<IRequest>({description:"", status: "todo"})
  const createTask = usePostTask()

  //handles description input field change
  function handleDescrInputChange(e: ChangeEvent<HTMLTextAreaElement>){
    setDescriptionInputValue({description: e.target.value, status: status})
  }

  function postTask(){
    setTimeout(()=>{
      createTask(descriptionInputValue)
    }, 1000)
  }

  //submits request to server
  function submitTaskForm(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    createTask(descriptionInputValue)
    window.location.reload()
   
  }

  return (
    <div className='w-100 mt-4 mb-1 flex justify-center '>
        <form action= "" className=" w-full flex flex-col justify-center" onSubmit={(e)=>{submitTaskForm(e)}}>
            <textarea name="description" id="" cols={44} rows={5} value={descriptionInputValue.description} onChange={(e)=>{handleDescrInputChange(e)}} className='border-gray-500  outline-none bg-[#efefef] p-2 text-sm' placeholder='Add a task'>    
            </textarea>
            <button type='button' onClick={()=>{postTask()}} className='bg-gradient-to-r from-pink-900 to-red-400 px-2 py-2 rounded-[4px] w-2/5 text-[#efefef] text-sm mt-3 border border-gray-400'>
                <span className='opaciy-50'>Add Card</span>
            </button>
        </form>
        
    </div>
  )
}

export default CreateTaskCardField