import axios from "axios"
import { useNavigate } from "react-router-dom"
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
    const navigate = useNavigate()
    const postUser = (url: string, req: UserLogin) => {
        axios.post(url, req)
            .then((response) => {
               if(response){
                navigate("/")
               }
            }).catch((error) => {
                console.log(error)
            })
    }
    return postUser
}