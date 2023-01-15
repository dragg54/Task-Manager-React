import React from 'react'

type TaskStatusProps = {
  toggleContainerStatus:any,
  status:string
}
const CreateTaskCardField = ({toggleContainerStatus, status}: TaskStatusProps) => {
  return (
    <div className='w-100 mt-4 mb-1 flex justify-center '>
        <form action= "" className=" w-full flex flex-col justify-center">
            <textarea name="" id="" cols={44} rows={5} className='border-gray-500  outline-none bg-[#efefef] p-2 text-sm' placeholder='Add a task'>    
            </textarea>
            <button type='button' onClick={()=>toggleContainerStatus(status)} className='bg-gradient-to-r from-pink-900 to-red-400 px-2 py-2 rounded-[4px] w-2/5 text-[#efefef] text-sm mt-3 border border-gray-400'>
                <span className='opaciy-50'>Add Card</span>
            </button>
        </form>
        
    </div>
  )
}

export default CreateTaskCardField