import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { SkillList } from '../../types/aboutTypes';

export interface AboutState {
    skillList: SkillList[];
}

const initialState: AboutState = {
    skillList: [
        { skillName: 'HTML5', skillValue: 90 },
        { skillName: 'СSS3', skillValue: 85 },
        { skillName: 'JavaScript', skillValue: 80 },
        { skillName: 'React', skillValue: 80 },
        { skillName: 'TypeScript', skillValue: 65 },
    ],
};

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        changeSkillValue: (state, action: PayloadAction<SkillList[]>) => {
            state.skillList = action.payload;
        },
    },
});

export const { changeSkillValue } = aboutSlice.actions;
export const skillList = (state: RootState) => state.about.skillList;

export default aboutSlice.reducer;
