import React, { ChangeEvent, FormEvent, useState } from 'react'
import Header from '../components/Layouts/Header'
import {useLogin} from "../hooks/useLogin"
import { User } from '../types/user'

const Login = () => {
    let [value, setValue] = useState<User>({email: "", password: "" })
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    const postUser = useLogin()
    const handleSubmit =(e:FormEvent) =>{
        e.preventDefault()
        postUser("http://localhost:8080/api/v1/user/login", value)
    }
    return (
        <div className="w-[100wh] h-[100vh] flex flex-col justify-start items-center bg-[#efefef] relative">
            <div className='self-start w-full'>
                <Header />
            </div>
            <form action="" onSubmit={(e)=>handleSubmit(e)} className='w-[550px] absolute top-1/2 -translate-y-1/2 h-[280px]  bg-bgImg  bg-contain bg-no-repeat bg-right py-6 px-4 flex justify-between items-start flex-col bg-white rounded-lg'>
                <h1 className='text-red-600 font-extrabold text-xl'>Sign In</h1>
                <input type="email" placeholder='Enter email' onChange={(e) => handleChange(e)}  value={value.email} name='email' className='h-10 w-1/3 bg-red-100 p-3 rounded-md outline-none border-none text-gray-500' />
                <input type="password" placeholder='Enter password' onChange={(e) => handleChange(e)}  value={value.password} name='password' className='h-10 w-1/3 bg-red-100 p-3 rounded-md outline-none border-none text-gray-500' />
                <button type='submit' className='w-1/3 bg-red-400 text-white text-lg rounded-normal p-2 rounded-md outline-none border-none shadow-2xl font-bold'>submit</button>
                <small className='text-gray-500'>Forgot your password? <span className='font-bold'>Click here</span></small>
            </form>
        </div>
    )
}

export default Login