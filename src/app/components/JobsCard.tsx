import { Job } from "../types";
import styles from "../styles/JobCard.module.css";

function JobsCard({ job }: { job: Job }) {
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <img
          src={job.logoUrl}
          alt={`${job.companyName}-logo`}
          className={styles.companyLogo}
        />
        <div>
          <p className={styles.companyName}>{job.companyName}</p>
          <p className={styles.jobRole}>{job.jobRole}</p>
          <p className={styles.jobLocation}>{job.location}</p>
        </div>
      </div>
      <div className={styles.middleRow}>
        <div>
          {/* if both, min and max salary are present, then show both
        if only min salary is present, then show only min salary
        if only max salary is present, then show only max salary
        if both are not present, then show "Not Specified" */}
          <p>
            Estimated Salary:{" "}
            {job.minJdSalary && job.maxJdSalary
              ? `₹${job.minJdSalary} - ${job.maxJdSalary} LPA ✅`
              : job.minJdSalary
                ? `₹${job.minJdSalary} LPA ✅`
                : job.maxJdSalary
                  ? `₹${job.maxJdSalary} LPA ✅`
                  : "Not Specified"}
          </p>
        </div>
        <p className={styles.jobPostedAt}>
          {job.jobDetailsFromCompany.slice(0, 325)}
        </p>
        {job.minExp && (
          <p className={styles.jobPostedAt}>
            Minimum Experience: {job.minExp} years
          </p>
        )}
      </div>
    </div>
  );
}

export default JobsCard;
