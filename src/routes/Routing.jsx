import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/admin/Login'

const Routing = () => {
  return (
  <>
   <Routes>
    <Route path="/admin/login" element={<Login />} />
   </Routes>
  </>
  )
}

export default Routing
