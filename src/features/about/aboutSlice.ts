import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { SkillList } from '../../types/aboutTypes';

export interface AboutState {
    skillList: SkillList[];
    skillMessageStatus: null | string;
}

const initialState: AboutState = {
    skillList: [
        { skillName: 'HTML5', skillValue: 90 },
        { skillName: 'СSS3', skillValue: 85 },
        { skillName: 'JavaScript', skillValue: 80 },
        { skillName: 'React', skillValue: 80 },
        { skillName: 'TypeScript', skillValue: 65 },
    ],
    skillMessageStatus: null,
};

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        changeSkillValue: (state, action: PayloadAction<SkillList[]>) => {
            state.skillList = action.payload;
        },
        changeMessageStatus: (state, action: PayloadAction<string | null>) => {
            state.skillMessageStatus = action.payload;
        },
    },
});

export const { changeSkillValue, changeMessageStatus } = aboutSlice.actions;
export const skillList = (state: RootState) => state.about.skillList;
export const skillMessageStatus = (state: RootState) =>
    state.about.skillMessageStatus;

export default aboutSlice.reducer;
