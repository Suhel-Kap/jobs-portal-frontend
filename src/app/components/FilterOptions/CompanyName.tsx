import { TextField } from "@mui/material";
import styles from "../../styles/FilterOptions.module.css";

const CompanyName = () => {
  return (
    <TextField
      className={styles.filterInput}
      id="compnay-name"
      label="Company Name"
      variant="outlined"
    />
  );
};

export default CompanyName;
