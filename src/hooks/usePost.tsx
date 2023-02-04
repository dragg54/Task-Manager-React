import axios from "axios"
import { useTaskContext } from "../contexts/TaskProvider"
import { RequestState } from "../types/requestState"
import { Task } from "../types/task"
import { getTokFromStorage } from "../utils/helpers"

export interface IRequest{
    description: string,
    status: string
}

export const usePost = (url:string) => {
    const {state,dispatch} = useTaskContext()
    function createTask(req: IRequest) {
        axios.post(url ,req, 
        {
            headers: {
              "token": getTokFromStorage(),
            }},)
            .then((response) => {
                dispatch({type: RequestState.ADD_TASK, payload:{data: response.data}})
            }).catch((err) => {
                console.log(err)
            })
    }
    return createTask
}