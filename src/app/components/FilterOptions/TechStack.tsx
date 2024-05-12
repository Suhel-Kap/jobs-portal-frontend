import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { ROLE_OPTIONS } from "../../constants/filterData";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setTechStack } from "../../reducers/filterSlice";
import styles from "../../styles/FilterOptions.module.css";

const TechStack = () => {
  const [selectedTechStack, setSelectedTechStack] = useState<Array<string>>([]);

  const dispatch = useAppDispatch();

  const handleChange = (value: string[]) => {
    setSelectedTechStack(value);
    dispatch(setTechStack(value));
  };

  // Filter out the selected options from the available options
  const filteredOptions = ROLE_OPTIONS.filter(
    (option) => !selectedTechStack.includes(option),
  );

  return (
    <Autocomplete
      id="tech-stack-filter"
      options={filteredOptions}
      multiple
      value={selectedTechStack}
      onChange={(_, v) => handleChange(v)}
      className={styles.filterInput}
      renderInput={(params) => (
        <TextField {...params} label="Tech Stack" variant="outlined" />
      )}
    />
  );
};

export default TechStack;
