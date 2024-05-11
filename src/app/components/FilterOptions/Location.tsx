import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/FilterOptions.module.css";

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState<Array<string>>([]);
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
      renderInput={(params) => (
        <TextField {...params} label="Location" variant="outlined" />
      )}
    />
  );
};

export default Location;
