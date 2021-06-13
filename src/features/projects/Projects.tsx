import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import WorkItem from '../../components/WorkItem';
import WorkModal from '../../components/WorkModal';
import ProjectsData from './projectsData';
import { changeId, selectProjectId } from './projectsSlice';
import { CSSTransition } from 'react-transition-group';

import classes from './Projects.module.scss';
import './style.css';

const Projects: React.FC = () => {
    const [activeProject, setActiveProject] = useState<number>(1);
    const [displayModal, setDisplayModal] = useState(false);
    const activeProjectId = useAppSelector(selectProjectId);
    const dispatch = useAppDispatch();
    const projectData = ProjectsData();

    const projectList = projectData.map((data) => {
        const { id, description, imgLink } = data;
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
                onClick={() => {
                    dispatch(changeId(id));
                    setDisplayModal(true);
                    window.scrollTo(0, 0);
                }}
            >
                <WorkItem description={description} imgLink={imgLink} />
            </li>
        );
    });

    return (
        <div>
            <CSSTransition
                in={!displayModal}
                timeout={800}
                mountOnEnter
                unmountOnExit
                classNames={{
                    enter: classes.projectListEnter,
                    enterActive: classes.projectListEnterActive,
                    exit: classes.projectListExit,
                    exitActive: classes.projectListExitActive,
                }}
            >
                {<ul className={classes.projectBlock}>{projectList}</ul>}
            </CSSTransition>
            <CSSTransition
                in={displayModal}
                timeout={1000}
                mountOnEnter
                unmountOnExit
                classNames={{
                    enter: classes.projectEnter,
                    enterActive: classes.projectEnterActive,
                    exit: classes.projectExit,
                    exitActive: classes.projectExitActive,
                }}
            >
                <WorkModal
                    projectData={projectData}
                    activeProjectId={activeProjectId}
                    setDisplayModal={setDisplayModal}
                />
            </CSSTransition>
        </div>
    );
};

export default Projects;
