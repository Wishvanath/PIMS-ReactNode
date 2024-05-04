// const Login = () => {
//   return (
//     <>
//       <h1>This is Login page</h1>
//     </>
//   );
// };
// export default Login;

import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import axios from 'axios';
// import 'antd/dist/antd.css';
// import './App.css';

const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values:any) => {
    setLoading(true);
    try {
      // Simulate API request
      // console.log("Form Values:=====>", values.username);
      // const response = await axios.post('https://your-api-endpoint.com/login', values);
      // console.log('Login Successful:', response.data);
      // Redirect or do something after successful login
      if(values.username === 'wishvanath' && values.password === 'admin'){
        message.success('Login Successful!');
        window.location.href ="/dashboard"
      }else{
        message.error('Invalid credentials!');

      }
    } catch (error) {
      console.error('Login Failed:', error);
      message.error('Login Failed!');
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <Title level={2}>Login</Title>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
