import { FilterState } from "../reducers/filterSlice";
import { Job } from "../types";

const filterJobs = (jobs: Job[], filters: FilterState["filters"]): Job[] => {
  return jobs.filter((job) => {
    const {
      minimumExperience,
      location,
      remote,
      techStack,
      jobRole,
      companyName,
      minimumSalary,
    } = filters;

    // Check if minimum experience matches
    const isExpMatched =
      minimumExperience === 0 ||
      (job.minExp && job.minExp >= minimumExperience);

    // Check if location matches
    const isLocationMatched =
      location.length === 0 || location.includes(job.location.toLowerCase());

    // Check if remote/on-site matches
    const isRemoteMatched =
      remote === "" || remote === null
        ? true
        : remote === "remote"
          ? job.location === "remote"
          : job.location !== "remote";

    // Check if tech stack matches
    const isTechStackMatched =
      techStack.length === 0 ||
      techStack.some((stack) => job.jobRole.includes(stack));

    // Check if job role matches
    const isJobRoleMatched =
      jobRole.length === 0 ||
      jobRole.some((stack) => job.jobRole.includes(stack));

    // Check if company name matches
    const isCompanyNameMatched =
      companyName === "" ||
      job.companyName.toLowerCase().includes(companyName.toLowerCase());

    // Check if minimum salary matches
    const isSalaryMatched =
      minimumSalary === 0 ||
      (job.minJdSalary !== null && job.minJdSalary >= minimumSalary);

    return (
      isExpMatched &&
      isLocationMatched &&
      isRemoteMatched &&
      isTechStackMatched &&
      isJobRoleMatched &&
      isCompanyNameMatched &&
      isSalaryMatched
    );
  });
};

export default filterJobs;
