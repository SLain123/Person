import React from 'react';
import { Link, match } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classes from './Header.module.scss';
import logo from './logo.png';

interface IMenuItems {
    name: string;
    urlName: string;
}

interface IProps {
    match: match;
}

const getSliceMenu = (
    menuDataList: IMenuItems[],
    url: string,
    slice: string = 'left',
): React.ReactNode => {
    const sliceList =
        slice === 'left'
            ? menuDataList.slice(0, menuDataList.length / 2)
            : menuDataList.slice(menuDataList.length / 2);

    return sliceList.map(({ name, urlName }) => (
        <li className={classes.item} key={urlName}>
            <Link
                className={
                    url === `/${urlName}`
                        ? [classes.link, classes.active].join(' ')
                        : classes.link
                }
                to={urlName}
            >
                {name}
            </Link>
        </li>
    ));
};

const Header: React.FC<IProps> = ({ match }) => {
    const { url } = match;
    const { t } = useTranslation();
    const logoLinkClass =
        url === '/'
            ? [classes.logoLink, classes.disabled].join(' ')
            : classes.logoLink;
    
    const menuDataList: IMenuItems[] = [
        { name: t`header.projects`, urlName: 'works' },
        { name: t`header.skills`, urlName: 'skills' },
        { name: t`header.timeline`, urlName: 'time-line' },
        { name: t`header.contacts`, urlName: 'contact' },
    ];

    const menuLeftPart = getSliceMenu(menuDataList, url, 'left');
    const menuRightPart = getSliceMenu(menuDataList, url, 'right');

    return (
        <header className={classes.header}>
            <ul className={classes.list}>{menuLeftPart}</ul>
            <Link className={logoLinkClass} to='/'>
                <img
                    className={classes.logoPic}
                    alt='logo'
                    src={logo}
                    width={60}
                    height={60}
                />
            </Link>
            <ul className={classes.list}>{menuRightPart}</ul>
        </header>
    );
};

export default Header;
