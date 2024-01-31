import { Row, Col } from 'antd';
import { IntroCard, Title, Paragraph } from '@examples/ui/components';

import styles from './page.module.css';

export default function Index() {
  return (
    <section className={styles.page}>
      <Row>
        <Col span={24}></Col>
      </Row>
      <Row>
        <Col span={8}>
          <IntroCard>
            <Title level={3}>
              Welcome to Next.js, AntD, Strapi, tRCP example.
            </Title>
            <Paragraph>
              You can login. Or register to this demo.
            </Paragraph>
          </IntroCard>
        </Col>
        <Col span={16}></Col>
      </Row>
      <Row>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </section>
  );
}
