import { Task } from "../types/Tasks"

export const getTokFromStorage = () => {
  const token = JSON.parse(localStorage.getItem("token")!)
  if (token) {
    return token
  }
}

export const storeTokInStorage = (data: string) => {
  localStorage.setItem("token", JSON.stringify(data))
}


export function changeTaskStatus(task: Task | undefined, taskStatus: string | undefined){
  if(task && taskStatus == "todo"){
    task["status"] = "todo"
    console.log(task)
  }
  if(task && taskStatus == "doing"){
    task["status"] = "doing"
    console.log(task)

  }
  if(task && taskStatus === "done"){
    task["status"] = "done"
    console.log(task)

  }
}

/* export function changeTaskStatus(task: Task | undefined, taskStatus: string | undefined) {
  if (task) {
    switch (taskStatus) {
      case "todo":
        task["status"] = "todo"
        console.log(task)
      case "doing":
        task["status"] = "doing"
        console.log(task)
      case "done":
        task["status"] = "done"
        console.log(task)
      default:
        return
    }
  }

} */