import { State } from "../types/reducerState"
import { getTokFromStorage } from "../utils/helpers"

export const initialState: State = {
    loading: true,
    user: getTokFromStorage(),
    err:""
}

export function reducer(state = initialState, action: any){
    switch(action.type){
        case "LOGIN_SUCCESS":
            console.log("success")
            return {...state, loading: !state.loading, user: action.payload?.user, err: ""}
        case "LOGIN_FAILURE":
            return {...state, loading: !state.loading, user: "", err: action.payload?.err}
        default:
            return state
    }
}