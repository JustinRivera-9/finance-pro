# FINANCE PRO
Finance Pro enables users to seamlessly track both their budgets and investments in a single platform. Oftentimes, individuals focus solely on budgeting and overlook the crucial aspect of investing. With this application, users can efficiently manage their finances by monitoring their budgets alongside their investment portfolios, ensuring a comprehensive approach to personal financial management.

#### Given that this application is still in the beta phase, please consult the list of known issues below for guidance on using the application effectively in its current state.

## Known Issues / Bugs
- **Responsive Design**: While most of the app has been designed to be responsive, the dashboard pages require different UI layouts and have not been optimized for large screens (i.e., Tablets, Laptops, and Desktops). For a complete user experience, we highly encourage users to use mobile devices. When using a large device, please make the window width as small as possible. 
  - **Note:** The navigation differs for mobile and large devices. If loading on a large device, please reload the application once the window width is minimized to see the small device navigation.
    
- **Planned Categories Cache Issue**: The "Spent" page currently reads the planned categories from the cache instead of fetching from the database (this decision was made to optimize performance). When the active page is "Spent" and the page is reloaded, the planned categories data (used to display category information for accordions) is not refetched, resulting in no data being available in the cache.
  - **Temporary Solution:** If the page breaks, navigate back to any other page, reload, and then visit the "Planned" page to fetch data before accessing the "Spent" page.
  - **Permanent Solution:** Implement a check to see if data exists in the cache. If TRUE, read from the cache. If FALSE, fetch data from the database.
    
- **Active Link Disappearance**: When the page is reloaded, the active link for the main application navigation disappears. This issue is purely UI-related and does not affect the user experience.


## Tech Stack
- **JavaScript**: The primary programming language used in the project.
- **React**: A JavaScript library for building user interfaces.
- **React Router**: A routing library for React applications to navigate between different components.
- **Tanstack Query (React Query)**: A data-fetching library for React that provides a powerful way to manage and sync server state in your React components.
- **React Hook Form**: A library to manage forms in React applications using hooks.
- **Supabase**: A platform that provides backend services like authentication, database, and real-time subscriptions. Used for backend services, authentication, and OAuth.

  
## UI Libraries
- **MUI (Material-UI)**: A popular React UI framework that provides a set of customizable and accessible components following Material Design guidelines.
- **MUI-X**: MUI X is a collection of advanced React UI components for complex use cases. Utilized charts and date pickers for this project.
- **TailwindCSS**: A utility-first CSS framework for quickly building custom designs and layouts.
- **React Hot Toast**: A toast notification library for React applications, used to display success, error, or informational messages to the user.
- **React-Icons**: Icon library that utilizes ES6 imports allowing you to include only the icons that your project is using


## Setup Instructions
**1. Clone the Repository**: Use `git clone` to clone the repository to your local machine.
```bash
git clone https://github.com/JustinRivera-9/finance-pro.git
```
**2. Navigate to the Project Directory**:
```bash
cd <project_directory>
```
**3. Install Dependencies**:
```bash
npm install
```
**4. Start the Development Server**:
```bash
npm run dev
```
**5. Open the Application**: Open your browser and go to http://localhost:5731 to view the application.


## Future Improvements
- **Email Service**: Introduce email reminders to facilitate budget tracking, weekly/monthly recaps, and more.
- **ChatGPT / LLM Integration**: Harness LLM API capabilities to offer personalized financial insights, encompassing spending habits, forecasting, portfolio risk analysis, and beyond.
- **Fixed Expense Calendar**: Develop a dedicated calendar page showcasing fixed expenses as easily recognizable icons.
- **Predefined Budget Categories**: Provide predefined planned budget categories to streamline the budgeting journey for new users.
- **Internal Dashboard**: Create an internal dashboard to monitor and analyze app usage patterns comprehensively.
- **Export to CSV**: Empower users to export their data to CSV format, facilitating further analysis or sharing endeavors.
- **Optimization**: Enhance application efficiency by minimizing database reads and exploring caching techniques for seamless UI state updates.
- **Moving Expenses**: Enable users to transfer expenses between categories for improved organization and management.
- **Goal Setting**: Equip users with the capability to establish and track their financial objectives seamlessly.
