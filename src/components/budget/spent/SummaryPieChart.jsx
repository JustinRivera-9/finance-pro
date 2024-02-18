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
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 20, additionalRadius: -20 },
          // arcLabel: (item) => `${formatCurrency(item.value)}`,
          arcLabel: (item) => `${item.label.split(" ")[0]}`,
          arcLabelMinAngle: 30,
          innerRadius: 20,
          paddingAngle: 3,
          cornerRadius: 3,
          cx: 120,
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
      width={400}
      height={250}
      slotProps={{
        legend: {
          direction: "column",
          position: { vertical: "top", horizontal: "right" },
          padding: 0,
        },
      }}
    />
  );
}

export default SummaryPieChart;
