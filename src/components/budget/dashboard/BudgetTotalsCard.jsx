function BudgetTotalsCard({ children, amount }) {
  return (
    <div className="bg-[#505050] p-2 rounded-xl text-slate-200 w-[48%]">
      <p className="text-lg text-[#48ff00]">{children}</p>
      <p className="text-xl">{amount}</p>
    </div>
  );
}

export default BudgetTotalsCard;
