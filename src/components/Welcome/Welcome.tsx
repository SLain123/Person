import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classes from './Welcome.module.scss';
import pointer from './pointer.svg';

const Welcome: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className={classes.container}>
            <p className={classes.helloWorld}>hello, world.</p>
            <h1 className={classes.title}>{t`welcome.name`}</h1>
            <h2 className={classes.subTitleBlock}>
                <span className={classes.subTitle}>front-end developer</span>
                <span className={classes.subTitle}>react developer</span>
            </h2>
            <Link className={[classes.linkBtn, 'btn'].join(' ')} to='/works'>
                {t`welcome.myWorks`}
                <img src={pointer} alt='pointer' width={20} height={20} className={classes.arrow} />
            </Link>
        </section>
    );
};

export default Welcome;
