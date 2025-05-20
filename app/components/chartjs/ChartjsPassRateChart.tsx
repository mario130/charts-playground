"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  Plugin
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useRef, useEffect } from 'react';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const projectRate = 55;
const companyRate = 97;
const industryRate = 78;

export default function ChartjsPassRateChart() {
  const chartRef = useRef<any>(null);

  const data: ChartData<'doughnut'> = {
    labels: ['Passed Quality', 'Failed: Reasons', 'Failed: Reasons'],
    datasets: [
      {
        data: [45, 5, 5],
        backgroundColor: ['#2c7bb6', '#d62728', '#ff9896'],
        borderColor: ['#2c7bb6', '#d62728', '#ff9896'],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
      }
    ],
  };


  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: true, // Hide the default legend
        position: 'right',
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
    layout: {
      padding: {
        bottom: 10 // Add padding to make room for the gauge at the bottom
      }
    }
  };

  return (
    <div style={{ height: '320px', width: '100%' }}>
      <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>Inspection Pass Rate (%)</h4>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ textAlign: 'center' }}>
          <div>Project</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{projectRate}%</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div>Company</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{companyRate}%</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div>Industry average</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{industryRate}%</div>
        </div>
      </div>

      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '100%', height: '200px', position: 'relative' }}>
          <Doughnut ref={chartRef} data={data} options={options} />
        </div>
      </div>
    </div>
  );
}