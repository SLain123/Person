import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export interface ProjectsState {
  selectProjectId: number;
}

const initialState: ProjectsState = {
  selectProjectId: 1
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    changeId: (state, action: PayloadAction<number>) => {
      state.selectProjectId = action.payload;
    },
  },
});

export const { changeId } = projectsSlice.actions;
export const selectProjectId = (state: RootState) => state.projects.selectProjectId;

export default projectsSlice.reducer;