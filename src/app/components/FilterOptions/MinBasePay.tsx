import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/FilterOptions.module.css";

const MinBasePay = () => {
  const [selectedBasePay, setSelectedBasePay] = useState<string>("");
  const options = ["0L", "10L"];

  const handleChange = (value: string) => {
    setSelectedBasePay(value);
  };

  const filteredOptions = options.filter(
    (option) => !selectedBasePay.includes(option),
  );

  return (
    <Autocomplete
      id="minimum-base-pay"
      options={filteredOptions}
      value={selectedBasePay}
      onChange={(_, v) => handleChange(v!)}
      className={styles.filterInput}
      renderInput={(params) => (
        <TextField {...params} label="Minimum Base Pay" variant="outlined" />
      )}
    />
  );
};

export default MinBasePay;
