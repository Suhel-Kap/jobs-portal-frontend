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
    console.log("Fetching jobs", limit, offset);
    fetchJobs(limit, offset)
      .then((data) => {
        dispatch(setJobs(data as Job[]));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [offset, dispatch]);

  useEffect(() => {
    const jobsFiltered = filterJobs(jobs, filters);
    dispatch(setFilteredJobs(jobsFiltered));
  }, [dispatch, filters, jobs]);

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {filteredJobs.map((job) => (
          <JobsCard key={job.jdUid} job={job} />
        ))}
      </div>
      {filteredJobs.length === 0 && (
        <div className={styles.noJobs}>
          <h2 className={styles.noJobsHeader}>No jobs found</h2>
        </div>
      )}
    </div>
  );
}

export default JobsList;
