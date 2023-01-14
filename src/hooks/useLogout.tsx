import { useNavigate } from "react-router-dom"

export const useLogout = () => {
    const navigate = useNavigate()

    function logOutUser() {
        navigate("/signin")
        localStorage.removeItem("token")
    }
    return logOutUser
}