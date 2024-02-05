import { Suspense } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import {
  CardsSkeleton,
  LatestInvoices,
  LatestInvoicesSkeleton,
  RevenueChart,
  RevenueChartSkeleton,
} from '@examples/features/dashboard';

import { Cards } from '@examples/features/dashboard/server';
import { fetchCoronaData } from '@examples/auth';

import {
  ChartCard,
  G2IntervalChart,
  G2LineChart,
  Title,
} from '@examples/ui/components';

export default async function Page() {
  const coronaData = await fetchCoronaData();
  return (
    <>
      <Title level={2}>Dashboard (Page Title)</Title>
      <Row gutter={[24, 24]}>
        <Suspense fallback={<CardsSkeleton />}>
          <Cards />
        </Suspense>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <Col span={12}>
            <ChartCard chart={<G2IntervalChart data={coronaData} />} />
          </Col>
        </Suspense>
        <Col span={12}>
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <ChartCard chart={<G2LineChart data={coronaData}/>} />
          </Suspense>
        </Col>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <Col span={12}>
            <RevenueChart />
          </Col>
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <Col span={12}>
            <LatestInvoices />
          </Col>
        </Suspense>
      </Row>
    </>
  );
}
