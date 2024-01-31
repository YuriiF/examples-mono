'use client';
import { LoginOutlined } from '@ant-design/icons';
import { Button, Card, Image } from 'antd';

export interface IntroCardProps {
  children?: React.ReactNode;
}

export function IntroCard({ children }: IntroCardProps) {
  return (
    <Card
      cover={
        <Image
          preview={false}
          alt="Welcome Image"
          src="/jamie-street-p2ifKHu3dXM-unsplash.jpg"
        />
      }
      actions={[
        <Button type="link" icon={<LoginOutlined />} block>
          Login
        </Button>,
        <Button type="link" block>
          Register
        </Button>,
      ]}
    >
      {children}
    </Card>
  );
}
