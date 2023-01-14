import React from 'react'

const CreateTaskCard = () => {
  return (
    <div className='w-100 mt-4 mb-4 flex flex-col justify-center items-center '>
        <form action="w-full bg-white mx-auto">
            <textarea name="" id="" cols={44} rows={5} className='border-gray-500  outline-none bg-[#efefef] p-2 text-sm' placeholder='Add a task'>
                
            </textarea>
            <button className='bg-purple-500 px-2 py-2 rounded-[4px] text-white text-sm mt-3 shadow-[10px 10px gray]'>
                Add Card
            </button>
        </form>
        
    </div>
  )
}

export default CreateTaskCard