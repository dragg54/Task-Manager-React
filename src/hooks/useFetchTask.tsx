import axios from "axios"
import { useTaskContext } from "../contexts/TaskContext"
import { requestState } from "../types/requestState"
import { getTokFromStorage } from "../utils/helpers"

export const useFetchTask = () =>{
    const {state, dispatch} = useTaskContext()
    function getTask(url: string){
        axios.get(url, {
            headers:{
                "token": getTokFromStorage()
            }
        })
        .then((response)=>{
            dispatch({type: requestState.FETCH_REQUEST_SUCCESS, payload:{data:response?.data}})
        })
        .catch((err)=>{
            dispatch({type: requestState.FETCH_REQUEST_FAILURE, payload:{data:err.data}})
        })
       
    }
    return getTask
}