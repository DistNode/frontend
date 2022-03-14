// Third party
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Local
import './style/index.css'
import Home from './routes/Home'
import Delete from './routes/auth/Delete'
import Login from './routes/auth/Login'
import PasswordResetRequest from './routes/auth/PasswordResetRequest'
import Register from './routes/auth/Register'
import Account from './routes/auth/Account'
import VerifyEmail from './routes/auth/VerifyEmail'
import PasswordReset from './routes/auth/PasswordReset'

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/delete-user' element={<Delete />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route
          path='/auth/password-reset-request'
          element={<PasswordResetRequest />}
        />
        <Route path='/auth/password-reset' element={<PasswordReset />} />
        <Route path='/auth/account' element={<Account />} />
        <Route path='/auth/verify-email' element={<VerifyEmail />} />
        <Route path='/health' element={'{"status":"ok"}'} />
        <Route path='*' element={'Route not found'} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
