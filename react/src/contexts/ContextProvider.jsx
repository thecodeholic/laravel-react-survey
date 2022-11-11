import {createContext, useContext, useState} from "react";

const StateContext = createContext({})

export const ContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({})
  const [userToken, setUserToken] = useState(null)

  return (
    <StateContext.Provider value={{
      currentUser,
      userToken,
      setCurrentUser,
      setUserToken
    }}>
      {children }
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
