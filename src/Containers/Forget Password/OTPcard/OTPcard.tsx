import React, { FC, useEffect, useState } from 'react'
import '../../../Components/Login/LoginCard/login.css'
import { Button, Form, Input, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import type { OTPProps } from 'antd/es/input/OTP';
import type { GetProp } from 'antd';
import OTPInput from 'react-otp-input';
import { OTPinput } from '../../../Components/InputField/OTPinput';

export const OTPcard: FC = () => {
    const { Text, Link, Title } = Typography;
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()
   
    const [validation, setValidation]: any = useState(false)
    const handleClick = () => {
        if(otp.split('').length == 6){
            setValidation(false)
            navigate('/reset-password')

        }else{
            setValidation(true)
        }
    }
    const handleCallback = (otp : any)=>{
        setOtp(otp)
     }
    return (
        <div  className='login-block'>
            <Title className='title' style={{
                marginBottom: '3rem', textAlign: 'center',
                marginTop: 0
            }} level={3}>Enter OTP</Title>
            <div style={{
                display : 'flex',
                justifyContent : 'center'
            }}>

            <OTPinput otpcallBack={handleCallback} validation={validation} />
            </div>
            <div style={{ width: '100%', display: "flex", justifyContent: 'center', marginTop: '30px' }}>
                <Button disabled={otp.split('').length == 6 ? false : true} style={{ borderRadius: '8px', width: '100%', background: "rgba(1, 174, 154, 1)", height: '48px' }} onClick={handleClick} type="primary">
                    Verify OTP
                </Button>
            </div>
        </div>
    )
}
