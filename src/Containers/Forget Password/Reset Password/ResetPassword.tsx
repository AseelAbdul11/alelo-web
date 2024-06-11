import React, { FC, useState } from 'react'
import '../../../Components/Login/LoginCard/login.css'
import { Button, Form, Input, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
export const ResetPasswordCard: FC = () => {
  const { Text, Link, Title } = Typography;
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    // dispatch(loginCredentials(values))
    // dispatch(login())
  navigate('/dashboard')

  };
  const [validation, setValidation] :any = useState([])
  const [password,setPassword] = useState()
  const onFinishFailed = (errorInfo: any) => {
    setValidation(['onChange', 'onBlur'])
  };
  const regex = (val: any) => {
    const value = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    return value.test(val)
  }

  const renterPassword = (e : any) =>{

    setPassword(e.target.value)
  }
  return (
    <div className='login-block'>
      <Title className='title' style={{
        marginBottom: '3rem', textAlign: 'center',
        marginTop: 0
      }} level={3}>Reset password</Title>
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
        <div style={{ textAlign: 'left' }}>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              () => ({
                validator(_, value) {
                  if (!value || regex(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('should be Uppercase,specialcase and a number'));
                },
              })
            ]}
            validateTrigger={validation}          >
            <Input.Password onChange={renterPassword} placeholder='Password' className='input' style={{ border: 'none', boxShadow: 'inset 0 0 0 1px #c8c8c8', height: '48px', borderRadius: '8px' }} />
          </Form.Item>
        </div>
        <div style={{ textAlign: 'left' }}>
          <Form.Item
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              () => ({
                validator(_, value) {
                  if (!value || (password == value )) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('password does not match'));
                },
              })
            ]}
            validateTrigger={validation}          >
            <Input.Password placeholder='Password' className='input' style={{ border: 'none', boxShadow: 'inset 0 0 0 1px #c8c8c8', height: '48px', borderRadius: '8px' }} />
          </Form.Item>
        </div>
        <Form.Item
        >
          <div style={{ width: '100%', display: "flex", justifyContent: 'center' }}>
            <Button style={{ borderRadius: '8px', width: '100%', background: "rgba(1, 174, 154, 1)", height: '48px' }} type="primary" htmlType="submit">
             Reset password
            </Button>
          </div>

        </Form.Item>
      </Form>
    </div>
  )
}
