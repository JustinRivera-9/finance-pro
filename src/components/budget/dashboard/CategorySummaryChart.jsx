import { BarChart, axisClasses } from "@mui/x-charts";
import { prepareExpensesByCategory } from "../../../utils/helperFunctions";

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

function CategorySummaryChart({ expenses }) {
  const chartData = prepareExpensesByCategory(expenses);

  return (
    <div className="flex flex-col w-full mx-auto text-3xl bg-[#505050] rounded-xl p-4 md:w-fit">
      <p className="text-center">Expenses by Category</p>
      <BarChart
        dataset={chartData}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "categoryName",
            categoryGapRatio: 0.4,
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

export default CategorySummaryChart;
