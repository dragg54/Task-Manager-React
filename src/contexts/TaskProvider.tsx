import { ReducerWithoutAction, useContext, useReducer, useState } from "react"
import { createContext } from "react"
import { task } from "../data"
import { initialState, reducer } from "../reducers/authReducer"
import { initialTaskRequestState, taskReducer } from "../reducers/taskReducer"
import { ITaskRequestState } from "../types/taskRequestState"
import { ITaskContext } from "../types/taskStateContext"

export const TaskContext = createContext<ITaskContext>({state:initialTaskRequestState})

export const TaskContextProvider = ({children}:{children: React.ReactNode}) =>{
    const [taskState, dispatch] = useReducer(taskReducer, initialTaskRequestState)
    return(
        <TaskContext.Provider value={{state:taskState, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () =>{
    return(
       useContext(TaskContext)
    )
}