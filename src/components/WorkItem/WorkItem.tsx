import React from 'react';
import { ProjectProps } from '../../types/projectsTypes';

import classes from './WorkItem.module.scss';

interface Props {
    data: ProjectProps;
}

const WorkItem: React.FC<Props> = ({ data }) => {
    const { imgLink, description } = data;
    const { title } = description;

    return (
        <button className={classes.workItemBtn} type='button'>
            <p className={classes.workItemTitle}>{title}</p>
            <img
                className={classes.workItemPic}
                src={imgLink}
                alt='screenshot of the project'
            />
        </button>
    );
};

export default WorkItem;
