import { createContext, Dispatch, useState } from "react";


interface WrapperToggleStatus {
    toggleWrapperDisplayStatus: boolean
    setToggleWrapperDisplayStatus?: Dispatch<React.SetStateAction<boolean>>,
    currentTaskId?: number,
    setCurrentTaskId?:  Dispatch<React.SetStateAction<number | undefined>>
}

export const WrapperDisplayContext = createContext<WrapperToggleStatus>({ toggleWrapperDisplayStatus: false })

export const WrapperDisplayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [toggleWrapperDisplayStatus, setToggleWrapperDisplayStatus] = useState(false)
    const [currentTaskId, setCurrentTaskId] = useState<number | undefined>()
    return (
        <WrapperDisplayContext.Provider value={{ toggleWrapperDisplayStatus, setToggleWrapperDisplayStatus , currentTaskId, setCurrentTaskId}}>
            {children}
        </WrapperDisplayContext.Provider>
    )
}
