import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext, useAuth } from '../contexts/AuthProvider'
import { Navigate } from "react-router-dom";
import { User } from '../types/user';
import { useLogout } from '../hooks/useLogout';
import Header from '../components/Header';
import { GrTasks } from "react-icons/gr"
import { MdPeopleAlt } from "react-icons/md"
import { FcBinoculars, FcAlarmClock, FcHome } from "react-icons/fc"
import { RiCalendarTodoLine } from "react-icons/ri"
import { AiOutlineLogout } from "react-icons/ai"
import TaskContainer from '../components/Task/TaskContainer';


function Home() {
  const userAuth = useAuth()
  const logOut = useLogout()

  if (userAuth.state.user) {
    return (
      <div className='bg-[#efefef] w-screen h-screen relative'>
       
        <Header />
        <div className='w-screen h-screen flex mt-2'>
          <div className='w-[15%] h-full bg-red-100 flex flex-col items-start justify-start px-2 pt-16'>
            <ul className='h-2/5 flex flex-col justify-between w-full'>
              {/* <li className='flex items-center h-8 w-full justify-start px-4 text-gray-700'><FcHome className='mr-2 ' color="green" />
                <Link to="/dashboard" className=''>Home</Link></li> */}
              <li className='flex items-center h-8 w-full justify-start px-4 text-gray-700'><GrTasks className='mr-2 ' color="green" />
                <Link to="/dashboard/task" className=''>Task</Link></li>
              <li className='flex items-center h-8 w-full justify-start px-4 text-gray-700'><FcBinoculars className='mr-2' /> Overview </li>
              <li className='flex items-center h-8 w-full justify-start px-4 text-gray-700'><FcAlarmClock className='mr-2' /> Timeline </li>
              <li className='flex items-center h-8 w-full justify-start px-4 text-gray-700'><RiCalendarTodoLine className='mr-2 text-blue-500' /> Plans </li>
              <li className='flex items-center h-8 w-full justify-start px-4 text-gray-700 mt-20'><AiOutlineLogout className='mr-2 text-pink-600' /> Logout</li>
            </ul>
          </div>
          <div className='w-[full] h-full bg-white flex justify-center'>
              <Outlet />
          </div>
           <div className='w-full h-full absolute bg-gray-700 opacity-60'>

        </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <Navigate to="/signin" />
    )
  }

}
export default Home