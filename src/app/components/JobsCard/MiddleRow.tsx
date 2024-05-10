import { Job } from "../../types";
import styles from "../../styles/JobCard.module.css";
import { useState } from "react";
import { Modal } from "@mui/material";

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
        {/* if both, min and max salary are present, then show both
      if only min salary is present, then show only min salary
      if only max salary is present, then show only max salary
      if both are not present, then show "Not Specified" */}
        <p className={styles.estimatedSalary}>
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
