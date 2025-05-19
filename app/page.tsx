import Recharts from "./components/Recharts";
import RechartsObservationsChart from "./components/recharts/RechartsObservationsChart";

export default function Home() {
  return (
    <>
      <h1>Charts Playground</h1>

      <h3>Recharts</h3>
      <Recharts />

      <h3>Observations by Type</h3>
      <RechartsObservationsChart />
    </>
  );
}
