import React from 'react'
import { Form, Input, Button, InputNumber } from 'antd'
import { projectAPI } from 'APIS'
import { useNavigate } from 'react-router-dom'
import { ROUTES_NAME } from 'Routes/constans'

const CreateProjectScreen = () => {
  const navigate = useNavigate()

  const onFinish = (data) => projectAPI.createProject({ data }).then(() => navigate(ROUTES_NAME.PROJECTS))

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
        label="Project name"
        name="projectName"
        rules={[
          {
            required: true,
            message: 'Please input your project name!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please input your description!'
          }
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Category ID"
        name="categoryId"
        rules={[
          {
            required: true,
            message: 'Please input your category ID!'
          }
        ]}
      >
        <InputNumber min={1} max={10} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Alias"
        name="alias"
        rules={[
          {
            required: true,
            message: 'Please input your alias!'
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

export default CreateProjectScreen
