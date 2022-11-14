import {createContext, useContext, useState} from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {}
})

export const ContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({})
  const [userToken, _setUserToken] = useState(null)

  const logout = () => {
    setCurrentUser({})
    setUserToken(null)
  }

  const setUserToken = (token) => {
    if (token) {
      localStorage.setItem('TOKEN', token)
    } else {
      localStorage.removeItem('TOKEN')
    }
    _setUserToken(token)
  }

  return (
    <StateContext.Provider value={{
      currentUser,
      userToken,
      setCurrentUser,
      setUserToken,
      logout
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
