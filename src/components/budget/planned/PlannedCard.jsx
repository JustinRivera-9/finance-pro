import { FaPen as EditIcon } from "react-icons/fa";
import { FaTrashAlt as DeleteIcon } from "react-icons/fa";

import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import PlannedForm from "./PlannedForm";
import { formatCurrency } from "../../../utils/helperFunctions";
import { AuthContext } from "../../../utils/context";
import { deletePlannedCategory } from "../../../services/apiPlanned";

function PlannedCard({ categoryData }) {
  const [formOpen, setFormOpen] = useState(false);
  const userId = useContext(AuthContext);
  const {
    category,
    amount,
    type,
    id: categoryId,
    isFixed,
    fixedDate,
  } = categoryData;

  // REACT QUERY MUTATIONS
  const queryClient = useQueryClient();
  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: deletePlannedCategory,
    onSuccess: () => {
      toast.success("Category successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["planned", userId] });
    },

    onError: (err) =>
      toast.error(
        "There was a problem deleting the category. Please try again"
      ),
  });

  return (
    <>
      <li className="flex flex-wrap rounded-xl justify-between p-4 text-xl font-normal bg-[#404040] text-stone-200">
        <div className="flex w-1/2 sm:2/3 text-left justify-between">
          <p className="capitalize">{category}</p>
          <p className="">{formatCurrency(amount)}</p>
        </div>
        <div className="flex justify-around w-1/5">
          <button>
            <EditIcon onClick={() => setFormOpen((show) => !show)} />
          </button>
          <button>
            <DeleteIcon onClick={() => mutate({ categoryId, userId })} />
          </button>
        </div>
        {isFixed && (
          <p className="text-[1rem] text-green-400">
            Repeats on day {fixedDate} of the month.
          </p>
        )}
      </li>
      {formOpen && (
        <PlannedForm
          categoryToEdit={categoryData}
          formOpen={formOpen}
          setFormOpen={setFormOpen}
        />
      )}
    </>
  );
}

export default PlannedCard;
