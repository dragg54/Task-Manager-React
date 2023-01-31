import { ReducerWithoutAction } from "react"
import { RequestState as RequestState } from "../types/requestState"
import { Task } from "../types/task"
import { ITaskRequestState } from "../types/taskRequestState"

export const initialTaskRequestState: ITaskRequestState = {
    loading: true,
    data: [],
    err: ""
}


export const taskReducer = (taskState: ITaskRequestState, action: any): ITaskRequestState => {
    switch (action.type) {
        case RequestState.FETCH_REQUEST_SUCCESS:
            return {
                ...taskState, loading: false, data: action.payload.data, err: ""
            }

        case RequestState.FETCH_REQUEST_FAILURE:
            return {
                ...taskState, loading: false, data: [], err: action.payload.err
            }

        case RequestState.ADD_TASK:
            const createdTask = action.payload.data
            //assign uniqueReferenceNumber to newly created task
            const lastTaskId = taskState.data[taskState.data.length - 1].id
            createdTask["id"] = lastTaskId + 1
            return { ...taskState, loading: false, data: [...taskState.data, createdTask], err: "" }

        case RequestState.UPDATE_TASK_STATUS:
            let newTask = taskState.data.filter((task) => {
                return task.id == action.payload.id
            })
            if (newTask.length > 0) {
                const taskIndex = taskState.data.indexOf(newTask[0])
                newTask[0]["status"] = action.payload.status
                return { ...taskState, loading: false, data: [...taskState.data] }
            }
        case RequestState.DELETE_TASK:
            const newTasks = taskState.data.filter((task) => {
                return task.id !== action.payload.id
            })
            console.log({task: newTasks})
            return {...taskState, loading: false, data: [...newTasks], err: ""}
        default:
            return taskState

    }
}