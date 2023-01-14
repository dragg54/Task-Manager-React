import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { User } from '../types/user'

const SignUp = () => {
    let [value, setValue] = useState<User>({firstName:"", lastName:"", email: "", password: "" })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    const postUser = useSignup()
    const handleSubmit =(e:FormEvent) =>{
        e.preventDefault()
        postUser("http://localhost:8080/api/v1/user/new", value)
    }
    return (
        <div className='w-[100wh] h-[100vh] flex justify-center items-center bg-[#efefef]'>
            <form action="" onSubmit={(e)=>handleSubmit(e)} className='w-[500px] h-[400px] py-6 px-4 flex justify-between items-start flex-col bg-white rounded-lg'>
                <h1 className='text-purple-600 font-extrabold text-xl'>Sign Up</h1>
                <input type="text" placeholder='Enter first name' onChange={(e) => handleChange(e)}  value={value.firstName} name='firstName' className='h-10 w-full bg-purple-100 p-3 rounded-md outline-none border-none text-gray-500' />
                <input type="text" placeholder='Enter last name' onChange={(e) => handleChange(e)}  value={value.lastName} name='lastName' className='h-10 w-full bg-purple-100 p-3 rounded-md outline-none border-none text-gray-500' />
                <input type="email" placeholder='Enter email' onChange={(e) => handleChange(e)}  value={value.email} name='email' className='h-10 w-full bg-purple-100 p-3 rounded-md outline-none border-none text-gray-500' />
                <input type="password" placeholder='Enter password' onChange={(e) => handleChange(e)}  value={value.password} name='password' className='h-10 w-full bg-purple-100 p-3 rounded-md outline-none border-none text-gray-500' />
                <button type='submit' className='w-full bg-purple-400 text-white text-lg rounded-normal p-2 rounded-md outline-none border-none shadow-2xl font-bold'>submit</button>
                <small className='text-gray-500'>Already have an account? <span className='font-bold'>Sign in</span></small>
            </form>
        </div>
    )
}

export default SignUp