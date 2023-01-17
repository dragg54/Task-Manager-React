import { createContext, Dispatch, useState } from "react";


interface WrapperToggleStatus {
    toggleWrapperDisplayStatus: boolean
    setToggleWrapperDisplayStatus?: Dispatch<React.SetStateAction<boolean>>
}

export const WrapperDisplayContext = createContext<WrapperToggleStatus>({ toggleWrapperDisplayStatus: false })

export const WrapperDisplayContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [toggleWrapperDisplayStatus, setToggleWrapperDisplayStatus] = useState(false)
    return (
        <WrapperDisplayContext.Provider value={{ toggleWrapperDisplayStatus, setToggleWrapperDisplayStatus }}>
            {children}
        </WrapperDisplayContext.Provider>
    )
}
