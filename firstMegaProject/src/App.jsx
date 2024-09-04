import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import './App.css'
import authService from "./appwrite/auth.service"
import { login, logout } from "./store/authSlice"
import { Header, Footer } from "./components/index"
import { Outlet } from 'react-router-dom'


function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      console.log(userData)
      if (userData) {
        dispatch(login({ userData }))
      }
      else {
        dispatch(logout())
      }

    })
      .finally(() => { setLoading(false) })
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        Todo: <Outlet />
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
