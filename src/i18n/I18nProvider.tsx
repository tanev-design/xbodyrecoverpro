import { createContext, useEffect, useState, type ReactNode } from 'react';
import { dict, type Locale, type DictKey } from './dict';

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: DictKey) => string;
};

export const I18nContext = createContext<Ctx | null>(null);

const STORAGE_KEY = 'xbrp.locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'bg';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'bg' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'bg';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value: Ctx = {
    locale,
    setLocale: setLocaleState,
    t: (key) => dict[locale][key] ?? key,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
