import React from 'react';
import { getSplitWeekArray } from './timeUtils';

import classes from './TimeTable.module.scss';

interface Props {
    timeToStart: Date;
}

const TimeTable: React.FC<Props> = ({ timeToStart }) => {
    console.log(getSplitWeekArray(timeToStart));

    return <ul className={classes.timetable}></ul>;
};

export default TimeTable;
