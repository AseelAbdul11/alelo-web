import React, { FC, useState } from 'react'
import '../../../Components/Login/LoginCard/login.css'
import { Button, Form, Input, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
export const ForgetCard: FC = () => {
  const { Text, Link, Title } = Typography;
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    // dispatch(loginCredentials(values))
    // dispatch(login())
  navigate('/otp-verification')
  };
  const [validation, setValidation] :any = useState([])
  const onFinishFailed = (errorInfo: any) => {
    setValidation(['onChange', 'onBlur'])
  };
  return (
    <div className='login-block'>
      <Title className='title' style={{
        marginBottom: '3rem', textAlign: 'center',
        marginTop: 0
      }} level={3}>Forget Password</Title>
      <Form
        name="basic"
        validateTrigger="onSubmit"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, }}
      >
        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your valid email!',
                type: 'email'
              }
            ]}
            validateTrigger={validation}          >
            <Input placeholder='email' suffix={<MailOutlined style={{ color: 'grey' }} />} className='input' />
          </Form.Item>

        </div>

        <Form.Item

        >
          <div style={{ width: '100%', display: "flex", justifyContent: 'center' }}>
            <Button style={{ borderRadius: '8px', width: '100%', background: "rgba(1, 174, 154, 1)", height: '48px' }} type="primary" htmlType="submit">
              Request OTP
            </Button>
          </div>

        </Form.Item>
      </Form>
    </div>
  )
}
