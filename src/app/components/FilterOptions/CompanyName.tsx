import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setCompanyName } from "../../reducers/filterSlice";
import styles from "../../styles/FilterOptions.module.css";

const CompanyName = () => {
  const [company, setCompany] = useState("");
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null); // Timer to handle debouncing

  const dispatch = useAppDispatch();

  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setCompany(input);
    console.log(input);

    // Clear the previous timer if exists
    if (timer) {
      clearTimeout(timer);
    }

    // Set a new timer for 500ms
    const newTimer = setTimeout(() => {
      dispatch(setCompanyName(input)); // Dispatch after debounce time
    }, 500);

    // Set the new timer
    setTimer(newTimer);
  };

  return (
    <TextField
      className={styles.filterInput}
      id="company-name"
      label="Company Name"
      variant="outlined"
      value={company}
      onChange={handleCompanyNameChange}
    />
  );
};

export default CompanyName;
