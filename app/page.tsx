import LineChart from "./Components/LineChart/LineChart";
const pData = [
  2350, 200, 300, 600, 802, 5000, 3290, 100, 200, 400, 300, 2435, 2450, 2465,
  2455, 2470, 2480, 2475, 2490, 2500, 2495, 2510, 2520, 2515,
];
const xLabels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
export default function page() {
  return (
    <LineChart
      width="50%"
      height="300px"
      noGradiant={false}
      color="#FFD700"
      data={pData}
      label={xLabels}
    />
  );
}
