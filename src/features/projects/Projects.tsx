import React from 'react';
import WorkItem from '../../components/WorkItem';

import classes from './Projects.module.scss';

const Projects: React.FC = () => {
    return (
        <div className={classes.projectBlock}>
            <WorkItem />
        </div>
    );
};

export default Projects;
