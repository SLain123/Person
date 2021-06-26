import React from 'react';
import { useTranslation } from 'react-i18next';
import TimeTable from '../../components/TimeTable';

import classes from './Timeline.module.scss';

const Timeline: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.timelineBlock}>
            <h4 className={classes.title}>{t`timeline.title`}</h4>
            <TimeTable timeToStart={new Date(2019, 8, 23)} />
        </div>
    );
};

export default Timeline;
