export type User = {
    firstName?:string,
    lastName?:string,
    email?: string,
    password?: string,
   
}

export type Auth = {
    user?: string,
    isLoading?: boolean,
    setIsLoading?: React.Dispatch<React.SetStateAction<boolean>> 
    setUser?: React.Dispatch<React.SetStateAction<string>> 

}