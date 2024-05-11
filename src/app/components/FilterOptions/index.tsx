import MinimumExperience from "./MinimumExperience";
import styles from "../../styles/FilterOptions.module.css";
import CompanyName from "./CompanyName";
import Location from "./Location";
import Remote from "./Remote";
import Role from "./Role";
import MinBasePay from "./MinBasePay";

function FilterOptions() {
  return (
    <div className={styles.container}>
      <Role />
      <Location />
      <MinimumExperience />
      <Remote />
      <MinBasePay />
      <CompanyName />
    </div>
  );
}

export default FilterOptions;
