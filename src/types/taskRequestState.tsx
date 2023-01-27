import { ReducerWithoutAction } from "react";
import { Task } from "./task";

export interface ITaskRequestState{
    loading: boolean,
    data: Task[],
    err: string,
    dispatch?: any
}