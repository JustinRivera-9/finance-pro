import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Backdrop, Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSearchResults } from "../../../services/apiStockInfo";

const tempArray = [
  { stock: "Tesla", ticker: "TSLA" },
  { stock: "Apple", ticker: "APPL" },
  { stock: "Meta", ticker: "META" },
  { stock: "Amazon", ticker: "AMZN" },
  { stock: "Nvidia", ticker: "NVDA" },
];

function SearchForm({ formOpen, setFormOpen }) {
  const [query, setQuery] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const { query } = formData;
    setQuery(query);
    ///////////////////////// Below code currently gets search results
    // const results = await getSearchResults(query);
    // console.log(results);
  };
  const onError = (error) => console.log(error.message);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={formOpen}
    >
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col bg-[#494949] h-1/2 w-3/4 rounded-2xl"
      >
        {/* SEARCH BAR */}
        <div className="mx-auto w-9/10 box-border my-4">
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "1rem",
              paddingX: "1rem",
            }}
          >
            {/* SEARCH BAR */}
            <InputBase
              placeholder="Search by ticker or name"
              inputProps={{ "aria-label": "Search by ticker or name" }}
              onChange={(e) => setQuery(e.target.value)}
              {...register("query")}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            {/* SEARCH ICON */}
            <IconButton
              color="secondary"
              sx={{ p: "10px" }}
              aria-label="search"
              type="submit"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>

        {/* LIST OF RESULTS / A CARD WITH STOCK INFO TO SELECT */}

        {/* CLOSE BUTTON */}
        <div className="flex mx-auto">
          <Button color="secondary" onClick={() => setFormOpen(false)}>
            Close
          </Button>
        </div>
      </form>
    </Backdrop>
  );
}

export default SearchForm;
