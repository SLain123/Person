import React from 'react';
import SkillRange from '../SkillRange';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { skillList, changeSkillValue } from '../../features/about/aboutSlice';
import { getSkillListValue } from './skillAlgorithm';

import classes from './Skills.module.scss';

const Skills: React.FC = () => {
    const skillData = useAppSelector(skillList);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const calculateNewSkillValue = (
        targetName: string,
        targetValue: number,
    ) => {
        const newSkillListValue = getSkillListValue(
            targetName,
            targetValue,
            skillData,
        );
        dispatch(changeSkillValue(newSkillListValue));
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
