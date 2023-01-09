export type User = {
    firstName:string,
    lastName:string,
    email: string,
    password: string
}

export type UserLogin = Omit<User, "firstName" | "lastName">