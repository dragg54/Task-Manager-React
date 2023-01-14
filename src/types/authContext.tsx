import { LoginActionState } from "./reducerState"

export type ContextValue  = {
    state: LoginActionState,
    dispatch?: any
}