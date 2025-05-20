import Recharts from "./components/Recharts";
import RechartsObservationsChart from "./components/recharts/RechartsObservationsChart";
import ChartjsObservationsChart from "./components/chartjs/ChartjsObservationsChart";
import RechartsInspectionChart from "./components/recharts/RechartsInspectionChart";
import ChartjsInspectionChart from "./components/chartjs/ChartjsInspectionChart";
import RechartsPassRateChart from "./components/recharts/RechartsPassRateChart";
import ChartjsPassRateChart from "./components/chartjs/ChartjsPassRateChart";

export default function Home() {
  return (
    <>
      <h1>Charts Playground</h1>

      <h2>Bar Charts</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div style={{ width: '48%' }}>
          <h3>Recharts</h3>
          <RechartsObservationsChart />
        </div>
        <div style={{ width: '48%' }}>
          <h3>Chart.js</h3>
          <ChartjsObservationsChart />
        </div>
      </div>

      <h2>Line Charts</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div style={{ width: '48%' }}>
          <h3>Recharts</h3>
          <RechartsInspectionChart />
        </div>
        <div style={{ width: '48%' }}>
          <h3>Chart.js</h3>
          <ChartjsInspectionChart />
        </div>
      </div>

      <h2>Gauge Charts</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div style={{ width: '48%' }}>
          <h3>Recharts</h3>
          <RechartsPassRateChart />
        </div>
        <div style={{ width: '48%' }}>
          <h3>Chart.js</h3>
          <ChartjsPassRateChart />
        </div>
      </div>
    </>
  );
}
