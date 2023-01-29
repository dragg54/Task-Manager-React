import axios from 'axios'
import React, { useContext } from 'react'
import { useTaskContext } from '../contexts/TaskProvider'
import { WrapperDisplayContext } from '../contexts/WrapperDisplayContext'
import { requestState } from '../types/requestState'
import { Task } from '../types/task'
import { IRequest } from './usePostTask'

export function useUpdateTaskStatus() {
    const {dispatch} = useTaskContext()
    const {currentTaskId, setToggleWrapperDisplayStatus} = useContext(WrapperDisplayContext)
    function updteStatus(id: number | undefined, status: string){
        axios.patch(`http://localhost:8080/api/V1/task/${id}/status/update`, {
            status
        })
        .then((response)=>{
            dispatch({type: requestState.UPDATE_TASK_STATUS, payload:{status:status, id:currentTaskId}})
            if(setToggleWrapperDisplayStatus)
            setToggleWrapperDisplayStatus(false)
        }).catch((err)=>{
            console.log(err)
        })
            
        }
        return updteStatus
    }
export default useUpdateTaskStatus