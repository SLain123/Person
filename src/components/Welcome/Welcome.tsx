import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classes from './Welcome.module.scss';

const Welcome: React.FC = () => {
  const { t } = useTranslation();

  console.log(t`HelloWorldPage.HelloWorld`);
  
    return (
        <section className={classes.container}>
            <p className={classes.helloWorld}>hello, world.</p>
            <h1 className={classes.title}>Артем Ламзов</h1>
            <h2 className={classes.subTitleBlock}>
                <span className={classes.subTitle}>front-end developer</span>
                <span className={classes.subTitle}>react developer</span>
            </h2>
            <Link className={classes.linkBtn} to='/works'>
          мои работы
            </Link>
        <div>{t`HelloWorldPage.HelloWorld`}</div>
        </section>
    );
};

export default Welcome;
