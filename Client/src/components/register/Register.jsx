import React, { useState } from 'react'

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    let users = JSON.parse(localStorage.getItem("users")) || []

    let newUser = { name, email, password }

    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))

    setName("")
    setEmail("")
    setPassword("")

    alert("User Registered!")
  }

  return (
    <>
      <h1>Register yourself</h1>

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
      />

      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
      />

      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required 
      />

      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Register
