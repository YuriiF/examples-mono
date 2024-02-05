/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';

export interface G2LineChartProps {
  data?: unknown;
}

export function G2LineChart({ data }: G2LineChartProps) {
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
      .data(data)
      .encode('x', 'date')
      .encode('y', 'newCases')
      .encode('series', 'country');

    chart.interaction('tooltip', {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      filter: (d: any, i: number) => i < 10,
    });

    chart.render();

    return chart;
  }

  return <div ref={container}></div>;
}
