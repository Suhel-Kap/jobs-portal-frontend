import { Job } from "../../types";
import styles from "../../styles/JobCard.module.css";
import { useState } from "react";
import { Modal } from "@mui/material";
import EstimatedSalary from "./EstimatedSalary";

function MiddleRow({ job }: { job: Job }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className={styles.middleRow}>
      <div>
        <EstimatedSalary
          minJdSalary={job.minJdSalary}
          maxJdSalary={job.maxJdSalary}
        />
      </div>
      <div className={styles.jobDescription}>
        <p className={styles.aboutCompany}>About Company</p>
        <p className={styles.jobDetails}>
          {job.jobDetailsFromCompany.slice(0, 325)}
        </p>
        <div className={styles.gradient}></div>
        <button className={styles.viewMoreBtn} onClick={handleOpenModal}>
          View job
        </button>
      </div>
      <div className={styles.minimumExperienceContainer}>
        {job.minExp && (
          <>
            <p className={styles.minimumExperienceTitle}>Minimum Experience</p>
            <p className={styles.minimumExperienceContent}>
              {job.minExp} years
            </p>
          </>
        )}
      </div>
      <Modal open={showModal} onClose={handleCloseModal}>
        <div className={styles.modalContent}>
          <h2 className={styles.jobRole}>{job.jobRole}</h2>
          <p>{job.jobDetailsFromCompany}</p>
        </div>
      </Modal>
    </div>
  );
}

export default MiddleRow;
