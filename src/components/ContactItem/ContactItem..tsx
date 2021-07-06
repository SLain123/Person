import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './ContactItem.module.scss';

interface Props {
    name: string;
    value: string;
    type: string;
}

const ContactItem: React.FC<Props> = ({ name, value, type }) => {
    const { t } = useTranslation();
    const href = type === 'email' ? `mailto:${value}` : value;
    return (
        <>
            <span className={classes.contactText}>
                {`${t`contact.my`} ${name}: `}
            </span>
            <a className={classes.contactLink} href={href}>
                {value}
            </a>
        </>
    );
};

export default ContactItem;
