import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { changeId } from '../../features/projects/projectsSlice';
import { ProjectProps } from '../../types/projectsTypes';

import classes from './WorkModal.module.scss';
import close from './close.svg';
import github from './github.svg';
import browser from './browser.svg';

interface Props {
    projectData: ProjectProps[];
    activeProjectId: number;
}

const WorkModal: React.FC<Props> = ({ projectData, activeProjectId }) => {
    const dispatch = useAppDispatch();
    const data = projectData.filter((data) =>
        activeProjectId === data.id ? data : null,
    )[0];
    const { imgLink, description, gitLink, prodLink } = data;
    const { title, subTitle, techTasks, stack } = description;
    const { common, items } = techTasks;

    const techList = items.map((item) => (
        <li key={item} className={classes.techItem}>
            <span>{item}</span>
        </li>
    ));
    const stackList = stack.map((item) => (
        <li key={item} className={classes.stackItem}>
            {item}
        </li>
    ));

    const closeModalWindow = () => dispatch(changeId(null));

    useEffect(() => {
        const back = document.querySelector('.background');
        if (back) {
            back.addEventListener('click', closeModalWindow);
        }

        return () => {
            if (back) {
                back.removeEventListener('click', closeModalWindow);
            }
        };
    });

    return (
        <div className={classes.workModal}>
            <button
                type='button'
                aria-label='close'
                className={classes.closeBtn}
                onClick={closeModalWindow}
            >
                <img src={close} alt='closeBtn' width={42} height={42} />
            </button>

            <div className={classes.leftBlock}>
                <img
                    src={imgLink}
                    alt='screenshot of the project'
                    className={classes.projectImg}
                />
                <div>
                    <p className={classes.stackTitle}>
                        Стек технологий задействованный в проекте:
                    </p>
                    <ul className={classes.stackList}>{stackList}</ul>
                </div>
                <div className={classes.linkBlock}>
                    <a
                        href={gitLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='link to github project'
                    >
                        <img
                            src={github}
                            alt='git logo'
                            width={64}
                            height={64}
                        />
                    </a>
                    <a
                        href={prodLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='link to ready-made project in the cloud'
                    >
                        <img
                            src={browser}
                            alt='ready-make logo'
                            width={64}
                            height={64}
                        />
                    </a>
                </div>
            </div>

            <div className={classes.rightBlock}>
                <h3 className={classes.title}>{title}</h3>
                <h4 className={classes.subTitle}>{subTitle}</h4>
                <p className={classes.techTitle}>{common}</p>
                <ul className={classes.techList}>{techList}</ul>
            </div>
        </div>
    );
};

export default WorkModal;
