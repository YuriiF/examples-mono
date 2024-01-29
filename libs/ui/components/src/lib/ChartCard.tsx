'use client';
import { CommentOutlined, HeartTwoTone, RedoOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

export interface ChartCardProps {
  children?: React.ReactNode;
  chart: React.ReactNode;
}

export function ChartCard({ children, chart }: ChartCardProps) {
  return (
    <Card
      title="Card title"
      cover={chart}
      actions={[
        <Avatar
          key={'avatar'}
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
        />,
        <HeartTwoTone
          key="like"
          twoToneColor="#eb2f96"
          onClick={() => console.log('Love')}
        />,
        <RedoOutlined key="setting" />,
        <CommentOutlined key="ellipsis" />,
      ]}
    >
      {children}
    </Card>
  );
}
