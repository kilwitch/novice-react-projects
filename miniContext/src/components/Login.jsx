import React, { useState, useContext } from "react"
import UserContext from "../context/UserContext"
function Login() {
    const [username, setUsername]= useState('')
    const [password, setPassword] = useState('')

    const {setUser}= useContext(UserContext)

    const handleSubmit= (e)=>{
      e.preventDefault()
      setUser({username, password})
    }
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-2xl shadow-md w-80 space-y-4">
    <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>
    <input type="text" 
    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl"
    value={username}
    onChange={(e)=> setUsername(e.target.value)}
    placeholder="username" />
    <input type="text" 
    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl"
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    placeholder="password" />
    <button onClick={handleSubmit}
    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl
      font-medium transition duration-200 shadow-sm"
    >Submit</button>
    </div>
    </div>
  )
}

export default Login