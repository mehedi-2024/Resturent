
import React, { createContext } from 'react'

const AppContext = createContext()

const AppContextCompo = ({ children }) => {

    const value = {}
    return (
        <AppContext value={value}>
            {children}
        </AppContext>
    )
}

export default AppContextCompo