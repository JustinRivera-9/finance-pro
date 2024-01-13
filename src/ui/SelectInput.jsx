import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";
import { capitalize } from "../utils/helperFunctions";

function SelectInput({ options, children, setValue }) {
  const [selectValue, setSelectValue] = useState(options?.[0]);

  // could solve this with typescript. Checks that the options prop exists for development debugging
  if (!options)
    return (
      <h1>
        Someone forgot a line of code. The SelectInput component requires an
        array of options as a prop
      </h1>
    );

  // call setValue to lift state to form component. In parent component, pass the state setter for the select value into the SelectInput component
  const handleChange = (e) => {
    setSelectValue(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col my-4">
      <FormControl required sx={{ marginTop: "1.5rem" }}>
        <InputLabel id="type">{children}</InputLabel>
        <Select
          label="type"
          id="type"
          value={selectValue}
          input={<OutlinedInput label="type" id="type" />}
          onChange={handleChange}
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
