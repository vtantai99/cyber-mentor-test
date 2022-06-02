import React from 'react'
import { Form, Input, Button } from 'antd'
import { projectAPI } from 'APIS'
import { useNavigate } from 'react-router-dom'
import { ROUTES_NAME } from 'Routes/constans'

const SignUpScreen = () => {
  const navigate = useNavigate()
  const onFinish = (formData) => {
    const { email, passWord, name, phoneNumber } = formData
    projectAPI
      .signUp({
        data: { email, passWord, name, phoneNumber }
      })
      .then(() => navigate(ROUTES_NAME.SIGN_IN))
  }

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
            message: 'Please input your email!'
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
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SignUpScreen
