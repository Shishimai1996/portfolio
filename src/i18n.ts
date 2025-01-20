import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from '../src/locales/en.json'
import jaTranslation from '../src/locales/ja.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ja: { translation: jaTranslation },
  },
  lng: 'en', // デフォルトの言語
  fallbackLng: 'ja', // 言語が見つからない場合のフォールバック
  debug: true, // デバッグモード有効化

  interpolation: {
    escapeValue: false, // React のエスケープは不要
  },
})

export default i18n
