import { BarChart, axisClasses } from "@mui/x-charts";
import { prepareExpensesByMonth } from "../../../utils/helperFunctions";

const chartSetting = {
  width: 367,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(0px, 0px)",
    },
  },
};

const valueFormatter = (value) => `$${value}`;

function MonthSummaryChart({ expenses }) {
  const chartData = prepareExpensesByMonth(expenses);

  return (
    <div className="flex flex-col justify-center w-full mx-auto text-3xl rounded-xl px-1 md:w-fit md:py-4 md:pr-0 ">
      <p className="text-center">Expenses by Month</p>
      <BarChart
        dataset={chartData}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "month",
            categoryGapRatio: 0.5,
            barGapRatio: 0.2,
          },
        ]}
        series={[
          {
            dataKey: "amount",
            label: "Amount",
            valueFormatter,
            color: "#48ff00",
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}

export default MonthSummaryChart;
