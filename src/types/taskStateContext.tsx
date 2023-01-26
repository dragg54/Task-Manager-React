import { ITaskRequestState } from "./taskRequestState";

export interface ITaskContext{
    state: ITaskRequestState, 
    dispatch?: any
}