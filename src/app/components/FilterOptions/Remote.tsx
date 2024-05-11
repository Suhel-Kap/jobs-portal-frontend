import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/FilterOptions.module.css";

const Remote = () => {
  const [selectedRemote, setSelectedRemote] = useState<Array<string>>([]);
  const options = ["Remote", "In-office", "Hybrid"];

  const handleChange = (value: string[]) => {
    setSelectedRemote(value);
  };

  const filteredOptions = options.filter(
    (option) => !selectedRemote.includes(option),
  );

  return (
    <Autocomplete
      id="remote"
      options={filteredOptions}
      multiple
      value={selectedRemote}
      onChange={(_, v) => handleChange(v)}
      className={styles.filterInput}
      renderInput={(params) => (
        <TextField {...params} label="Remote" variant="outlined" />
      )}
    />
  );
};

export default Remote;
