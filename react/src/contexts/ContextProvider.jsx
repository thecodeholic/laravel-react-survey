import {createContext, useContext, useState} from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {}
})

export const ContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  })
  const [userToken, setUserToken] = useState('123')

  return (
    <StateContext.Provider value={{
      currentUser,
      userToken,
      setCurrentUser,
      setUserToken
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
