import React, { FC, useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
interface myComponentProps {
    otpcallBack : any
    , validation : any
}
export const  OTPinput : FC<myComponentProps> =  ({otpcallBack, validation}) => {
    const [otp, setOtp] = useState('')
    const [showValidation, setShowValidation]: any = useState(false)
    useEffect(() => {
        if (otp.split('').length >= 1) {
            setShowValidation(true)
        } else {
            setShowValidation(false)
        }
        otpcallBack(otp)
    }, [otp])
    return (
        <div style={{ width: '278px' }}>


            <OTPInput
                containerStyle={{
                    justifyContent: 'space-between',
                    gap: '7px'
                }}
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span></span>}
                inputStyle={{
                    height: '45px',
                    width: '30px',
                    borderRadius: 4,
    border: '1px solid lightgray'
                }}
                
                inputType='number'
                renderInput={(props) => <input {...props} />}
            />

            {!otp && showValidation && <span className='error-text'>Please enter your OTP</span>}
            {validation && showValidation && <span className='error-text'>Invalid OTP</span>}
        </div>
    )
}
