/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useFormState } from 'react-dom';
import { Button, Space, Input, Card } from 'antd';
import { loginAction } from '@examples/auth/server';

// import styles from './LoginForm.module.css';

export interface FieldType {
  identifier?: string;
  password?: string;
}

export function LoginForm() {
  const initialState = {};
  const [state, dispatch] = useFormState(loginAction, initialState);

  return (
    <Card
      title="Login"
      bordered={false}
      style={{ width: 400, textAlign: 'center' }}
    >
      <form name="login" className="login-form" action={dispatch}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            name="identifier"
            id="identifier"
          />
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Login
          </Button>
        </Space>
      </form>
    </Card>
  );
}
