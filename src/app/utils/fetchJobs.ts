import { getSampleJdJSON } from "../constants/jobData";

export const fetchJobs = (limit: number, offset: number) => {
  const jobs = getSampleJdJSON();

  // Add a delay to simulate network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobs.slice(offset, offset + limit));
    }, 350);
  });
};
