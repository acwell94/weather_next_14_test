import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

// Props 인터페이스 정의
interface RowChartProps {
  labels: number[];
  chartData : number[];
}

const RowChart = (props : RowChartProps ) => {
  const {labels, chartData} = props;
  const canvasEl = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasEl.current !== null) {
      const ctx = canvasEl.current;

      const data = {
        labels: labels,
        datasets: [
          {
            // label: 'Line Chart',
            data: chartData,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      };

      const myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          plugins:{
            legend: {
              display: false
            },
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                display: false
              }
            },
            y:{
              grid:{
                display: false
              }
            }
          }
        },
      });

      return function cleanup() {
        myLineChart.destroy();
      };
    }
  }, [labels, chartData]);

  return (
    <div style={{ overflowX: 'auto', width: '100%' }}>
      <div style={{ minWidth: '600px', maxHeight: '400px' }}>
        <canvas ref={canvasEl} />
      </div>
    </div>
  );
};

export default RowChart;
