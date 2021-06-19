import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export interface SkillsState {
  selectProjectId: number;
}

const initialState: SkillsState = {
  selectProjectId: 1
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    changeId: (state, action: PayloadAction<number>) => {
      state.selectProjectId = action.payload;
    },
  },
});

export const { changeId } = skillsSlice.actions;
export const selectProjectId = (state: RootState) => state.projects.selectProjectId;

export default skillsSlice.reducer;