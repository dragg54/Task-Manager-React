import { ReducerWithoutAction } from "react"
import { ITaskRequestState } from "../types/taskRequestState"

export const initialTaskRequestState = {
    loading: true,
    data: [] ,
    err: ""
}


export const taskReducer = (state = initialTaskRequestState, action: any) =>{
    switch(action.type){
        case "FETCH_REQUEST":
            return {
                loading: true, data: [], err: ""
            }
        case "FETCH_REQUEST_SUCCESS":
            return{
                ...state, loading: false, data: action.payload.data, err: ""
            }
        case "FETCH_REQUEST_FAILURE":
            return{
                ...state, loading: false, data: [], err: action.payload.err
            }
        default:
            return state
    }
}