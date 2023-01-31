import axios from "axios"
import { useContext } from "react"
import { useTaskContext } from "../contexts/TaskProvider"
import { WrapperDisplayContext } from "../contexts/WrapperDisplayContext"
import { RequestState } from "../types/requestState"

export function useDelete(url: string) {
   const { dispatch } = useTaskContext()
   const currentTaskId = useContext(WrapperDisplayContext).currentTaskId
   return function deleteItem(){
    return axios.delete(url)
       .then((response) => {
           dispatch({type:RequestState.DELETE_TASK, payload:{id: currentTaskId}})
       })
}
   }