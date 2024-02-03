import CategoryList from "../../../components/budget/spent/CategoryList";

const tempData = [
  {
    categoryName: "Date Night",
    plannedAmount: 250,
    spentAmount: 105.35,
    expenses: [
      {
        id: 1,
        date: "Jan 18",
        amount: 34.56,
        description: "Pizza night at pietras",
      },
      {
        id: 2,
        date: "Jan 6",
        amount: 54.21,
        description: "Mini golf at PuttPutt",
      },
      {
        id: 3,
        date: "Jan 25",
        amount: 75.94,
        description: "Dinner at Your Neighbor Felix",
      },
    ],
  },
  {
    categoryName: "Beer",
    plannedAmount: 125,
    spentAmount: 24.56,
    expenses: [
      {
        id: 1,
        date: "Jan 9",
        amount: 38.45,
        description: "Denver beer co",
      },
      {
        id: 2,
        date: "Jan 6",
        amount: 54.21,
        description: "Mini golf at PuttPutt",
      },
    ],
  },
  {
    categoryName: "Zoe",
    plannedAmount: 60,
    spentAmount: 0,
    expenses: [],
  },
];

function Spent() {
  return (
    <div className="flex flex-col w-11/12 mx-auto text-center">
      {/* MONTH FILTER COMPONENT */}
      <p>January 2024</p>
      <div className="flex justify-between">
        {/* CHART COMPONENT */}
        <p>Chart</p>
        <p>Chart Legend</p>
      </div>
      <CategoryList categories={tempData} />
      <div>Add Expense Form</div>
    </div>
  );
}

export default Spent;
