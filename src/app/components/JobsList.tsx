import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  getFilteredJobs,
  getJobs,
  setFilteredJobs,
  setJobs,
} from "../reducers/jobsSlice";
import { Job } from "../types";
import { fetchJobs } from "../utils/fetchJobs";
import JobsCard from "./JobsCard";
import styles from "../styles/JobsList.module.css";
import { selectFilters } from "../reducers/filterSlice";
import filterJobs from "../utils/filterJobs";

function JobsList() {
  const [offset, setOffset] = useState(0);
  const limit = 12;

  const dispatch = useAppDispatch();
  const jobs = useAppSelector(getJobs);
  const filteredJobs = useAppSelector(getFilteredJobs);
  const filters = useAppSelector(selectFilters);

  // This useEffect is used to fetch more data
  useEffect(() => {
    fetchJobs(limit, offset)
      .then((data) => {
        dispatch(setJobs(data as Job[]));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [offset, dispatch]);

  // This useEffect is triggered whenever new jobs are fetched or the filters are updated
  // This would set the filtered jobs based on the filters or set the filtered jobs to all jobs
  // if no filters are applied
  useEffect(() => {
    const jobsFiltered = filterJobs(jobs, filters);
    dispatch(setFilteredJobs(jobsFiltered));
  }, [dispatch, filters, jobs]);

  // This function is used to handle the infinite scroll
  const handleScroll = () => {
    // check if the user has scrolled to the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // update the offset and fetch more jobs
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  useEffect(() => {
    // Add an event listener to listen for scroll events when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts, necessary to prevent memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {filteredJobs.map((job) => (
          <JobsCard key={job.jdUid} job={job} />
        ))}
      </div>
      {/* if no jobs match the filters, show no jobs found */}
      {filteredJobs.length === 0 && (
        <div className={styles.noJobs}>
          <h2 className={styles.noJobsHeader}>No jobs found</h2>
        </div>
      )}
    </div>
  );
}

export default JobsList;
