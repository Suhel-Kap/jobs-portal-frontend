import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setLocation } from "../../reducers/filterSlice";
import styles from "../../styles/FilterOptions.module.css";

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState<Array<string>>([]);

  const dispatch = useAppDispatch();

  const options = [
    "delhi ncr",
    "mumbai",
    "chennai",
    "hyderabad",
    "pune",
    "bangalore",
  ];

  const handleChange = (value: string[]) => {
    setSelectedLocation(value);
    dispatch(setLocation(value));
  };

  const filteredOptions = options.filter(
    (option) => !selectedLocation.includes(option),
  );

  return (
    <Autocomplete
      id="location"
      options={filteredOptions}
      multiple
      value={selectedLocation}
      onChange={(_, v) => handleChange(v)}
      className={styles.filterInput}
      limitTags={1}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Location"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            style: { textTransform: "capitalize" },
          }}
        />
      )}
    />
  );
};

export default Location;
