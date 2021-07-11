import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactItem from '../../components/ContactItem';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import classes from './Contact.module.scss';
import constactImg from './contactList.jpg';
import spin from '../../components/Spinner/spin.gif';

const Concact: React.FC = () => {
    const { t } = useTranslation();

    const contactData = [
        {
            name: 'email',
            value: 'sl163@ya.ru',
            type: 'email',
        },
        {
            name: 'telegram',
            value: 'https://t.me/ArtemLamzov',
            type: 'url',
        },
    ];

    const contactList = contactData.map((data) => {
        return (
            <li key={data.name} className={classes.contactItem}>
                <ContactItem {...data} />
            </li>
        );
    });

    return (
        <div className={classes.contactBlock}>
            <p className={classes.contactTitle}>{t`contact.title`}</p>
            <ul className={classes.contactList}>{contactList}</ul>
            <LazyLoadImage
                src={constactImg}
                alt='just contact stub'
                className={classes.contactImg}
                width={320}
                height={110}
                placeholderSrc={spin}
            />
        </div>
    );
};

export default Concact;
