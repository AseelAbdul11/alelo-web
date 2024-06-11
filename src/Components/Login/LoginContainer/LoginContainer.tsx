import React, { FC, useEffect } from 'react'
import alelo from '../../../Assets/aLeLo_Logo.svg'
import './logincontainer.css'
import loginImage from '../../../Assets/loginimage.svg'
import { Login } from '../LoginCard/Login'
import { ForgetCard } from '../../../Containers/Forget Password/ForgetCard/ForgetCard'
import { OTPcard } from '../../../Containers/Forget Password/OTPcard/OTPcard'
import { ResetPasswordCard } from '../../../Containers/Forget Password/Reset Password/ResetPassword'
export const LoginContainer: FC = () => {
  const pathName = window.location.pathname
  useEffect(()=>{
console.log(pathName)
  },[])
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
        { pathName == '/'  && <Login />}
        { pathName == '/forget-password'  && <ForgetCard />}
        { pathName == '/otp-verification'  && <OTPcard/>}
        { pathName == '/reset-password'  && <ResetPasswordCard/>}
          </div>

          
        </div>
        <div className="login-footer"></div>
      </div>
    </div>
  )
}
