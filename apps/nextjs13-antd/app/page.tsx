import { Col, Row } from 'antd';

import {
  ChartCard,
  G2IntervalChart,
  G2LineChart,
} from '@examples/ui/components';

const style: React.CSSProperties = { paddingTop: '24px', paddingBottom: '8px' };

const Home = function Home() {
  return (
    <>
      <Row gutter={16}>
        <Col span={24} style={style}>
          <h3 style={{ color: '#666' }}>Page Title</h3>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12} style={style}>
          <ChartCard chart={<G2IntervalChart />} />
        </Col>
        <Col span={12} style={style}>
          <ChartCard chart={<G2LineChart />} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
