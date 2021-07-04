import React from 'react';
import { useTranslation } from 'react-i18next';
import TimeTable from '../../components/TimeTable';
import TechList from '../../components/TechList';
import { techData } from './timelineData';

import classes from './Timeline.module.scss';

const Timeline: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.timelineBlock}>
            <h4 className={classes.timelineTitle}>{t`timeline.titleFirst`}</h4>
            <p className={classes.timelineTitle}>{t`timeline.titleSecond`}</p>
            <TimeTable timeToStart={new Date(2019, 8, 23)} />
            <p
                className={classes.timelineTitle}
            >{t`timeline.titleForFuture`}</p>
            <TechList techData={techData} />
        </div>
    );
};

export default Timeline;
