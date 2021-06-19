import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Profile.module.scss';

const Profile: React.FC = () => {
    const { t } = useTranslation();
    const profileData = [
        {
            title: t`profile.titleFirst`,
            info: t`profile.fullName`,
        },
        {
            title: t`profile.titleSecond`,
            info: t`profile.date`,
        },
        {
            title: t`profile.titleThird`,
            info: t`profile.city`,
        },
        {
            title: t`profile.titleFourth`,
            info: 'sl163@ya.ru',
        },
    ];

    const profileList = profileData.map(({ title, info }) => (
        <li key={title} className={classes.profileItem}>
            <span className={classes.profileItemTitle}>{title}</span>
            <span className={classes.profileItemInfo}>{info}</span>
        </li>
    ));

    return (
        <div className={classes.profile}>
            <h4 className={classes.title}>{t`profile.title`}</h4>
            <ul className={classes.profileList}>{profileList}</ul>
        </div>
    );
};

export default Profile;
