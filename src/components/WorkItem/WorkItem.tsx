import React from 'react';
import { ProjectProps } from '../../types/projectsTypes';

import classes from './WorkItem.module.scss';

interface Props {
    data: ProjectProps;
}

const WorkItem: React.FC<Props> = ({ data }) => {
    const { id, imgLink, gitLink, prodLink, description } = data;
    const { title, subTitle, techTasks } = description;

    return (
        <button className={classes.workItemBtn} type='button'>
            <img
                className={classes.workItemPic}
                src={imgLink}
                alt='screenshot of the project'
            />
            <p className={classes.workItemTitle}>{title}</p>
        </button>
    );
};

export default WorkItem;
