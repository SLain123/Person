import React from 'react';
import { SkillList } from '../../types/aboutTypes';
import PopUpWindow from '../PopUpWindow';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    skillMessageStatus,
    changeMessageStatus,
} from '../../features/about/aboutSlice';
import { CSSTransition } from 'react-transition-group';

import classes from './SkillRange.module.scss';

interface Props extends SkillList {
    onChangeFunc: (skillName: string, skillValue: number) => void;
    messages: string[];
}

const SkillRange: React.FC<Props> = ({
    skillName,
    skillValue,
    onChangeFunc,
    messages,
}) => {
    const dispatch = useAppDispatch();
    const status = useAppSelector(skillMessageStatus);
    let displayPopup = false;

    if (status === skillName) {
        displayPopup = true;
    }
    return (
        <div className={classes.skillRange}>
            <div
                tabIndex={0}
                id='skill'
                aria-label='Display skill description'
                className={classes.skillRangeName}
                onClick={() => dispatch(changeMessageStatus(skillName))}
            >
                {skillName}
                <CSSTransition
                    in={displayPopup}
                    timeout={300}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        enter: classes.skillRangeEnter,
                        enterActive: classes.skillRangeEnterActive,
                        exit: classes.skillRangeExit,
                        exitActive: classes.skillRangeExitActive,
                    }}
                >
                    <PopUpWindow messages={messages} position='left' />
                </CSSTransition>
            </div>

            <input
                className={classes.skillRangeInput}
                type='range'
                id={skillName}
                name={skillName}
                min={0}
                max={100}
                step={1}
                value={skillValue}
                onChange={(evt) =>
                    onChangeFunc(evt.target.name, Number(evt.target.value))
                }
            />
            <label className={classes.skillRangeValue} htmlFor={skillName}>
                {skillValue}%
            </label>
        </div>
    );
};

export default SkillRange;
