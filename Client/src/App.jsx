import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <form action="" method="post">
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" name="username" />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" />
    <input type="submit" value="Submit" />
   </form>
   </>
  )
}

export default App
