import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PlannedForm from "../../../components/budget/PlannedForm.jsx";
import LoadingSpinner from "../../../ui/LoadingSpinner.jsx";
import PlannedLayout from "../../../components/budget/PlannedLayout.jsx";
import { getPlannedCategories } from "../../../services/apiPlanned.js";
import { AuthContext } from "../../../utils/context.js";

function Planned() {
  const userId = useContext(AuthContext);
  const [formOpen, setFormOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["planned", userId],
    queryFn: () => getPlannedCategories(userId),
  });

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
