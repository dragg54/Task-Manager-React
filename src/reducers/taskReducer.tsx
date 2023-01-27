import { ReducerWithoutAction } from "react"
import { requestState } from "../types/requestState"
import { ITaskRequestState } from "../types/taskRequestState"

export const initialTaskRequestState: ITaskRequestState = {
    loading: true,
    data: [] ,
    err: ""
}


export const taskReducer = (taskState: ITaskRequestState, action: any):ITaskRequestState =>{
    switch(action.type){
        case requestState.FETCH_REQUEST_SUCCESS:
            return{
                ...taskState, loading: false, data: action.payload.data, err: ""
            }
        case requestState.FETCH_REQUEST_FAILURE:
            return{
                ...taskState, loading: false, data: [], err: action.payload.err
            }
        default:
            return taskState
    }
}