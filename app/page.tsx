import Recharts from "./components/Recharts";
import RechartsObservationsChart from "./components/recharts/RechartsObservationsChart";
import ChartjsObservationsChart from "./components/chartjs/ChartjsObservationsChart";

export default function Home() {
  return (
    <>
      <h1>Charts Playground</h1>

      <h2 >Bar Charts</h2>

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
    </>
  );
}
