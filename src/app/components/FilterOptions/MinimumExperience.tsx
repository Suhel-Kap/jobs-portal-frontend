import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { MINIMUM_EXPERIENCE_OPTIONS } from "../../constants/filterData";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setExperience } from "../../reducers/filterSlice";
import styles from "../../styles/FilterOptions.module.css";

const MinimumExperience = () => {
  const [selectedExperience, setSelectedExperience] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    setSelectedExperience(value);
    // If user clears the input, the value will be null
    // In that case, set the experience to 0
    if (value === null) return dispatch(setExperience(0));
    dispatch(setExperience(parseInt(value)));
  };

  // Remove the selected experience from the options
  const filteredOptions = MINIMUM_EXPERIENCE_OPTIONS.filter(
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
