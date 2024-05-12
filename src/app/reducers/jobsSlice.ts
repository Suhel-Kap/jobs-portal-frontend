import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Job, JobsState } from "../types";

const initialState: JobsState = {
  jobs: [],
  filteredJobs: [],
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
  },
});

export const { setJobs, setFilteredJobs } = jobSlice.actions;

export const getJobs = (state: RootState) => state.jobs.jobs;
export const getFilteredJobs = (state: RootState) => state.jobs.filteredJobs;

export default jobSlice.reducer;
