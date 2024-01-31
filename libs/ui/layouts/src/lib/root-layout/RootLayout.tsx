'use client';
import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  width: '100%',
  backgroundColor: '#000',
};

const headerStyle: React.CSSProperties = {
  position: '-webkit-sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderBottom: '1px solid #d4d3d3',
  boxShadow: '0 1px 0 rgba(24, 26, 27, 0.1)',
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={headerStyle}>
        <Title level={4} style={{ color: '#048b48' }}>
          Nextjs 14 with Ant Design
        </Title>
      </Header>
      <Content style={{ padding: '0 48px' }}>{children}</Content>
      <Footer style={footerStyle}>
        Y.Y.F. ©{new Date().getFullYear()} Created by Yurii
      </Footer>
    </Layout>
  );
}
