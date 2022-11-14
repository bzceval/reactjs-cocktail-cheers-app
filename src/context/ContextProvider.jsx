import React, { createContext, useState } from 'react'

export const MainContext = createContext()

const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

  return (
    <MainContext.Provider value={{currentUser}}>
        {children}
    </MainContext.Provider>
  )
}

export default ContextProvider