import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <form action="/submit" method="post">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required />
    <button type="submit">Submit</button>
   </form>
  </>
  )
}

export default App
