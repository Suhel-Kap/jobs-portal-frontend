import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FilterState } from "../types";

const initialState: FilterState = {
  filters: {
    minimumExperience: 0,
    location: [],
    remote: "",
    techStack: [],
    jobRole: [],
    companyName: "",
    minimumSalary: 0,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setExperience: (state, action: PayloadAction<number>) => {
      state.filters.minimumExperience = action.payload;
    },
    setLocation: (state, action: PayloadAction<string[]>) => {
      state.filters.location = action.payload;
    },
    setRemote: (state, action: PayloadAction<string>) => {
      state.filters.remote = action.payload;
    },
    setTechStack: (state, action: PayloadAction<string[]>) => {
      state.filters.techStack = action.payload;
    },
    setJobRole: (state, action: PayloadAction<string[]>) => {
      state.filters.jobRole = action.payload;
    },
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.filters.companyName = action.payload;
    },
    setMinimumSalary: (state, action: PayloadAction<number>) => {
      state.filters.minimumSalary = action.payload;
    },
  },
});

export const {
  setExperience,
  setRemote,
  setJobRole,
  setLocation,
  setTechStack,
  setCompanyName,
  setMinimumSalary,
} = filterSlice.actions;

export const selectFilters = (state: RootState) => state.filter.filters;

export default filterSlice.reducer;
