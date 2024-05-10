import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getJobs, setJobs } from "../reducers/jobsSlice";
import { Job } from "../types";
import { fetchJobs } from "../utils/fetchJobs";
import JobsCard from "./JobsCard";
import styles from "../styles/JobsList.module.css";

function JobsList() {
  const [offset, setOffset] = useState(0);
  const limit = 12;

  const dispatch = useAppDispatch();
  const jobs = useAppSelector(getJobs);

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

  console.log(jobs);
  console.log(offset);

  const handleScroll = () => {
    // check if the user has scrolled to the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log("Scrolled to the bottom", offset + limit);
      // update the offset and fetch more jobs
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h1>Jobs List</h1>
      <div className={styles.grid}>
        {jobs.map((job) => (
          <JobsCard key={job.jdUid} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobsList;
