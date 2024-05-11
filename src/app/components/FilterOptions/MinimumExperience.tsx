import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/FilterOptions.module.css";

const MinimumExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState<Array<string>>(
    [],
  );
  const options = ["1", "2", "3"];

  const handleChange = (value: string[]) => {
    setSelectedExperience(value);
  };

  const filteredOptions = options.filter(
    (option) => !selectedExperience.includes(option),
  );

  return (
    <Autocomplete
      id="minimum-experience"
      options={filteredOptions}
      multiple
      value={selectedExperience}
      onChange={(_, v) => handleChange(v)}
      className={styles.filterInput}
      renderInput={(params) => (
        <TextField {...params} label="Min Exp" variant="outlined" />
      )}
    />
  );
};

export default MinimumExperience;
