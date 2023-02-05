import axios from 'axios'
import React, { useContext } from 'react'
import { useTaskContext } from '../contexts/TaskProvider'
import { WrapperDisplayContext } from '../contexts/WrapperDisplayContext'
import { RequestState } from '../types/requestState'

const useUpdate = () => {
    const {dispatch} = useTaskContext()
    const {currentTaskId, setToggleWrapperDisplayStatus} = useContext(WrapperDisplayContext)
    function updateTask(req: string){
        axios.patch(`http://localhost:8080/api/v1/task/${currentTaskId}/update`, {description: req})
        .then((response)=>{
            dispatch({type:RequestState.UPDATE_TASK, payload: {id: currentTaskId, description: req}})
        }).catch((err)=>{
            console.log(err)
        })
    }
  return updateTask
}

export default useUpdate