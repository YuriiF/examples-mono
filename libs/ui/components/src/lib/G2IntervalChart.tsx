/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';

export interface G2IntervalChartProps {}

export function G2IntervalChart() {
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

    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    chart
      .interval()
      .data(data)
      .encode('x', 'genre')
      .encode('y', 'sold')
      .encode('key', 'genre')
      // @ts-ignore
      .animate('updateDuration', 300);

    chart.render();

    return chart;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // function updateBarChart(chart: any) {
  //   const interval = chart.getNodesByType('interval')[0];

  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const newData = interval.data().map((d: any) => ({
  //     ...d,
  //     sold: Math.random() * 400 + 100,
  //   }));

  //   interval.data(newData);

  //   chart.render();
  // }

  return <div ref={container}></div>;
}

// export default G2IntervalChart;
