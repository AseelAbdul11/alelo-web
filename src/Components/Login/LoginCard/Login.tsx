import React, { FC, useState } from 'react'
import './login.css'
import { Button, Form, Input, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
export const Login: FC = () => {
  const { Text, Link, Title } = Typography;
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    // dispatch(loginCredentials(values))
    // dispatch(login())
  navigate('/dashboard')

  };
  const [validation, setValidation] :any = useState([])
  const onFinishFailed = (errorInfo: any) => {
    setValidation(['onChange', 'onBlur'])
  };
  const regex = (val: any) => {
    const value = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    return value.test(val)
  }

  return (
    <div className='login-block'>
      <Title className='title' style={{
        marginBottom: '3rem', textAlign: 'center',
        marginTop: 0
      }} level={3}>Log In</Title>
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
            <Input placeholder='Username' suffix={<MailOutlined style={{ color: 'grey' }} />} className='input' />
          </Form.Item>

        </div>
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
            <Input.Password placeholder='Password' className='input' style={{ border: 'none', boxShadow: 'inset 0 0 0 1px #c8c8c8', height: '48px', borderRadius: '8px' }} />
          </Form.Item>
        </div>



        <Text style={{ color: 'rgba(1, 174, 154, 1)', fontWeight: 300, fontSize: '14px', marginBottom: '78px', textAlign: 'right' }}>Forget Password?</Text>
        <Form.Item

        >
          <div style={{ width: '100%', display: "flex", justifyContent: 'center' }}>
            <Button style={{ borderRadius: '8px', width: '100%', background: "rgba(1, 174, 154, 1)", height: '48px' }} type="primary" htmlType="submit">
              Submit
            </Button>
          </div>

        </Form.Item>
      </Form>
    </div>
  )
}
