import { Col, Row } from 'antd';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const Home = function Home() {
  return (
    <>
      <Row>
        <Col span={24} style={style}>
          col
        </Col>
      </Row>
      <Row>
        <Col span={12} style={style}>
          col-12
        </Col>
        <Col span={12} style={style}>
          col-12
        </Col>
      </Row>
    </>
  );
};

export default Home;
