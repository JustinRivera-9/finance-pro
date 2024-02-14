import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { prepareSpentPieChartData } from "../../../utils/helperFunctions";

function SummaryPieChart({ expenses }) {
  const containsNonFixedExpense = expenses.some((el) => !el.isFixed);

  if (!containsNonFixedExpense) return null;

  const chartData = prepareSpentPieChartData(expenses);

  return (
    <PieChart
      series={[
        {
          data: chartData,
          highlightScope: { faded: "global", highlighted: "category" },
          faded: { innerRadius: 20, additionalRadius: -20 },
          // arcLabel: (item) => `${formatCurrency(item.value)}`,
          arcLabel: (item) => `${item.label.split(" ")[0]}`,
          arcLabelMinAngle: 30,
          innerRadius: 20,
          paddingAngle: 3,
          cornerRadius: 3,
          cx: 150,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "black",
          fontWeight: "bold",
          fontSize: "0.75rem",
          textWrap: "wrap",
        },
      }}
      width={450}
      height={250}
    />
  );
}

export default SummaryPieChart;
