/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';

export interface G2LineChartProps {}

export function G2LineChart() {
  const container = useRef(null);
  const chart = useRef(null);

  useEffect(() => {
    if (!chart.current) {
      // @ts-ignore
      chart.current = renderBarChart(container.current);
    }
  }, []);

  function renderBarChart(container: HTMLDivElement) {
    const chart = new Chart({
      container,
      theme: 'classic',
      autoFit: true,
    });

    chart
      .line()
      .data({
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/bmw-prod/728a4bdc-9d0b-49e0-a92f-6320a6cddeed.csv',
      })
      .encode('x', 'date')
      .encode('y', 'unemployment')
      .encode('series', 'division');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    chart.interaction('tooltip', { filter: (d: any, i: any) => i < 10 });

    chart.render();

    return chart;
  }

  return <div ref={container}></div>;
}
