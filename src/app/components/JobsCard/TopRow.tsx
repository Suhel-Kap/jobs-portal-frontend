import { Job } from "../../types";
import styles from "../../styles/JobCard.module.css";

function TopRow({ job }: { job: Job }) {
  return (
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
  );
}

export default TopRow;
