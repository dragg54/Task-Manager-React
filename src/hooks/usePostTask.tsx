import axios from "axios"
import { useTaskContext } from "../contexts/TaskProvider"
import { requestState } from "../types/requestState"
import { Task } from "../types/task"
import { getTokFromStorage } from "../utils/helpers"

export interface IRequest{
    description: string,
    status: string
}

export const usePostTask = () => {
    const {dispatch} = useTaskContext()
    function createTask(req: IRequest) {
        axios.post("http://localhost:8080/api/V1/task/new" ,req, 
        {
            headers: {
              "token": getTokFromStorage(),
            }},)
            .then((response) => {
                dispatch({type: requestState.FETCH_REQUEST_SUCCESS, payload:{data: response?.data.data}})
            }).catch((err) => {
                console.log(err)
            })
    }
    return createTask
}