import { PieChart } from "@mui/x-charts";
import { prepareSpentChartData } from "../../../utils/helperFunctions";

function SummaryChart({ expenses }) {
  const chartData = [{ data: prepareSpentChartData(expenses) }];
  console.log(chartData);

  return (
    <div className="flex justify-between">
      <PieChart series={chartData} width={400} height={200} />
    </div>
  );
}

export default SummaryChart;
