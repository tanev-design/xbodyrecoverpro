import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

const BOOKING_URL = 'https://studio24.bg/en/x-body-recover-pro-s12994';

export default function Nav() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: t('nav.howItWorks'), href: '#how-it-works' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.pricing'), href: '#pricing' },
  ];

  const LocaleToggle = () => (
    <div className="flex items-center gap-1 text-[11px] font-semibold tracking-widest uppercase">
      <button
        onClick={() => setLocale('bg')}
        aria-pressed={locale === 'bg'}
        className={locale === 'bg' ? 'text-[#F4F1EC]' : 'text-[#F4F1EC]/30 hover:text-[#F4F1EC]/70'}
      >
        BG
      </button>
      <span className="text-[#F4F1EC]/20">/</span>
      <button
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={locale === 'en' ? 'text-[#F4F1EC]' : 'text-[#F4F1EC]/30 hover:text-[#F4F1EC]/70'}
      >
        EN
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#111315]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center" aria-label="X-Body Recover Pro — home">
          <img
            src="/logotransperant.png"
            alt="X-Body Recover Pro"
            className="h-9 md:h-11 w-auto brightness-0 invert"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-widest uppercase text-[#F4F1EC]/60 hover:text-[#F4F1EC] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <LocaleToggle />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#C0362C] text-[#F4F1EC] text-[13px] font-semibold tracking-wider uppercase hover:bg-[#a82e25] transition-colors duration-200"
          >
            {t('nav.book')}
          </a>
        </div>

        <button
          className="md:hidden text-[#F4F1EC]/80 hover:text-[#F4F1EC]"
          onClick={() => setOpen(!open)}
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-[#111315]/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[13px] font-medium tracking-widest uppercase text-[#F4F1EC]/70 hover:text-[#F4F1EC]"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/5">
            <LocaleToggle />
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 px-5 py-3 bg-[#C0362C] text-[#F4F1EC] text-[13px] font-semibold tracking-wider uppercase text-center hover:bg-[#a82e25] transition-colors"
          >
            {t('nav.book')}
          </a>
        </div>
      )}
    </header>
  );
}
