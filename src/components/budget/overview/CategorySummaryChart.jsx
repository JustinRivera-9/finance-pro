import { BarChart, axisClasses } from "@mui/x-charts";

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

function CategorySummaryChart() {
  const tempChartData = [4235, 4561, 2156, 5612, 2356];

  return (
    <div className="flex flex-col w-full mx-auto text-3xl bg-[#505050] rounded-xl p-4">
      <p className="text-center">Expenses by Category</p>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: ["Date Night", "Beer", "Zoe", "Groceries", "Zyns"],
            categoryGapRatio: 0.4,
          },
        ]}
        series={[{ data: tempChartData, valueFormatter, color: "#48ff00" }]}
        {...chartSetting}
      />
    </div>
  );
}

export default CategorySummaryChart;
