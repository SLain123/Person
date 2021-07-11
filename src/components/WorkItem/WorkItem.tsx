import React from 'react';
import { description } from '../../types/projectsTypes';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import classes from './WorkItem.module.scss';
import spin from './spin.gif';

interface Props {
    description: description;
    imgLink: string;
}

const WorkItem: React.FC<Props> = ({ description, imgLink }) => {
    const { title } = description;

    return (
        <button className={classes.workItemBtn} type='button'>
            <p className={classes.workItemTitle}>{title}</p>

            <LazyLoadImage
                className={classes.workItemPic}
                src={imgLink}
                alt='screenshot of the project'
                width={550}
                height={370}
                threshold={10}
                placeholderSrc={spin}
            />
        </button>
    );
};

export default WorkItem;
