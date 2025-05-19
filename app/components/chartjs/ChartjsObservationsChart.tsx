"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Comm', 'Conf', 'Defec', 'Equi', 'Neic', 'Non-C', 'Safe', 'Sate', 'Safe', 'Work'];
const closedData = [0, 20, 22, 7, 30, 28, 38, 15, 30, 20];
const openData = [0, 13, 0, 26, 17, 5, 10, 31, 15, 17];

export default function ChartjsObservationsChart() {
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
        text: 'Observations by Type',
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
        max: 80,
        grid: {
          color: '#e0e0e0',
          drawTicks: false,
        },
        border: {
          color: '#e0e0e0',
        },
        ticks: {
          stepSize: 20,
        },
        title: {
          display: true,
          text: 'No. of Observations',
          padding: { top: 0, bottom: 10 },
        }
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Closed',
        data: closedData,
        backgroundColor: '#1f77b4',
        stack: 'Stack 0',
      },
      {
        label: 'Open',
        data: openData,
        backgroundColor: '#9467bd',
        stack: 'Stack 0',
      },
    ],
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Bar options={options} data={data} />
    </div>
  );
}