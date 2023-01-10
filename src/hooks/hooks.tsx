import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthProvider"
import { SetAuth } from "../types/setAuth"
import { User, UserLogin } from "../types/user"

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
const setAuth:any  = useContext(AuthContext)
    const navigate = useNavigate()
    const postUser = (url: string, req: UserLogin) => {
        axios.post(url, req)
            .then((response) => {
               if(response){
                setAuth.setAuth(response.data)
                navigate("/")
               }
            }).catch((error) => {
                console.log(error)
            })
    }
    return postUser
}
