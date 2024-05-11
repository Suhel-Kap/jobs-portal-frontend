import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setMinimumSalary } from "../../reducers/filterSlice";
import styles from "../../styles/FilterOptions.module.css";

const MinBasePay = () => {
  const [selectedBasePay, setSelectedBasePay] = useState<number>(0);

  const dispatch = useAppDispatch();

  const options = [
    {
      value: 10,
      label: "10LPA",
    },
    {
      value: 20,
      label: "20LPA",
    },
    {
      value: 30,
      label: "30LPA",
    },
    {
      value: 40,
      label: "40LPA",
    },
    {
      value: 50,
      label: "50LPA",
    },
    {
      value: 60,
      label: "60LPA",
    },
    {
      value: 70,
      label: "70LPA",
    },
    {
      value: 80,
      label: "80LPA",
    },
    {
      value: 90,
      label: "90LPA",
    },
    {
      value: 100,
      label: "100LPA",
    },
  ];

  const handleChange = (value: number) => {
    setSelectedBasePay(value);
    dispatch(setMinimumSalary(value));
  };

  const filteredOptions = options.filter(
    (option) => option.value !== selectedBasePay,
  );

  return (
    <Autocomplete
      id="minimum-base-pay"
      options={filteredOptions}
      getOptionLabel={(option) => option.label}
      value={options.find((option) => option.value === selectedBasePay)}
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
