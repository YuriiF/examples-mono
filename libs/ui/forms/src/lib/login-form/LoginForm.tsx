'use client';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useFormState } from 'react-dom';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Card from 'antd/lib/card';
import Space from 'antd/lib/space';
import Password from 'antd/lib/input/Password';
import { loginAction } from '@examples/auth/server';

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
          <Password
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
