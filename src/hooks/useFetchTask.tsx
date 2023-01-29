import axios from "axios"
import { useEffect } from "react"
import { useTaskContext } from "../contexts/TaskProvider"
import { requestState } from "../types/requestState"
import { getTokFromStorage } from "../utils/helpers"

export const useFetchTask = () => {
    const { state, dispatch } = useTaskContext()
   const getTasks=() => {
        axios.get("http://localhost:8080/api/V1/tasks", {
            headers: {
                "token": getTokFromStorage()
            }
        })
            .then((response) => {
                dispatch({ type: requestState.FETCH_REQUEST_SUCCESS, payload: { data: response?.data } })
            })
            .catch((err) => {
                dispatch({ type: requestState.FETCH_REQUEST_FAILURE, payload: { data: err.data } })
            })
    }

    return getTasks
}