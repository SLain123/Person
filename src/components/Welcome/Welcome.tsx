import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';

import classes from './Welcome.module.scss';
import pointer from './pointer.svg';

const Welcome: React.FC = () => {
    const { t } = useTranslation();
    const [displayInfo, setDisplayInfo] = useState(false);

    const dataForTitleList = [
        <p className={classes.helloWorld}>hello, world.</p>,
        <h1 className={classes.title}>{t`welcome.name`}</h1>,
        <h2 className={classes.subTitleBlock}>
            <span className={classes.subTitle}>front-end developer</span>
            <span className={classes.subTitle}>react developer</span>
        </h2>,
    ];
    const doneTitleList = dataForTitleList.map((element, i) => (
        <li key={i} className={classes.test}>
            <CSSTransition
                in={displayInfo}
                timeout={1000}
                classNames={{
                    enter: classes.titleItemEnter,
                    enterActive: classes.titleItemEnterActive,
                }}
                mountOnEnter
            >
                {element}
            </CSSTransition>
        </li>
    ));

    useEffect(() => {
        setTimeout(() => setDisplayInfo(true), 50);
    });

    return (
        <section className={classes.container}>
            <ul className={classes.titleList}>{doneTitleList}</ul>
            <CSSTransition
                in={displayInfo}
                timeout={1000}
                classNames={{
                    enter: classes.imgEnter,
                    enterActive: classes.imgEnterActive,
                }}
                mountOnEnter
            >
                <Link
                    className={[classes.linkBtn, 'btn'].join(' ')}
                    to='/works'
                >
                    {t`welcome.myWorks`}
                    <img
                        src={pointer}
                        alt='pointer'
                        width={20}
                        height={20}
                        className={classes.arrow}
                    />
                </Link>
            </CSSTransition>
        </section>
    );
};

export default Welcome;
