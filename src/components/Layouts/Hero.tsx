import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()

    function navigateToTaskPage(){
        navigate("/dashboard/task")
    }
  return (
    <div className='w-full h-full flex justify-around'>
        <div className='w-1/2 h-full text-gray-800 p-20 flex flex-col justify-start items-start mt-20'>
            <h1 className='font-extrabold text-[3rem] leading-[50px]'>Huska Project Planner</h1>
            <h4 className='mt-10 text-gray-500'>Plan and collaborate with your team to achieve a productive workstyle</h4>
            <button className='mt-4 font-bold py-2 px-4 bg-red-400 self-start text-white' onClick={()=>navigateToTaskPage()}>Get Started</button>
        </div>
       <div className='w-1/2 h-full object-cover'>
       <img src="../../assets/imgs/hero.png" alt="" />
       </div>
    </div>
  )
}

export default Hero