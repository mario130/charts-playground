import RechartsObservationsChart from "./components/Recharts/ObservationsChart";
import RechartsInspectionChart from "./components/Recharts/InspectionChart";

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
          <h3>Design</h3>
          <img
            src="/bar-chart.png"
            alt="Bar chart design"
            style={{ width: '100%', height: 'auto', border: '1px solid #e0e0e0', borderRadius: '4px' }}
          />
        </div>
      </div>

      {/* <h2>Line Charts</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div style={{ width: '48%' }}>
          <h3>Recharts</h3>
          <RechartsInspectionChart />
        </div>
        <div style={{ width: '48%' }}>
          <h3>Design</h3>
          <img
            src="/line-chart.png"
            alt="Line chart design"
            style={{ width: '100%', height: 'auto', border: '1px solid #e0e0e0', borderRadius: '4px' }}
          />
        </div>
      </div> */}
    </>
  );
}
