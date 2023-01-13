import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext, useAuth } from '../contexts/AuthProvider'
import { Navigate } from "react-router-dom";
import { User } from '../types/user';


function Home() {
  const user = useAuth()
  const navigate = useNavigate()
 
  console.log(user)

  if (user.state.user) {
    return (
      <>
        <p>welcome</p>
        <button onClick={() => logOut()}>Log Out</button>
      </>
    )
  }

  else {
    return (
      <Navigate to="/signin"/>
     )
  }



  function logOut() {
    navigate("/signin")
    localStorage.removeItem("token")
  }
  
/* 
  */



}
export default Home