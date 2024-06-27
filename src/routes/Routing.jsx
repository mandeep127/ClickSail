import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/admin/Login'
import UserLogin from '../pages/user/Login'
import UserRegister from '../pages/user/Register'
import UserForgotPassword from '../pages/user/ForgotPassword'
import UserResetPassword from '../pages/user/ResetPassword'

const Routing = () => {
  return (
  <>
   <Routes>
    <Route path="/admin/login" element={<Login />} />
    <Route path="/login" element={<UserLogin />} />
    <Route path="/register" element={<UserRegister />} />
    <Route path="/forgot-password" element={<UserForgotPassword />} />
    <Route path="/reset-password" element={<UserResetPassword />} />
   </Routes>
  </>
  )
}

export default Routing
