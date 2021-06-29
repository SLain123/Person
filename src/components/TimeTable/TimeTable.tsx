import React from 'react';
import { getSplitWeekArray } from './timeUtils';
import TimeCell from '../TimeCell';

import classes from './TimeTable.module.scss';

interface Props {
    timeToStart: Date;
}

const TimeTable: React.FC<Props> = ({ timeToStart }) => {
    const weeks = getSplitWeekArray(timeToStart);
    const weekList = weeks.map(({ begin, end }, i) => (
        <TimeCell begin={begin} end={end} key={begin} timeout={15 * i} />
    ));

    return <ul className={classes.timetable}>{weekList}</ul>;
};

export default TimeTable;
