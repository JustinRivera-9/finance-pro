function BudgetCategoriesCard({ budgetData }) {
  const { category, amount, type, id } = budgetData;

  return (
    <ul key={id}>
      <li>Category: {category}</li>
      <li>Amount: ${amount}</li>
      <li>Type: {type}</li>
    </ul>
  );
}

export default BudgetCategoriesCard;
