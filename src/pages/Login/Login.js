import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './Login.css'; 
import { Link } from 'react-router-dom';
import Header from '../../components/header';
const Login = () => {
  return (
    <div className='Login'>
      <Header/>
      <div className="login-container">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          className="login-form"
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
            <Link to="/home">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
