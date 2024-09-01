import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Components/profile'
import Login from './Components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>

        <h1>React context API</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
