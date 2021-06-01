import React from 'react';
import { Link, match } from 'react-router-dom';

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
): any => {
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
    const logoLinkClass = url === '/' ? [classes.logoLink, classes.disabled].join(' ') : classes.logoLink;

    const menuDataList: IMenuItems[] = [
        { name: 'Проекты', urlName: 'works' },
        { name: 'Навыки', urlName: 'skills' },
        { name: 'TimeLine', urlName: 'time-line' },
        { name: 'Контакты', urlName: 'contact' },
    ];

    const menuLeftPart = getSliceMenu(menuDataList, url, 'left');
    const menuRightPart = getSliceMenu(menuDataList, url, 'right');

    return (
        <div className={classes.header}>
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
        </div>
    );
};

export default Header;
