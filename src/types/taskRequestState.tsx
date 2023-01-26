import { ReducerWithoutAction } from "react";
import { Task } from "./Tasks";

export interface ITaskRequestState{
    loading: boolean,
    data: Task[],
    err: string,
    dispatch?: any
}