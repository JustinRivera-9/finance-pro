import { TextField } from "@mui/material";
import { useState } from "react";

function TextInput({ type, defaultValue, children, setValue, isRequired }) {
  const [textValue, setTextValue] = useState(defaultValue);

  const handleChange = (e) => {
    setTextValue(e.target.value);
    setValue(e.target.value);
  };

  if (!isRequired) {
    return (
      <TextField
        sx={{ marginTop: "1.5rem" }}
        id="outlined"
        type={type}
        label={children}
        onChange={handleChange}
        value={textValue}
      />
    );
  }

  return (
    <TextField
      sx={{ marginTop: "1.5rem" }}
      required
      id="outlined-required"
      type={type}
      label={children}
      onChange={handleChange}
      value={textValue}
    />
  );
}

export default TextInput;
