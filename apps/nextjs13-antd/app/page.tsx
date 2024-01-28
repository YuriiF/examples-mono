import { Button, Divider } from 'antd';

import { MainLayout } from '@examples/ui/layouts';

const Home = function Home() {
  return (
    <MainLayout>
      <section
        style={{
          textAlign: 'center',
          marginTop: 48,
          marginBottom: 40,
          padding: 100,
          background: '#fff',
          borderRadius: '4px',
        }}
      >
        <Divider style={{ marginBottom: 60 }}>Divider</Divider>
        <Button type="primary" block href="/with-sub-components">
          With Sub Components
        </Button>
      </section>
    </MainLayout>
  );
};

export default Home;
