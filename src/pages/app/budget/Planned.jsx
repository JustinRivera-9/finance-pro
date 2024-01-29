import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PlannedForm from "../../../components/budget/PlannedForm.jsx";
import LoadingSpinner from "../../../ui/LoadingSpinner.jsx";
import PlannedLayout from "../../../components/budget/PlannedLayout.jsx";
import { getPlannedCategories } from "../../../services/apiPlanned.js";

function Planned({ userId }) {
  const [formOpen, setFormOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["planned", userId],
    queryFn: () => getPlannedCategories(userId),
  });

  console.log(data, isLoading, error);

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (error) {
    return <h2>There was an error: {error}</h2>;
  }

  return (
    <div className="w-full mt-6">
      <PlannedLayout openForm={setFormOpen} categories={data} />
      {formOpen && (
        <PlannedForm formOpen={formOpen} setFormOpen={setFormOpen} />
      )}
    </div>
  );
}
export default Planned;

// Add snackbar when editing or deleting
