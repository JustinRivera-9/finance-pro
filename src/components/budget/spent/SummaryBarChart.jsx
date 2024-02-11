import { BarChart, axisClasses } from "@mui/x-charts";
import { prepareSpentBarChartData } from "../../../utils/helperFunctions";

const chartSetting = {
  yAxis: [
    {
      label: "($)",
    },
  ],
  width: 550,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-10px, 0)",
    },
  },
};

const valueFormatter = (value) => `$${value}`;

export default function SummaryBarChart({ expenses }) {
  const chartData = prepareSpentBarChartData(expenses);

  return (
    <BarChart
      dataset={chartData}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "category",
          categoryGapRatio: 0.5,
          barGapRatio: 0.2,
        },
      ]}
      series={[
        { dataKey: "plannedAmount", label: "Planned", valueFormatter },
        { dataKey: "spentAmount", label: "Spent", valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
