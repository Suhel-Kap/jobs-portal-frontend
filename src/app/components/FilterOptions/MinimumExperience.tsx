import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setExperience } from "../../reducers/filterSlice";
import styles from "../../styles/FilterOptions.module.css";

const MinimumExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState<string>("");

  const dispatch = useAppDispatch();

  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const handleChange = (value: string) => {
    setSelectedExperience(value);
    console.log(value, "fds");
    if (value === null) return dispatch(setExperience(0));
    dispatch(setExperience(parseInt(value)));
  };

  const filteredOptions = options.filter(
    (option) => option !== selectedExperience,
  );

  return (
    <Autocomplete
      id="minimum-experience"
      options={filteredOptions}
      value={selectedExperience}
      onChange={(_, v) => handleChange(v!)}
      className={styles.filterInput}
      style={{ width: "105px" }}
      renderInput={(params) => (
        <TextField {...params} label="Min Exp" variant="outlined" />
      )}
    />
  );
};

export default MinimumExperience;
