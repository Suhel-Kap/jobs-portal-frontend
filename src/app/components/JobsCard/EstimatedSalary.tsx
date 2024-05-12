import styles from "../../styles/JobCard.module.css";

function EstimatedSalary({
  minJdSalary,
  maxJdSalary,
}: {
  minJdSalary: number | null;
  maxJdSalary: number | null;
}) {
  return (
    <>
      {/* if both, min and max salary are present, then show both
  if only min salary is present, then show only min salary
  if only max salary is present, then show only max salary
  if both are not present, then show "Not Specified" */}
      <p className={styles.estimatedSalary}>
        Estimated Salary:{" "}
        {minJdSalary && maxJdSalary
          ? `₹${minJdSalary} - ${maxJdSalary} LPA ✅`
          : minJdSalary
            ? `₹${minJdSalary} LPA ✅`
            : maxJdSalary
              ? `₹${maxJdSalary} LPA ✅`
              : "Not Specified"}
      </p>
    </>
  );
}

export default EstimatedSalary;
