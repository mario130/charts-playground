"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'January', 'February', 'March'];
const projectTotalData = [3, 11, 12, 5];
const companyAvgData = [5, 8, 5, 12];
const industryAvgData = [7, 10, 10, 10];

export default function ChartjsInspectionChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'start' as const,
      },
      title: {
        display: true,
        text: 'Number of Inspection Items per week',
        padding: {
          bottom: 20
        }
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          color: '#e0e0e0',
        }
      },
      y: {
        min: 0,
        max: 15,
        grid: {
          color: '#e0e0e0',
          drawTicks: false,
          drawBorder: false,
        },
        border: {
          color: '#e0e0e0',
        },
        ticks: {
          stepSize: 5,
        },
        title: {
          display: true,
          text: 'Number of Inspection Items',
          padding: { top: 0, bottom: 10 },
        }
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Project total',
        data: projectTotalData,
        borderColor: '#1f77b4',
        backgroundColor: '#1f77b4',
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 8,
      },
      {
        label: 'Company avg',
        data: companyAvgData,
        borderColor: '#e377c2',
        backgroundColor: '#e377c2',
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 8,
      },
      {
        label: 'Industry avg',
        data: industryAvgData,
        borderColor: '#17becf',
        backgroundColor: '#17becf',
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 8,
      },
    ],
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Line options={options} data={data} />
    </div>
  );
}