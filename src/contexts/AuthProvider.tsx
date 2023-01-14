import React, { Children, createContext, useContext, useReducer } from 'react'
import { initialState, reducer } from '../reducers/authReducer'
import { ContextValue } from '../types/authContext'

export const AuthContext = createContext<ContextValue>({state: initialState})
const AuthProvider = ({children}:{children: React.ReactNode}) => {
    const[state, dispatch] = useReducer(reducer, initialState) 
  
  return (
    <AuthContext.Provider value={{state, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () =>{
  return useContext(AuthContext)
}

export default AuthProvider