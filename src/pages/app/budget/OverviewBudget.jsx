import useGetSettings from "../../../hooks/useGetSettings";

function OverviewBudget() {
  const { settings } = useGetSettings("090886e5-3913-48bd-8582-6aa150cf0cf2");

  console.log(settings);
  return (
    <div className="flex justify-center text-3xl mt-24">
      <h1>INSERT BUDGET OVERVIEW</h1>
    </div>
  );
}

export default OverviewBudget;
