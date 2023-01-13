export const getTokFromStorage = () =>{
  const token = JSON.parse(localStorage.getItem("token")!)
  if(token){
    return token
  }
}

export const storeTokInStorage =(data: string)=>{
  localStorage.setItem("token", JSON.stringify(data))
}