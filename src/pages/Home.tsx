import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate } from "react-router-dom";


function Home(){
  const user:any = useContext(AuthContext)
  const navigate = useNavigate()
  console.log(user)
  if(user?.auth?.token){
    return<p>Welcome home</p>
  }
  else {
    return <Navigate to="/login" />;
}
}

export default Home