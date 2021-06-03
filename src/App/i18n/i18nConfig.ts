import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './locales/ru.json';
import eng from './locales/eng.json';

export enum Language {
  Ru = 'ru',
  Eng = 'eng'
}

const resources = {
  [Language.Ru]: {
    translation: ru,
  },
  [Language.Eng]: {
    translation: eng,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: Language.Ru,
    preload: [Language.Ru],
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
