import { Job } from "../../types";
import styles from "../../styles/JobCard.module.css";
import TopRow from "./TopRow";
import MiddleRow from "./MiddleRow";
import BottomRow from "./BottomRow";

function JobsCard({ job }: { job: Job }) {
  return (
    <div className={styles.container}>
      <TopRow job={job} />
      <MiddleRow job={job} />
      <BottomRow job={job} />
    </div>
  );
}

export default JobsCard;
