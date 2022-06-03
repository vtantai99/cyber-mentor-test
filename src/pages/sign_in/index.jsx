import React from 'react'
import { Form, Input, Button } from 'antd'
import { projectAPI } from 'APIS'
import { useNavigate } from 'react-router-dom'
import { ROUTES_NAME } from 'Routes/constans'

const SignInScreen = () => {
  const navigate = useNavigate()

  const onFinish = (data) => projectAPI.signIn({ data, navigate })

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="passWord"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
          Submit
        </Button>
        <Button type="default" onClick={() => navigate(ROUTES_NAME.SIGN_UP)}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SignInScreen
