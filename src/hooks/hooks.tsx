import axios from "axios"
import { useNavigate } from "react-router-dom"
import { User } from "../types/user"

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