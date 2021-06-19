import React from 'react';
import SkillRange from '../SkillRange';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    skillList,
    skillRatio,
    skillPoints,
    changeSkillValue,
} from '../../features/about/aboutSlice';

import classes from './Skills.module.scss';

const Skills: React.FC = () => {
    const skillData = useAppSelector(skillList);
    const ratio = useAppSelector(skillRatio);
    const points = useAppSelector(skillPoints);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const calculateNewSkillValue = (
        targetName: string,
        targetValue: number,
    ) => {
        const newRatio: any = {};

        skillData.forEach(({ skillValue, skillName }) => {
            newRatio[skillName] = points / skillValue;
        });

        console.log(newRatio);

        const newList = skillData.map((data) => {
            const { skillName } = data;
            if (skillName === targetName) {
                const newValue = targetValue >= 50 ? targetValue : 50;
                return { skillName, skillValue: newValue };
            } else {
                return data;
            }
        });
        dispatch(changeSkillValue({ skillRatio: ratio, skillList: newList }));
    };

    const skillRangeList = skillData.map((data) => (
        <li key={data.skillName}>
            <SkillRange {...data} onChangeFunc={calculateNewSkillValue} />
        </li>
    ));

    return (
        <div className={classes.skills}>
            <h3 className={classes.skillsTitle}>{t`skills.title`}</h3>
            <ul className={classes.skillsList}>{skillRangeList}</ul>
        </div>
    );
};

export default Skills;
