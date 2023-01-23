import axios from "axios"
import { Task } from "../types/Tasks"
import { getTokFromStorage } from "../utils/helpers"

export interface IRequest{
    description: string,
    status: string
}

export const usePostTask = () => {
    function createTask(req: IRequest) {
        axios.post("http://localhost:8080/api/V1/task/new" ,req, 
        {
            headers: {
              "token": getTokFromStorage(),
            }},)
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })
    }
    return createTask
}