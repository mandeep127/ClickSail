import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/admin/auth/Login'
import ForgotPassword from '../pages/admin/auth/ForgotPassword'
import ResetPassword from '../pages/admin/auth/ResetPassword'
import Dashboard from '../pages/admin/dashboard/Dashboard'
const Routing = () => {
  return (
  <>
   <Routes>
    <Route path="/admin/login" element={<Login />} />
    <Route path="/admin/forgot-password" element={<ForgotPassword />} />
    <Route path="/admin/reset-password" element={<ResetPassword />} />
    <Route path="/admin/dashboard" element={<Dashboard />} />
   </Routes>
  </>
  )
}

export default Routing
