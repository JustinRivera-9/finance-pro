import { MenuItem, Select } from "@mui/material";

function MonthFilterButton({ monthFilter, setMonthFilter }) {
  return (
    <Select
      variant="standard"
      value={monthFilter}
      onChange={(e) => setMonthFilter(e.target.value)}
      sx={{
        width: "fit-content",
        margin: "0.75rem auto",
        padding: "0.25rem",
        color: "#48ff00",
      }}
    >
      <MenuItem value="Jan">January</MenuItem>
      <MenuItem value="Feb">February</MenuItem>
      <MenuItem value="Mar">March</MenuItem>
      <MenuItem value="Apr">April</MenuItem>
      <MenuItem value="May">May</MenuItem>
      <MenuItem value="Jun">June</MenuItem>
      <MenuItem value="Jul">July</MenuItem>
      <MenuItem value="Aug">August</MenuItem>
      <MenuItem value="Sep">September</MenuItem>
      <MenuItem value="Oct">October</MenuItem>
      <MenuItem value="Nov">November</MenuItem>
      <MenuItem value="Dec">December</MenuItem>
    </Select>
  );
}

export default MonthFilterButton;
