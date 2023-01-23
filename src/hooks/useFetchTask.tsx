import axios from "axios"

export const useFetchTask = () =>{
    function getTask(){
        axios.get("http://localhost:8080/api/V1/tasks")
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}