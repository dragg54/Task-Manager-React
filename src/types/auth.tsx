import { State } from "./reducerState"

export type ContextValue  = {
    state: State,
    dispatch?: any
}