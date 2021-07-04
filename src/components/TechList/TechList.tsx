import React from 'react';
import { Tech } from '../../types/timelineTypes';

import classes from './TechList.module.scss';

interface Props {
    techData: Tech[];
}

const TechList: React.FC<Props> = ({ techData }) => {
    const list = techData.map(({ techName, done }) => {
        const styleList = done
            ? [classes.base, classes.done].join(' ')
            : [classes.base, classes.inWork].join(' ');
        return (
            <li key={techName} className={styleList}>
                {techName}
            </li>
        );
    });

    return <ul className={classes.techlist}>{list}</ul>;
};

export default TechList;
