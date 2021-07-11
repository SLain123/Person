import React from 'react';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import classes from './AboutInfo.module.scss';
import face from './face.jpg';
import spin from '../Spinner/spin.gif';

const AboutInfo: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.aboutInfo}>
            <h3 className={classes.title}>{t`about.title`}</h3>
            <div className={classes.infoBlock}>
                <LazyLoadImage
                    src={face}
                    alt='my face'
                    width={120}
                    height={120}
                    className={classes.photo}
                    placeholderSrc={spin}
                />
                <h4 className={classes.infoText}>{t`about.text`}</h4>
            </div>
        </div>
    );
};

export default AboutInfo;
