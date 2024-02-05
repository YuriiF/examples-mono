/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';

export interface G2IntervalChartProps {
  data?: unknown;
}

export function G2IntervalChart({ data }: G2IntervalChartProps) {
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
      .interval()
      .data(data)
      .encode('x', 'date')
      .encode('y', 'newCases')
      .encode('key', 'genre')
      // @ts-ignore
      .animate('updateDuration', 300);

    chart.render();

    return chart;
  }

  return <div ref={container}></div>;
}
