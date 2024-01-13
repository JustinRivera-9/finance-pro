import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";
import { capitalize } from "../utils/helperFunctions";

function SelectInput({ options, children }) {
  const [type, setType] = useState(options?.[0]);

  // could solve this with typescript. Checks that the options prop exists for debugging
  if (!options)
    return (
      <h1>The SelectInput component requires an array of options as a prop </h1>
    );

  return (
    <div className="flex flex-col my-4">
      <FormControl required sx={{ marginTop: "1.5rem" }}>
        <InputLabel id="type">{children ? children : ""}</InputLabel>
        <Select
          label="type"
          id="type"
          value={type}
          input={<OutlinedInput label="type" id="type" />}
          onChange={(e) => setType(e.target.value)}
        >
          {options.map((opt) => {
            return (
              <MenuItem key={opt} value={opt}>
                {capitalize(opt)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectInput;
