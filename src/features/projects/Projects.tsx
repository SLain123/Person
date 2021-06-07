import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import WorkItem from '../../components/WorkItem';
import WorkModal from '../../components/WorkModal';
import ProjectsData from './projectsData';
import { changeId } from './projectsSlice';

import classes from './Projects.module.scss';

const Projects: React.FC = () => {
    const [activeProject, setActiveProject] = useState<null | number>(null);
    const dispatch = useAppDispatch();

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
                onClick={() => dispatch(changeId(id))}
            >
                <WorkItem data={data} />
            </li>
        );
    });

    return (
        <>
            <ul className={classes.projectBlock}>{projectList}</ul>
            <WorkModal />
        </>
    );
};

export default Projects;
