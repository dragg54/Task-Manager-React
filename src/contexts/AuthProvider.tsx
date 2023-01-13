import React, { Children, createContext, ReducerWithoutAction, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { initialState, reducer } from '../reducers/authReducer'
import { ContextValue } from '../types/auth'
import { State } from '../types/reducerState'
import { Auth, User } from '../types/user'
import { getTokFromStorage } from '../utils/helpers'

export const AuthContext = createContext<ContextValue>({state: initialState})
const AuthProvider = ({children}:{children: React.ReactNode}) => {
    const[isLoading, setIsLoading] = useState<boolean>(true) 
    const[user, setUser] = useState("")
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