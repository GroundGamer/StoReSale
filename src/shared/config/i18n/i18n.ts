import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'


i18n
    /*
        Загрузить перевод с помощью http -> смотри /public/locales (т.е. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales )
        Узнайте больше: https://github.com/i18next/i18next-http-backend
        Хотите, чтобы ваши переводы загружались с профессионального CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    */
    .use(Backend)
    /*
        Определять язык пользователя. Найти больше: https://github.com/i18next/i18next-browser-languageDetector
    */
    .use(LanguageDetector)
    /* Передайте экземпляр i18n в react-i18next. */
    .use(initReactI18next)
    /*
        init i18next
        Для всех вариантов читайте: https://www.i18next.com/overview/configuration-options
    */
    .init({
        fallbackLng: 'ru',
        debug: __IS_DEV__,

        interpolation: {
            /*
                Не требуется для react, поскольку он экранируется по умолчанию
            */
            escapeValue: false
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    })


export default i18n