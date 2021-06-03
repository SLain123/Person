import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './locales/ru.json';

export enum Language {
  Ru = 'ru',
}

const resources = {
  [Language.Ru]: {
    translation: ru,
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
