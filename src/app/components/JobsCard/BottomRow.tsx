import { Job } from "../../types";
import styles from "../../styles/JobCard.module.css";
import { Button } from "@mui/material";

function BottomRow({ job }: { job: Job }) {
  return (
    <div>
      <Button variant="contained" className={styles.applyBtn}>
        ⚡️Easy Apply
      </Button>
    </div>
  );
}

export default BottomRow;
