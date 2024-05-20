// src/components/PrivateRoute.js
import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  const user = useSelector(state => state.signin.user)

  return user ? children : <Navigate to="/Signin" />
}

export default PrivateRoute
