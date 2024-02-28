import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/logout', { withCredentials: true })
      console.log('Logged out successfully')
      navigate('/')
    } catch (error) {
      console.error('Error during logout:', error.message)
    }
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton
