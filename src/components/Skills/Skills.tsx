import React from 'react';
import SkillRange from '../SkillRange';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { skillsList, changeSkillValue } from '../../features/about/aboutSlice';

import classes from './Skills.module.scss';

const Skills: React.FC = () => {
    const skillData = useAppSelector(skillsList);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const calculateNewSkillValue = (
        targetName: string,
        targetValue: number,
    ) => {
        const newList = skillData.map((data) => {
            const { skillName } = data;
            if (skillName === targetName) {
                const newValue = targetValue >= 50 ? targetValue : 50;
                return { skillName, skillValue: newValue };
            } else {
                return data;
            }
        });
        dispatch(changeSkillValue(newList));
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
