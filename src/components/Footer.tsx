import { MapPin, Clock, Instagram, Facebook, Phone } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

const BOOKING_URL = 'https://studio24.bg/en/x-body-recover-pro-s12994';

export default function Footer() {
  const { t } = useI18n();

  const hours = [
    { days: t('foot.hours.weekdays'), time: '08:00 – 20:00' },
    { days: t('foot.hours.saturday'), time: '12:00 – 19:00' },
    { days: t('foot.hours.sunday'),   time: '10:00 – 19:00' },
  ];

  return (
    <footer id="contact" className="bg-[#0d0f10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
            {t('foot.address.eyebrow')}
          </p>
          <div className="flex gap-3 mb-5">
            <MapPin size={16} className="text-[#F4F1EC]/40 mt-0.5 shrink-0" />
            <div>
              <p className="text-[#F4F1EC] font-medium text-sm">{t('foot.address.line1')}</p>
              <p className="text-[#F4F1EC]/50 text-sm">{t('foot.address.line2')}</p>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/MJk1azd7xgKBBHJL8"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-44 overflow-hidden mt-4 opacity-70 hover:opacity-100 transition-opacity"
            aria-label={t('foot.address.aria')}
          >
            <iframe
              title="X-Body Recover Pro — ул. Модър 24, Пловдив"
              src="https://maps.google.com/maps?q=42.125580,24.719260&z=18&output=embed&hl=bg"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.85) contrast(0.9)', pointerEvents: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
            {t('foot.hours.eyebrow')}
          </p>
          <div className="flex gap-3 mb-5">
            <Clock size={16} className="text-[#F4F1EC]/40 mt-0.5 shrink-0" />
            <div className="flex flex-col gap-3">
              {hours.map((h) => (
                <div key={h.days} className="flex gap-4">
                  <span className="text-[#F4F1EC]/50 text-sm w-28 font-light">{h.days}</span>
                  <span className="text-[#F4F1EC] text-sm font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
            {t('foot.contact.eyebrow')}
          </p>
          <a
            href="tel:+359886517798"
            className="flex items-center gap-3 mb-4 group"
            aria-label={`${t('foot.contact.phoneLabel')}: +359 88 651 7798`}
          >
            <Phone size={16} className="text-[#F4F1EC]/40 shrink-0 group-hover:text-[#C0362C] transition-colors" />
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F4F1EC]/40 mb-0.5">
                {t('foot.contact.phoneLabel')}
              </p>
              <p className="font-['Fraunces'] text-[1.3rem] font-[700] text-[#F4F1EC] leading-none group-hover:text-[#C0362C] transition-colors">
                +359 88 651 7798
              </p>
            </div>
          </a>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#C0362C] text-[#F4F1EC] text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-[#a82e25] transition-colors duration-200 mb-6"
          >
            {t('hero.cta.book')}
          </a>

          <div className="flex flex-col gap-3">
            <a
              href="https://www.instagram.com/recoverproplovdiv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F4F1EC]/40 hover:text-[#F4F1EC] transition-colors text-sm"
            >
              <Instagram size={16} />
              <span>@recoverproplovdiv</span>
            </a>
            <a
              href="https://www.facebook.com/p/X-Body-Recover-Pro-61583968023438/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F4F1EC]/40 hover:text-[#F4F1EC] transition-colors text-sm"
            >
              <Facebook size={16} />
              <span>X-Body Recover Pro</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 md:px-10 py-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <img
          src="/logotransperant.png"
          alt="X-Body Recover Pro"
          className="h-7 w-auto brightness-0 invert opacity-50"
        />
        <p className="text-[#F4F1EC]/20 text-xs font-light">
          © {new Date().getFullYear()} {t('foot.copyright')}
        </p>
      </div>
    </footer>
  );
}
