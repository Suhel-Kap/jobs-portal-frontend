export interface Job {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number | null;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

export interface JobsState {
  jobs: Job[];
  filteredJobs: Job[];
}

export interface FilterState {
  filters: {
    minimumExperience: number;
    location: string[];
    remote: string;
    techStack: string[];
    jobRole: string[];
    companyName: string;
    minimumSalary: number;
  };
}
