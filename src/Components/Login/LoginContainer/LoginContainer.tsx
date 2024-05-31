import React, { FC } from 'react'
import alelo from '../../../Assets/aLeLo_Logo.svg'
import './logincontainer.css'
import loginImage from '../../../Assets/loginimage.svg'
import { Login } from '../LoginCard/Login'
export const LoginContainer: FC = () => {
  return (
    <div className='login-container'>
      <div className="login-header">
        <img src={alelo} alt="" />
      </div>
      <div className="login-inner-block">
        <div className="login-body">
          <div className='login-image-section'>
          <img className='login-image' src={loginImage} alt="" style={{ position : 'absolute',bottom : '-176px'}}  />

          </div>
          <div className='login-block-1'>
          <Login />
          </div>
        </div>
        <div className="login-footer"></div>
      </div>
    </div>
  )
}
