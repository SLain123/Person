import React, { useState } from 'react';
import WorkItem from '../../components/WorkItem';
import ProjectsData from './projectsData';

import classes from './Projects.module.scss';

const Projects: React.FC = () => {
    const [activeProject, setActiveProject] = useState(0);
    const projectData = ProjectsData();
    const projectList = projectData.map((data) => {
        const { id } = data;
        const style =
            activeProject === data.id
                ? [
                      classes[`projectNumber${data.id}`],
                      classes.projectItem,
                      classes.projectItemFixHover,
                  ]
                : [classes[`projectNumber${data.id}`], classes.projectItem];

        return (
            <li
                key={id}
                className={style.join(' ')}
                onMouseEnter={() => setActiveProject(id)}
            >
                <WorkItem data={data} />
            </li>
        );
    });

    return <ul className={classes.projectBlock}>{projectList}</ul>;
};

export default Projects;
