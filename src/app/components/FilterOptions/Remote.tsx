import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { REMOTE_OPTIONS } from "../../constants/filterData";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setRemote } from "../../reducers/filterSlice";
import styles from "../../styles/FilterOptions.module.css";

const Remote = () => {
  const [selectedRemote, setSelectedRemote] = useState<string>();

  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    setSelectedRemote(value);
    dispatch(setRemote(value));
  };

  // Filter out the selected remote option from the options
  const filteredOptions = REMOTE_OPTIONS.filter(
    (option) => !selectedRemote?.includes(option),
  );

  return (
    <Autocomplete
      id="remote"
      options={filteredOptions}
      value={selectedRemote}
      onChange={(_, v) => handleChange(v!)}
      className={styles.filterInput}
      style={{ width: "100px" }}
      renderInput={(params) => (
        <TextField {...params} label="Remote" variant="outlined" />
      )}
    />
  );
};

export default Remote;
