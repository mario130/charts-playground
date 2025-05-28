"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Standard chart configurations
const CHART_CONFIGS = {
  bar: {
    margin: { top: 10, bottom: 20 },
    barCategoryGap: '30%',
  }
};

// Standard styling configurations
const GRID_STYLES = {
  strokeDasharray: "8 8",
  vertical: false,
  stroke: "#ddd",
  strokeWidth: 2,
};

const X_AXIS_STYLES = {
  axisLine: true,
  tickLine: false,
  tick: { fontSize: 12, fill: '#666' },
  interval: 0,
};

const Y_AXIS_STYLES = {
  axisLine: false,
  tickLine: false,
  tick: { fontSize: 14, fill: '#666' },
  tickCount: 5,
};

// Default color palette - colors will be assigned in order
const DEFAULT_COLOR_PALETTE = [
  '#1D5CC9', // Blue
  '#A049B6', // Purple
  '#059669', // Green
  '#dc2626', // Red
  '#f59e0b', // Orange
  '#8b5cf6', // Violet
  '#06b6d4', // Cyan
  '#84cc16', // Lime
];

// Chart container component
interface ChartContainerProps {
  title: string;
  height: number;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

const ChartContainer = ({ title, height, actions, children }: ChartContainerProps) => (
  <div style={{ height, width: '100%', padding: '20px', backgroundColor: '#fff' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '600', color: '#333' }}>
        {title}
      </h3>
      {actions && <div style={{ display: 'flex', gap: '10px' }}>{actions}</div>}
    </div>
    {children}
  </div>
);

// Custom legend component
const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '10px', fontSize: '14px' }}>
      {payload.map((entry: any, index: number) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: entry.color,
              marginRight: '6px'
            }}
          />
          <span style={{ color: '#666' }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

// Custom tick component for X-axis with ellipsis
const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const maxLength = 8; // Maximum characters before ellipsis
  const text = payload.value;
  const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#666"
        fontSize="12"
      >
        {truncatedText}
      </text>
    </g>
  );
};

// Main styled bar chart component
interface StyledBarChartProps {
  data: any[];
  title: string;
  height?: number;
  showLegend?: boolean;
  stackedBars?: string[];
  yAxisLabel?: string;
  xAxisLabel?: string;
  yAxisDomain?: [number, number];
  actions?: React.ReactNode;
  customXAxisTick?: boolean;
  barRadius?: [number, number, number, number];
}

export const StyledBarChart = ({
  data,
  title,
  height = 450,
  showLegend = true,
  stackedBars = [],
  yAxisLabel = '',
  xAxisLabel = '',
  yAxisDomain,
  actions,
  customXAxisTick = true,
  barRadius = [0, 0, 0, 0],
}: StyledBarChartProps) => {

  // Get color for bar based on its index in stackedBars array
  const getColor = (index: number) => {
    return DEFAULT_COLOR_PALETTE[index % DEFAULT_COLOR_PALETTE.length];
  };

  return (
    <ChartContainer title={title} height={height} actions={actions}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          {...CHART_CONFIGS.bar}
        >
          <CartesianGrid {...GRID_STYLES} />
          <XAxis
            dataKey="type"
            {...X_AXIS_STYLES}
            tick={customXAxisTick ? <CustomXAxisTick /> : X_AXIS_STYLES.tick}
            label={xAxisLabel ? {
              value: xAxisLabel,
              angle: 0,
              position: 'bottom',
              style: { textAnchor: 'middle', fontSize: '12px', fill: '#666' }
            } : undefined}
          />
          <YAxis
            {...Y_AXIS_STYLES}
            domain={yAxisDomain}
            label={yAxisLabel ? {
              value: yAxisLabel,
              angle: -90,
              position: 'insideLeft',
              style: { textAnchor: 'middle', fontSize: '12px', fill: '#666' }
            } : undefined}
          />
          {/* <Tooltip {...TOOLTIP_STYLES} /> */}
          {showLegend && (
            <Legend
              content={renderLegend}
              verticalAlign="top"
              height={36}
              wrapperStyle={{ paddingBottom: '10px' }}
            />
          )}
          {stackedBars.map((barKey, index) => (
            <Bar
              key={barKey}
              dataKey={barKey}
              stackId={stackedBars.length > 1 ? "a" : undefined}
              name={barKey.charAt(0).toUpperCase() + barKey.slice(1)}
              fill={getColor(index)}
              stroke="#ffffff"
              strokeWidth={stackedBars.length > 1 ? 1 : 0}
              radius={index === stackedBars.length - 1 ? [5, 5, 0, 0] : barRadius}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default StyledBarChart;