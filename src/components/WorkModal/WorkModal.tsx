import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { changeId } from '../../features/projects/projectsSlice';
import { ProjectProps } from '../../types/projectsTypes';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';

import GithubSvg from './GitSvg';
import WwwSvg from './WwwSvg';
import classes from './WorkModal.module.scss';
import close from './close.svg';
import prev from './prev.svg';
import next from './next.svg';

interface Props {
    projectData: ProjectProps[];
    activeProjectId: number;
    setDisplayModal: any;
}

const WorkModal: React.FC<Props> = ({
    projectData,
    activeProjectId,
    setDisplayModal,
}) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [displayInfo, setDisplayInfo] = useState(false);
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

    const closeModalWindow = () => setDisplayModal(false);
    const changeProjectForKey = (e: KeyboardEvent) => {
        setDisplayInfo(false);
        setTimeout(() => {
            if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
                if (activeProjectId === 1) {
                    dispatch(changeId(projectData.length));
                } else {
                    dispatch(changeId(activeProjectId! - 1));
                }
            } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
                if (activeProjectId === projectData.length) {
                    dispatch(changeId(1));
                } else {
                    dispatch(changeId(activeProjectId! + 1));
                }
            }
        }, 250);
    };
    const changeProjectForBtn = (e: string) => {
        setDisplayInfo(false);
        setTimeout(() => {
            if (e === 'prev') {
                if (activeProjectId === 1) {
                    dispatch(changeId(projectData.length));
                } else {
                    dispatch(changeId(activeProjectId! - 1));
                }
            } else if (e === 'next') {
                if (activeProjectId === projectData.length) {
                    dispatch(changeId(1));
                } else {
                    dispatch(changeId(activeProjectId! + 1));
                }
            }
        }, 250);
    };

    useEffect(() => {
        const back = document.querySelector('.background');

        if (back) {
            back.addEventListener('click', closeModalWindow);
            window.addEventListener('keydown', changeProjectForKey);
        }

        return () => {
            if (back) {
                back.removeEventListener('click', closeModalWindow);
                window.removeEventListener('keydown', changeProjectForKey);
            }
        };
    });

    useEffect(() => {
        setTimeout(() => {
            setDisplayInfo(true);
        }, 0);
    }, [activeProjectId]);

    return (
        <div className={classes.workModal}>
            <CSSTransition
                in={displayInfo}
                timeout={300}
                classNames={{
                    enter: classes.workModalEnter,
                    enterActive: classes.workModalEnterActive,
                    exit: classes.workModalExit,
                    exitActive: classes.workModalExitActive,
                }}
                mountOnEnter
                unmountOnExit
            >
                <div className={classes.workModalContainer}>
                    {' '}
                    <button
                        type='button'
                        aria-label='close'
                        className={classes.closeBtn}
                        onClick={closeModalWindow}
                    >
                        <img
                            src={close}
                            alt='closeBtn'
                            width={42}
                            height={42}
                        />
                    </button>
                    <button
                        type='button'
                        aria-label='display previous project'
                        className={[classes.manageBtn, classes.prevBtn].join(
                            ' ',
                        )}
                        onClick={() => changeProjectForBtn('prev')}
                    >
                        <img
                            src={prev}
                            alt='previousBtn'
                            width={50}
                            height={50}
                        />
                    </button>
                    <button
                        type='button'
                        aria-label='display next project'
                        className={[classes.manageBtn, classes.nextBtn].join(
                            ' ',
                        )}
                        onClick={() => changeProjectForBtn('next')}
                    >
                        <img src={next} alt='nextBtn' width={50} height={50} />
                    </button>
                    <div className={classes.leftBlock}>
                        <img
                            src={imgLink}
                            alt='screenshot of the project'
                            className={classes.projectImg}
                        />
                        <div>
                            <p className={classes.stackTitle}>
                                {t`projectModal.stack`}
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
                                <GithubSvg />
                            </a>
                            <a
                                href={prodLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='link to ready-made project in the cloud'
                            >
                                <WwwSvg />
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
            </CSSTransition>
        </div>
    );
};

export default WorkModal;
