import { Card, Statistic } from 'antd';
import { fetchCardData } from '@examples/auth';
import Col from 'antd/lib/col';

export async function Cards() {
  const cardData = await fetchCardData();

  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = cardData;

  return (
    <>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title={'Collected'}
            value={totalPaidInvoices}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="Pending"
            value={totalPendingInvoices}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="Total Invoices"
            value={numberOfInvoices}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="Total Customers"
            value={numberOfCustomers}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
    </>
  );
}
