import { BarChart, axisClasses } from "@mui/x-charts";
import { monthArr } from "../../../utils/helperFunctions";

const chartSetting = {
  yAxis: [
    {
      label: "($)",
    },
  ],
  width: 450,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-5px, 0)",
    },
  },
};

const valueFormatter = (value) => `$${value}`;

function MonthSummaryChart() {
  const tempChartData = [
    4235, 4561, 2156, 5612, 2356, 4596, 3549, 3498, 5894, 4156, 4357, 3987,
  ];

  return (
    <div className="flex flex-col w-full mx-auto text-3xl bg-[#505050] rounded-xl p-4">
      <p className="text-center">Expenses by Month</p>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: monthArr,
            categoryGapRatio: 0.4,
          },
        ]}
        series={[{ data: tempChartData, valueFormatter, color: "#48ff00" }]}
        {...chartSetting}
      />
    </div>
  );
}

export default MonthSummaryChart;
