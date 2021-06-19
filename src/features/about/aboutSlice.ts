import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { SkillProps } from '../../types/aboutTypes';

export interface AboutState {
    skillsList: SkillProps[];
}

const initialState: AboutState = {
    skillsList: [
        { skillName: 'HTML5', skillValue: 90 },
        { skillName: 'СSS3', skillValue: 85 },
        { skillName: 'JavaScript', skillValue: 80 },
        { skillName: 'React/Redux', skillValue: 80 },
        { skillName: 'TypeScript', skillValue: 65 },
    ],
};

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        changeSkillValue: (state, action: PayloadAction<SkillProps[]>) => {
            state.skillsList = action.payload;
        },
    },
});

export const { changeSkillValue } = aboutSlice.actions;
export const skillsList = (state: RootState) => state.about.skillsList;

export default aboutSlice.reducer;
