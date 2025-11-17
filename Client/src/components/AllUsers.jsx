import React from 'react'

const AllUsers = () => {

  const users = JSON.parse(localStorage.getItem("users")) || []

  return (
    <>
      <h1>All Users</h1>

      {users.length === 0 && <p>No users found</p>}

      {users.map((u, index) => (
        <div key={index}>
          <h3>Name: {u.name}</h3>
          <p>Email: {u.email}</p>
          <p>Password: {u.password}</p>
          <hr />
        </div>
      ))}
    </>
  )
}

export default AllUsers
