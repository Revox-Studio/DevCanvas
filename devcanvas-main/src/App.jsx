import { useState } from 'react'
import './App.css'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="bg-white dark:bg-slate-900 text-black dark:text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Hello World</h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            This is the best way to do dark mode.
          </p>
          <div className="mt-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
