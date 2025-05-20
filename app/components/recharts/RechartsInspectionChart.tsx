"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'January',
    projectTotal: 3,
    companyAvg: 5,
    industryAvg: 7
  },
  {
    month: 'January',
    projectTotal: 11,
    companyAvg: 8,
    industryAvg: 10
  },
  {
    month: 'February',
    projectTotal: 12,
    companyAvg: 5,
    industryAvg: 10
  },
  {
    month: 'March',
    projectTotal: 5,
    companyAvg: 12,
    industryAvg: 10
  },
];

export default function RechartsInspectionChart() {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e0e0e0" />
          <XAxis
            dataKey="month"
            axisLine={{ stroke: '#e0e0e0' }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 15]}
            axisLine={{ stroke: '#e0e0e0' }}
            tickLine={false}
            tickCount={4}
            label={{ value: 'Number of Inspection Items', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
          />
          <Tooltip />
          <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingBottom: 20 }} />
          <Line
            type="monotone"
            dataKey="projectTotal"
            name="Project total"
            stroke="#1f77b4"
            activeDot={{ r: 8 }}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="companyAvg"
            name="Company avg"
            stroke="#e377c2"
            activeDot={{ r: 8 }}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="industryAvg"
            name="Industry avg"
            stroke="#17becf"
            activeDot={{ r: 8 }}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}