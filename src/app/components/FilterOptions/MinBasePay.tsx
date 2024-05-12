import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { MINIMUM_BASE_PAY_OPTIONS } from "../../constants/filterData";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setMinimumSalary } from "../../reducers/filterSlice";
import styles from "../../styles/FilterOptions.module.css";

const MinBasePay = () => {
  const [selectedBasePay, setSelectedBasePay] = useState<number>(0);

  const dispatch = useAppDispatch();

  const handleChange = (value: number) => {
    setSelectedBasePay(value);
    dispatch(setMinimumSalary(value));
  };

  // Keep the selected option out of the dropdown list
  const filteredOptions = MINIMUM_BASE_PAY_OPTIONS.filter(
    (option) => option.value !== selectedBasePay,
  );

  return (
    <Autocomplete
      id="minimum-base-pay"
      options={filteredOptions}
      getOptionLabel={(option) => option.label}
      value={MINIMUM_BASE_PAY_OPTIONS.find(
        (option) => option.value === selectedBasePay,
      )}
      onChange={(_, v) => handleChange(v?.value || 0)}
      className={styles.filterInput}
      style={{ width: "150px" }}
      renderInput={(params) => (
        <TextField {...params} label="Minimum Base Pay" variant="outlined" />
      )}
    />
  );
};

export default MinBasePay;
