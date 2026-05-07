import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/useI18n';

const STORAGE_KEY = 'xbodyrecoverpro-cookie-ok';

const copy = {
  bg: {
    body: 'Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ð¾ÑÐ½Ð¾Ð²Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° ÑÑ‚Ð°Ð±Ð¸Ð»Ð½Ð° Ñ€Ð°Ð±Ð¾Ñ‚Ð° Ð½Ð° ÑÐ°Ð¹Ñ‚Ð°.',
    accept: 'Ð Ð°Ð·Ð±Ñ€Ð°Ñ…',
  },
  en: {
    body: 'We use essential cookies to keep the site working smoothly.',
    accept: 'Got it',
  },
};

export default function CookieBar() {
  const { locale } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(STORAGE_KEY) !== 'yes');
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'yes');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-1/2 md:right-auto md:w-[min(520px,calc(100vw-32px))] md:-translate-x-1/2">
      <div className="flex items-center justify-between gap-4 border border-white/10 bg-[#111315] px-4 py-3 shadow-xl">
        <p className="text-xs font-light leading-relaxed text-[#F4F1EC]/65">{copy[locale].body}</p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 bg-[#C0362C] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F4F1EC] transition-colors hover:bg-[#a82e25]"
        >
          {copy[locale].accept}
        </button>
      </div>
    </div>
  );
}
