
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import Card from './components/card'
import ThemeBtn from './components/themeBtn'

function App() {
  const [themeMode, setThemeMode] = useState()

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove("light", "dark")

    html.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Button */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>

  )
}

export default App
