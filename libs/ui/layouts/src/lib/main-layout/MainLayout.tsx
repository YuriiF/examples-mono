'use client';
import { Layout, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

/* eslint-disable-next-line */
export interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderBottom: '1px solid #d4d3d3',
          boxShadow: '0 1px 0 rgba(24, 26, 27, 0.1)',
        }}
      >
        <Title level={4} style={{ color: '#048b48' }}>
          Nextjss 13 with Ant Design
        </Title>
      </Header>
      <Content style={{ padding: '0 48px' }}>{children}</Content>
    </Layout>
  );
}

export default MainLayout;
