import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FilterState {
  experience: number;
}

const initialState: FilterState = {
  experience: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setExperience: (state, action: PayloadAction<number>) => {
      state.experience = action.payload;
    },
  },
});

export const { setExperience } = filterSlice.actions;

export const selectExperience = (state: RootState) => state.filter.experience;

export default filterSlice.reducer;
