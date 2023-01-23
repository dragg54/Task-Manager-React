import { useReducer, useState } from "react"
import { createContext } from "vm"
import { task } from "../data"
import { reducer } from "../reducers/authReducer"
import { initialTaskRequestState, taskReducer } from "../reducers/taskReducer"

export const TaskContext = createContext()

export const TaskContextProvider = ({children}:{children: React.ReactNode}) =>{
    const [taskState, dispatch] = useReducer(taskReducer, initialTaskRequestState)
    return(
        <TaskContext.Provider value={{taskState, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}