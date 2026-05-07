import { useI18n } from '../i18n/I18nProvider';
import GoogleRating from './GoogleRating';

// EUR/BGN dual-display until 2026-08-08
const BOOKING_URL = 'https://studio24.bg/en/x-body-recover-pro-s12994';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section
      className="relative bg-[#111315] overflow-hidden flex flex-col justify-end"
      style={{ minHeight: 'var(--app-height, 100svh)' }}
    >
      <div className="absolute inset-0">
        <img
          src="/media/ig/01.jpg"
          alt=""
          className="absolute inset-y-0 right-0 h-full w-full md:w-[68%] object-cover object-right opacity-40 md:opacity-72 grayscale [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.08)_14%,rgba(0,0,0,0.38)_30%,#000_52%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.08)_14%,rgba(0,0,0,0.38)_30%,#000_52%)]"
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/96 md:via-[#111315]/86 to-[#111315]/26" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111315]/30 via-transparent to-[#111315]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-24 pt-40 md:pt-48 w-full">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-8">
            {t('hero.eyebrow')}
          </p>

          <div className="mb-6 inline-flex items-center rounded-sm border border-[#F4F1EC]/10 bg-[#111315]/55 px-3 py-2 text-xs font-semibold text-[#F4F1EC]/70 backdrop-blur-sm">
            <GoogleRating />
            <span className="ml-2 text-[#F4F1EC]/35">{t('hero.googleReviews')}</span>
          </div>

          <h1 className="font-['Fraunces'] text-[clamp(3rem,8vw,7rem)] font-[700] leading-[1.0] text-[#F4F1EC] mb-6">
            {t('hero.headline.1')}
            <br />
            <span className="italic font-[300] text-[#F4F1EC]/70">{t('hero.headline.2')}</span>
          </h1>

          <p className="text-[#F4F1EC]/65 text-[clamp(1rem,2vw,1.2rem)] font-light leading-relaxed max-w-xl mb-10">
            {t('hero.sub')}
          </p>

          <div className="flex items-baseline gap-3 mb-12">
            <span className="font-['Fraunces'] text-[clamp(2.5rem,5vw,4.5rem)] font-[700] text-[#F4F1EC] leading-none">
              {t('hero.statValue')}
            </span>
            <span className="text-[#F4F1EC]/50 text-base md:text-lg font-light uppercase tracking-widest">
              {t('hero.statLabel')}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C0362C] text-[#F4F1EC] text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-[#a82e25] transition-colors duration-200"
            >
              {t('hero.cta.book')}
            </a>
            <a
              href="tel:+359886517798"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#F4F1EC]/20 text-[#F4F1EC]/80 text-[13px] font-medium tracking-[0.15em] uppercase hover:border-[#F4F1EC]/50 hover:text-[#F4F1EC] transition-colors duration-200"
            >
              +359 88 651 7798
            </a>
          </div>

          <p className="mt-10 text-[#F4F1EC]/35 text-sm font-light">
            {t('hero.priceFrom')}{' '}
            <span className="text-[#F4F1EC]/70 font-medium">€23.01 / 45.00 лв</span>
            {' '}{t('hero.priceFromSuffix')}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30" aria-hidden="true">
        <div className="w-px h-12 bg-[#F4F1EC] animate-pulse" />
      </div>
    </section>
  );
}
