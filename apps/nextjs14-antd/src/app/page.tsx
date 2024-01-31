// import styles from './page.module.css';
'use client';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Index() {
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[
            { key: '1', label: 'Home' },
            { key: '2', label: 'Login' },
            { key: '3', label: 'Register' },
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content>
        <div>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Y.Y.F. ©{new Date().getFullYear()} Created by Yurii
      </Footer>
    </Layout>
  );
}
