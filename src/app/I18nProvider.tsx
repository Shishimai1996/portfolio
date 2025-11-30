// src/I18nProvider.tsx

"use client"; // 💡 クライアントコンポーネントに設定

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import jaTranslation from "./locales/ja.json";
import React from "react"; // Reactをインポート

// 初期化は一度だけ実行されるように、コンポーネントの外またはメモ化されたロジックで行う
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslation },
      ja: { translation: jaTranslation },
    },
    lng: "en",
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });
}

// プロバイダーコンポーネント (何もレンダリングしないが、初期化を確実に実行する)
// 厳密には react-i18next は Provider を必要としませんが、このコンポーネントで初期化を囲みます。
export function I18nProvider({ children }: { children: React.ReactNode }) {
  // ここで i18n が初期化されていることを確認する。
  return <>{children}</>;
}

// ⚠️ 注意: 以前の export default i18n; は削除するか、このファイルに統合し、
// layout.tsx では I18nProvider のみをインポートします。
