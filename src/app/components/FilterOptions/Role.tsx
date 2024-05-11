import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setJobRole } from "../../reducers/filterSlice";
import styles from "../../styles/FilterOptions.module.css";

const Role = () => {
  const [selectedJobRole, setSelectedJobRole] = useState<Array<string>>([]);

  const dispatch = useAppDispatch();

  const options = ["frontend", "ios", "android", "tech lead", "backend"];

  const handleChange = (value: string[]) => {
    setSelectedJobRole(value);
    dispatch(setJobRole(value));
  };

  const filteredOptions = options.filter(
    (option) => !selectedJobRole.includes(option),
  );

  return (
    <Autocomplete
      id="job-role-filter"
      options={filteredOptions}
      multiple
      value={selectedJobRole}
      onChange={(_, v) => handleChange(v)}
      className={styles.filterInput}
      limitTags={1}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Job Role"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            style: {
              textTransform: "capitalize",
            },
          }}
        />
      )}
    />
  );
};

export default Role;
