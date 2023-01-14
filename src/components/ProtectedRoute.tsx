import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider'

export const ProtectedRoute = () => {
    
    const user = useAuth()
    const navigate = useNavigate()
    function logOut() {
        navigate("/signin")
        localStorage.removeItem("token")
      }
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
}
