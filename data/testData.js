export const testData = {
  profile: [
    {
      id: 1,
      userID: 123,
      budget: {
        budgetSetUp: true,
        totalAnticipated: 3075,
        totalActual: 0,
        categories: [
          { id: 1, category: "auto", budget: 200, type: "expense" },
          { id: 2, category: "fixed", budget: 1250, type: "expense" },
          { id: 3, category: "eating out", budget: 125, type: "expense" },
          { id: 4, category: "groceries", budget: 200, type: "expense" },
          { id: 5, category: "misc", budget: 550, type: "expense" },
          { id: 6, category: "work income", budget: 750, type: "income" },
        ],
        expenses: {
          2023: {
            january: [
              {
                id: 1,
                category: "auto",
                amount: 50,
                date: "INSERT DATE",
                description: "This is an auto test expense",
              },
              {
                id: 2,
                category: "misc",
                amount: 145,
                date: "INSERT DATE",
                description: "Misc is the best expense",
              },
              {
                id: 3,
                category: "fixed",
                description: "Gotta love rent",
                date: "INSERT DATE",
                amount: 750,
              },
            ],
            february: [],
            march: [],
            april: [],
            may: [],
            june: [],
            july: [],
            august: [],
            september: [],
            october: [],
            november: [],
            december: [],
          },
        },
      },
      portfolio: {
        portfolioSetUp: false,
      },
    },
    {
      id: 2,
      userID: 321,
      budget: {
        budgetSetUp: false,
        totalAnticipated: 0,
        totalActual: 0,
        categories: [],
        expenses: {
          2023: {
            january: [],
            february: [],
            march: [],
            april: [],
            may: [],
            june: [],
            july: [],
            august: [],
            september: [],
            october: [],
            november: [],
            december: [],
          },
        },
      },
      portfolio: {
        portfolioSetUp: false,
      },
    },
  ],
};
