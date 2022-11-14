import React, { createContext, useState } from 'react'

export const MainContext = createContext()

const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

  return (
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default ContextProvider