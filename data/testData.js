export const userObj = {
  users: [
    {
      id: 1,
      userID: 123,
      email: "justin_rivera9@outlook.com",
      password: "test123",
    },
  ],
  settings: [
    {
      id: 1,
      userID: 123,
      firstName: "Justin",
      lastName: "Rivera",
      email: "jman199610@yahoo.com",
      password: "test123",
    },
  ],
  profile: [
    {
      id: 1,
      userID: 123,
      budgetSetUp: true,
      budget: {
        totalAnticipated: 3075,
        totalActual: 0,
        categories: [
          { category: "auto", budget: 200, type: "expense" },
          { category: "fixed", budget: 1250, type: "expense" },
          { category: "eating out", budget: 125, type: "expense" },
          { category: "groceries", budget: 200, type: "expense" },
          { category: "misc", budget: 550, type: "expense" },
          { category: "work income", budget: 750, type: "income" },
        ],
        expenses: {
          2023: {
            january: [
              {
                category: "auto",
                amount: 50,
                date: "INSERT DATE",
                description: "This is an auto test expense",
              },
              {
                category: "misc",
                amount: 145,
                date: "INSERT DATE",
                description: "Misc is the best expense",
              },
              {
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
      portfolioSetUp: false,
      portfolio: {},
    },
  ],
};
