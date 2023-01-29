import { ReducerWithoutAction } from "react"
import { requestState } from "../types/requestState"
import { Task } from "../types/task"
import { ITaskRequestState } from "../types/taskRequestState"

export const initialTaskRequestState: ITaskRequestState = {
    loading: true,
    data: [],
    err: ""
}


export const taskReducer = (taskState: ITaskRequestState, action: any): ITaskRequestState => {
    switch (action.type) {
        case requestState.FETCH_REQUEST_SUCCESS:
            return {
                ...taskState, loading: false, data: action.payload.data, err: ""
            }

        case requestState.FETCH_REQUEST_FAILURE:
            return {
                ...taskState, loading: false, data: [], err: action.payload.err
            }

        case requestState.ADD_TASK:
            return { ...taskState, loading: false, data: [...taskState.data, action.payload.data], err: "" }

        case requestState.UPDATE_TASK_STATUS:
            const newTask = taskState.data.filter((task) => {
                return task.id == action.payload.id
            })
            if (newTask.length > 0) {
                const taskIndex = taskState.data.indexOf(newTask[0])
                newTask[0]["status"] = action.payload.status
                return { ...taskState, loading: false, data: [...taskState.data] }
            }

        default:
            return taskState

    }
}