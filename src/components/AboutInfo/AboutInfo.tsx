import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './AboutInfo.module.scss';
import face from './face.jpg';

const AboutInfo: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.aboutInfo}>
            <h3 className={classes.title}>{t`about.title`}</h3>
            <div className={classes.infoBlock}>
                <img
                    src={face}
                    alt='my face'
                    width={120}
                    height={120}
                    className={classes.photo}
                />
                <h4 className={classes.infoText}>{t`about.text`}</h4>
            </div>
        </div>
    );
};

export default AboutInfo;
