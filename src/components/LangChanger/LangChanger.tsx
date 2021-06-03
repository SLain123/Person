import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './LangChanger.module.scss';

const LangChanger = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className={classes.langBlock}>
            <button
                className={[classes.langBtn, 'btn'].join(' ')}
                type='button'
                aria-label='Переключить язык на русский'
                onClick={() => changeLanguage('ru')}
            >
                ru
            </button>
            <button
                className={[classes.langBtn, 'btn'].join(' ')}
                type='button'
                aria-label='Switch the language to English'
                onClick={() => changeLanguage('eng')}
            >
                eng
            </button>
        </div>
    );
};

export default LangChanger;
