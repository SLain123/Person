import React from 'react';
import { SkillProps } from '../../types/aboutTypes';

import classes from './SkillRange.module.scss';

interface Props extends SkillProps {
    onChangeFunc: (skillName: string, skillValue: number) => void;
}

const SkillRange: React.FC<Props> = ({
    skillName,
    skillValue,
    onChangeFunc,
}) => {
    return (
        <div className={classes.skillRange}>
            <button
                type='button'
                aria-label='Display skill description'
                className={classes.skillRangeName}
            >
                {skillName}
            </button>
            <input
                className={classes.skillRangeInput}
                type='range'
                id={skillName}
                name={skillName}
                min={0}
                max={100}
                step={1}
                value={skillValue}
                onChange={(e) =>
                    onChangeFunc(e.target.name, Number(e.target.value))
                }
            />
            <label className={classes.skillRangeValue} htmlFor={skillName}>
                {skillValue}%
            </label>
        </div>
    );
};

export default SkillRange;
