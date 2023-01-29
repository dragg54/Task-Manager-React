import { LoginActionState } from "./loginState"

export type ContextValue  = {
    state: LoginActionState,
    dispatch?: any
}