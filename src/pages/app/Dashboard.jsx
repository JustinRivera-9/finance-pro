function Dashboard() {
  return (
    <div className="flex flex-col text-center w-4/5 mx-auto mt-12 bg-[#494949] p-4 rounded-2xl space-y-12">
      <p className="text-xl">
        Please use the icons below to navigate to the app. This landing page is
        reserved for the application wide dashboard.
      </p>
      <p className="text-xl">
        <span className="text-[#48ff00]">Bug Discovered: </span>There is
        currently a bug when trying to edit an expense that crashes the
        application. If this happens to you please refresh and head back to the
        planned page to reload the data.
      </p>
    </div>
  );
}

export default Dashboard;
