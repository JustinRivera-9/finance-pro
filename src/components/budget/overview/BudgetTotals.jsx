import BudgetTotalsCard from "./BudgetTotalsCard";

function BudgetTotals() {
  return (
    <div className="flex justify-between w-full mx-auto text-center bg-[#505050] p-4 rounded-xl md:w-fit md:space-x-4 md:h-fit">
      <BudgetTotalsCard amount="$1,875.00">Planned Spend</BudgetTotalsCard>
      <BudgetTotalsCard amount="$1,875.00">Actual Spend</BudgetTotalsCard>
      <BudgetTotalsCard amount="$1,875.00">Net Cash Flow</BudgetTotalsCard>
    </div>
  );
}

export default BudgetTotals;
