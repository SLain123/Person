import React from 'react';
import SkillRange from '../SkillRange';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    skillList,
    changeSkillValue,
    changeMessageStatus,
    skillMessageStatus,
} from '../../features/about/aboutSlice';
import { CSSTransition } from 'react-transition-group';
import { getSkillListValue } from './skillAlgorithm';
import PopUpWindow from '../PopUpWindow';

import classes from './Skills.module.scss';
import question from './question.svg';

const Skills: React.FC = () => {
    const skillData = useAppSelector(skillList);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const status = useAppSelector(skillMessageStatus);

    const messageFromPopup = [
        [t`popup.html.first`, t`popup.html.second`],
        [t`popup.css.first`, t`popup.css.second`, t`popup.css.third`],
        [
            t`popup.js.first`,
            t`popup.js.second`,
            t`popup.js.third`,
            t`popup.js.fourth`,
        ],
        [
            t`popup.react.first`,
            t`popup.react.second`,
            t`popup.react.third`,
            t`popup.react.fourth`,
        ],
        [t`popup.ts.first`, t`popup.ts.second`],
    ];

    let displayPopup = false;

    if (status === 'tips') {
        displayPopup = true;
    }

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

    const skillRangeList = skillData.map((data, i) => (
        <li key={data.skillName}>
            <SkillRange
                {...data}
                onChangeFunc={calculateNewSkillValue}
                messages={messageFromPopup[i]}
            />
        </li>
    ));

    return (
        <div className={classes.skills}>
            <h3 className={classes.skillsTitle}>{t`skills.title`}</h3>
            <ul className={classes.skillsList}>{skillRangeList}</ul>
            <div
                tabIndex={0}
                id='skill'
                aria-label='Display tips'
                className={classes.tipsBtn}
                onClick={() => dispatch(changeMessageStatus('tips'))}
            >
                <img
                    src={question}
                    alt='tips icon'
                    width={30}
                    height={24}
                    id='skill'
                />
                <CSSTransition
                    in={displayPopup}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        enter: classes.skillsEnter,
                        enterActive: classes.skillsEnterActive,
                        exit: classes.skillsExit,
                        exitActive: classes.skillsExitActive,
                    }}
                >
                    <PopUpWindow messages={[t`popup.tips`]} position='right' />
                </CSSTransition>
            </div>
        </div>
    );
};

export default Skills;
