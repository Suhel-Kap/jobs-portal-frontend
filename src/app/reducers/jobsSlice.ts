import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Job } from "../types";

export interface JobsState {
  jobs: Job[];
  filteredJobs: Job[];
  totalJobs: number;
  totalFilteredJobs: number;
}

const initialState: JobsState = {
  jobs: [],
  filteredJobs: [],
  totalJobs: 0,
  totalFilteredJobs: 0,
};

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = [...state.jobs, ...action.payload];
    },
    setFilteredJobs: (state, action: PayloadAction<Job[]>) => {
      state.filteredJobs = action.payload;
    },
    setTotalJobs: (state, action: PayloadAction<number>) => {
      state.totalJobs = action.payload;
    },
    setTotalFilteredJobs: (state, action: PayloadAction<number>) => {
      state.totalFilteredJobs = action.payload;
    },
  },
});

export const { setJobs, setFilteredJobs, setTotalJobs, setTotalFilteredJobs } =
  jobSlice.actions;

export const getJobs = (state: RootState) => state.jobs.jobs;
export const getFilteredJobs = (state: RootState) => state.jobs.filteredJobs;

export default jobSlice.reducer;
