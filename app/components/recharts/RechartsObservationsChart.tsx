"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { type: 'Comm', closed: 0, open: 0 },
  { type: 'Conf', closed: 20, open: 13 },
  { type: 'Defec', closed: 22, open: 0 },
  { type: 'Equi', closed: 7, open: 26 },
  { type: 'Neic', closed: 30, open: 17 },
  { type: 'Non-C', closed: 28, open: 5 },
  { type: 'Safe', closed: 38, open: 10 },
  { type: 'Sate', closed: 15, open: 31 },
  { type: 'Safe', closed: 30, open: 15 },
  { type: 'Work', closed: 20, open: 17 },
];

export default function ObservationsChart() {
  return (
    <div>
      <h4>Observations by Type</h4>
      <ResponsiveContainer width="40%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
          <XAxis
            dataKey="type"
            axisLine={{ stroke: '#e0e0e0' }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 80]}
            axisLine={{ stroke: '#e0e0e0' }}
            tickLine={false}
            tickCount={5}
            label={{ value: 'No. of Observations', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingBottom: 20 }} />
          <Bar dataKey="closed" stackId="a" name="Closed" fill="#1f77b4" />
          <Bar dataKey="open" stackId="a" name="Open" fill="#9467bd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}