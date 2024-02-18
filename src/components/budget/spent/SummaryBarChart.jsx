import { BarChart, axisClasses } from "@mui/x-charts";
import { prepareSpentBarChartData } from "../../../utils/helperFunctions";

const chartSetting = {
  yAxis: [
    {
      label: "($)",
    },
  ],
  width: 410,
  height: 300,
  // sx: {
  //   [`.${axisClasses.left} .${axisClasses.label}`]: {
  //     transform: "translate(0px, 0)",
  //   },
  // },
};

const valueFormatter = (value) => `$${value}`;

export default function SummaryBarChart({ expenses }) {
  const containsNonFixedExpense = expenses.some((el) => !el.isFixed);
  if (!containsNonFixedExpense) return null;

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
        {
          dataKey: "plannedAmount",
          label: "Planned",
          valueFormatter,
          color: "#757575",
        },
        {
          dataKey: "spentAmount",
          label: "Spent",
          valueFormatter,
          color: "#48ff00",
        },
      ]}
      {...chartSetting}
    />
  );
}
