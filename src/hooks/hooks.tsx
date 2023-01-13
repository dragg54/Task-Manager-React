import axios from "axios"
import {  useContext, useMemo, useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthProvider"
import { User } from "../types/user"
import { storeTokInStorage } from "../utils/helpers"

export const usePostRequest = () => {
    const navigate = useNavigate()
    const postUser = (url: string, req: User) => {
        axios.post(url, req)
            .then((response) => {
                navigate("/signin")
            }).catch((error) => {
                console.log(error)
            })
    }
    return postUser
}


export const useLoginRequest = () => {
    const user: any = useContext(AuthContext)
    const navigate = useNavigate()
    const postUser = (url: string, req: User) => {
        axios.post(url, req)
            .then((response) => {
                if (response.data.token) {
                    storeTokInStorage(response.data.token)
                    user.dispatch({type:"LOGIN_SUCCESS", payload:{user: response.data.token, err:""}})
                    navigate("/dashboard")
                }
            }).catch((error) => {
                user.dispatch({type:"LOGIN_FAILURE", payload:{user: "", err:error}})
                console.log(error)
            })
    }
    return postUser
}
