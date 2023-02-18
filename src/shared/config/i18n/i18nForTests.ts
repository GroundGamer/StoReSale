import i18n from 'i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import { initReactI18next } from 'react-i18next'


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',

    debug: false,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    interpolation: {
        escapeValue: false
    },
    resources: {
        ru: { translations: {}}
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
})

export default i18n