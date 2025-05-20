"use client";

import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Label, Sector, Text } from 'recharts';

const projectRate = 55;
const companyRate = 97;
const industryRate = 78;
const totalInspections = 50;

interface ProjectBreakdownItem {
  name: string;
  value: number;
  color: string;
  percent: string;
}

const projectBreakdown: ProjectBreakdownItem[] = [
  { name: 'Passed Quality', value: 45, color: '#2c7bb6', percent: '45%' }, // Blue
  { name: 'Failed: Reasons', value: 5, color: '#d62728', percent: '5%' },  // Red
  { name: 'Failed: Reasons', value: 5, color: '#ff9896', percent: '5%' },  // Light Red
];

// For the gray background of the gauge
const backgroundSector = [{ name: 'Background', value: 100, color: '#e0e0e0' }];

interface LegendPayloadItem {
  value: string;
  color: string;
  payload: ProjectBreakdownItem;
}

interface RenderLegendProps {
  payload: LegendPayloadItem[];
}

// Custom legend renderer to show percentages
const renderLegend = (props: RenderLegendProps) => {
  const { payload } = props;

  return (
    <ul style={{ listStyle: "none", marginTop: 0, padding: 0 }}>
      {payload.map((entry: LegendPayloadItem, index: number) => (
        <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: entry.color,
            marginRight: '8px'
          }}></span>
          <span>{entry.value} ({entry.payload.percent})</span>
        </li>
      ))}
    </ul>
  );
};

export default function RechartsPassRateChart() {
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
        <div style={{ width: '70%', height: '200px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              {/* Gray background */}
              <Pie
                data={backgroundSector}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#e0e0e0" />
              </Pie>

              {/* Actual gauge with data */}
              <Pie
                data={projectBreakdown}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {projectBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>

              {/* Percentage in Center-top */}
              <text
                x="50%"
                y="80%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontSize: '24px', fontWeight: 'bold', fill: '#000' }}
              >
                {totalInspections}
              </text>

              {/* Total inspection count */}
              <text
                x="50%"
                y="95%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontSize: '16px', fontWeight: 'bold', fill: '#666' }}
              >
                Total insp.
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{ width: '30%', display: 'flex', alignItems: 'center' }}>
          {renderLegend({ payload: projectBreakdown.map(item => ({
            value: item.name,
            color: item.color,
            payload: item
          })) })}
        </div>
      </div>
    </div>
  );
}