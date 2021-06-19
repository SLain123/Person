import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { SkillList, SkillRatio } from '../../types/aboutTypes';

export interface SkillProps {
    skillList: SkillList[];
    skillRatio: SkillRatio;
}

export interface AboutState extends SkillProps {
    skillPoints: number;
}

const initialState: AboutState = {
    skillList: [
        { skillName: 'HTML5', skillValue: 90 },
        { skillName: 'СSS3', skillValue: 85 },
        { skillName: 'JavaScript', skillValue: 80 },
        { skillName: 'React', skillValue: 80 },
        { skillName: 'TypeScript', skillValue: 65 },
    ],
    skillPoints: 400,
    skillRatio: {
        HTML5: 4.44,
        СSS3: 4.7,
        JavaScript: 5,
        React: 5,
        TypeScript: 6.15,
    },
};

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        changeSkillValue: (state, action: PayloadAction<SkillProps>) => {
            state.skillRatio = action.payload.skillRatio;
            state.skillList = action.payload.skillList;
        },
    },
});

export const { changeSkillValue } = aboutSlice.actions;
export const skillList = (state: RootState) => state.about.skillList;
export const skillPoints = (state: RootState) => state.about.skillPoints;
export const skillRatio = (state: RootState) => state.about.skillRatio;

export default aboutSlice.reducer;
