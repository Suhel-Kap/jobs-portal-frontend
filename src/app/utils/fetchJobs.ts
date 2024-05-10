import { getSampleJdJSON } from "../constants/jobData";

export const fetchJobs = (limit: number, offset: number) => {
  const jobs = getSampleJdJSON();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobs.slice(offset, offset + limit));
    }, 1000);
  });
};
