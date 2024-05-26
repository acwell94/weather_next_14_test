import React, { useEffect, useRef } from 'react';
import style from "@/components/chart/style/RowChart.module.css"

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
            borderColor: 'black',
            borderWidth : 5,
            tension: 0.2,
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
                display: false,
              },
              border: {
                display : false
              },
              ticks:{

              }
            },
            y:{
              grid:{
                display: true,
              },
              border:{
                display:false
              },
              ticks:{
                maxTicksLimit: 5,
              },
            },
          },
          clip: false,
          
        },
      });

      return function cleanup() {
        myLineChart.destroy();
      };
    }
  }, [labels, chartData]);

  return (
    <div className={style.rowChartContainer}>
      <div className={style.rowChart}>
        <canvas ref={canvasEl} />
      </div>
    </div>
  );
};

export default RowChart;
