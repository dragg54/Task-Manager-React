import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext, useAuth } from '../contexts/AuthProvider'
import { Navigate } from "react-router-dom";
import { User } from '../types/user';
import { useLogout } from '../hooks/useLogout';
import Header from '../components/Header';
import {FiHome} from 'react-icons/fi'
import { GrTasks } from "react-icons/gr"
import { FcBinoculars, FcAlarmClock, FcHome } from "react-icons/fc"
import { RiCalendarTodoLine } from "react-icons/ri"
import { AiOutlineLogout } from "react-icons/ai"
import { WrapperDisplayContext, WrapperDisplayContextProvider } from '../contexts/WrapperDisplayContext';
import { useTaskContext } from '../contexts/TaskContext';


const Home = () => {
  const userAuth = useAuth()
  const logOut = useLogout()
  const { toggleWrapperDisplayStatus, setToggleWrapperDisplayStatus } = useContext(WrapperDisplayContext)
  const{state, dispatch} = useTaskContext()
  if (userAuth.state.user) {
    return (
    
        <div className='bg-[#efefef] w-full h-screen relative'>
          <Header />
          <div className=' flex mt-2 w-full h-full justify-center'>
            <div className='w-[15%] h-full bg-red-300 flex flex-col items-start justify-start px-2 pt-16'>
              <ul className='h-1/2 flex flex-col justify-between w-full'>
              <li className='flex items-center h-8 w-full justify-start px-4 text-black hover:text-black'>
                <div className='p-2 bg-purple-500 text-white flex justify-center items-center font-extrabold mr-2 shadow-[3px_3px_gray] rounded-md'>P</div>
                  <h1 className='font-extrabold text-gray-800'>Project</h1></li>
                  <div className='w-full h-1 bg-gray-900 my-2 opacity-20'>
                  </div>
              <li className='flex items-center h-8 w-full justify-start px-4 text-gray-700 hover:text-black'><FiHome className='mr-2 ' color="purple" />
                  <Link to="/" className=''>Home</Link></li>
                <li className='flex items-center h-8 w-full justify-start px-4 text-gray-700 hover:text-black'><GrTasks className='mr-2 ' color="green" />
                  <Link to="/dashboard/task" className=''>Task</Link></li>
                <li className='flex items-center h-8 w-full justify-start px-4 text-gray-700 hover:text-black'><FcBinoculars className='mr-2' /> Overview </li>
                <li className='flex items-center h-8 w-full justify-start px-4 text-gray-700 hover:text-black'><RiCalendarTodoLine className='mr-2 text-blue-500' /> Plans </li>
                <li className='flex items-center h-8 w-full justify-start px-4 text-gray-700 hover:text-black mt-20'><AiOutlineLogout className='mr-2 text-pink-600' /> Logout</li>
              </ul>
            </div>
            <div className='w-[100%] bg-gray-100 h-full flex justify-center'>
              <Outlet />
            </div>
            <div className={`w-full h-[90%] justify-center items-center absolute bg-[rgba(105,105,105,0.4)] ${toggleWrapperDisplayStatus ? 'flex' : 'hidden'}`}>
              <div className='w-1/3 h-1/3 bg-white -mt-20'>

              </div>
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