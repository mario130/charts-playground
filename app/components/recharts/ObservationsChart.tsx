"use client";

import StyledBarChart from "../StyledCharts/StyledBarChart";

const data = [
  { type: 'Communication', closed: 12, open: 20 },
  { type: 'Configuration', closed: 10, open: 25 },
  { type: 'Deficiency', closed: 5, open: 22 },
  { type: 'Equipment', closed: 25, open: 8 },
  { type: 'Near Miss', closed: 15, open: 32 },
  { type: 'Non-Compliance', closed: 2, open: 30 },
  { type: 'Safety Concern', closed: 8, open: 40 },
  { type: 'Safety Incident', closed: 32, open: 12 },
  { type: 'Safety Violation', closed: 15, open: 30 },
  { type: 'Work Practice', closed: 17, open: 20 },
];

export default function ObservationsChart() {
  return (
    <StyledBarChart
      data={data}
      title="Observations by Type"
      stackedBars={['open', 'closed']} // for ordering
      yAxisLabel="No. of Observations"
      xAxisLabel="Type"
      yAxisDomain={[0, 80]}
      showLegend={true}
    />
  );
}