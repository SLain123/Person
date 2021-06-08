import React from 'react';
import { description } from '../../types/projectsTypes';

import classes from './WorkItem.module.scss';

interface Props {
    description: description;
    imgLink: string;
}

const WorkItem: React.FC<Props> = ({ description, imgLink }) => {
    const { title } = description;

    return (
        <button className={classes.workItemBtn} type='button'>
            <p className={classes.workItemTitle}>{title}</p>
            <img
                className={classes.workItemPic}
                src={imgLink}
                alt='screenshot of the project'
                width={550}
                height={370}
            />
        </button>
    );
};

export default WorkItem;
