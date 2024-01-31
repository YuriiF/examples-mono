import { Row, Col, Image } from 'antd';
import { IntroCard, Title, Paragraph } from '@examples/ui/components';

import styles from './page.module.css';

export default function Index() {
  return (
    <section className={styles.page}>
      <Row>
        <Col span={24}></Col>
      </Row>
      <Row justify="space-evenly" align="top">
        <Col span={8}>
          <div style={{ height: '100%' }}>
            <IntroCard>
              <Title level={3}>
                Welcome to Next.js, AntD, Strapi, tRCP example.
              </Title>
              <Paragraph>You can login. Or register to this demo.</Paragraph>
            </IntroCard>
          </div>
        </Col>
        <Col span={14}>
          <div style={{ height: '100%' }}>
            <Image
              className={styles.image}
              alt="Picture of desk with pc, notebook and office supply"
              preview={false}
              src="/retrosupply-jLwVAUtLOAQ-unsplash.jpg"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </section>
  );
}
