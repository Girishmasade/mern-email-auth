import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ResetPassword from '../pages/ResetPassword'
import Emailverify from '../pages/Emailverify'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/email-verify' element={<Emailverify/>}/>
      </Routes>
    </div>
  )
}

export default Routers
