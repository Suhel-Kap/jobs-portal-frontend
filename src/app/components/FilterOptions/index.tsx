import MinimumExperience from "./MinimumExperience";
import styles from "../../styles/FilterOptions.module.css";
import CompanyName from "./CompanyName";
import Location from "./Location";
import Remote from "./Remote";
import TechStack from "./TechStack";
import Role from "./Role";
import MinBasePay from "./MinBasePay";

function FilterOptions() {
  return (
    <div className={styles.container}>
      <MinimumExperience />
      <CompanyName />
      <Location />
      <Remote />
      <TechStack />
      <Role />
      <MinBasePay />
    </div>
  );
}

export default FilterOptions;
