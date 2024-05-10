import { Job } from "../types";
import styles from "../styles/JobCard.module.css";

function JobsCard({ job }: { job: Job }) {
  return (
    <div className={styles.container}>
      <h1>{job.jobRole}</h1>
      <p>{job.jobDetailsFromCompany.slice(0, 50)}</p>
    </div>
  );
}

export default JobsCard;
