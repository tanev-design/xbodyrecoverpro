import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n/useI18n';
import type { DictKey } from '../i18n/dict';

type Cred = { value: string; labelKey: DictKey; subKey: DictKey };
const credentials: Cred[] = [
  { value: '5.0',      labelKey: 'about.cred.1.label', subKey: 'about.cred.1.sub' },
  { value: 'Dry Suit', labelKey: 'about.cred.2.label', subKey: 'about.cred.2.sub' },
  { value: '1:1',      labelKey: 'about.cred.3.label', subKey: 'about.cred.3.sub' },
  { value: '2023',     labelKey: 'about.cred.4.label', subKey: 'about.cred.4.sub' },
];

type Detail = { titleKey: DictKey; bodyKey: DictKey };
const details: Detail[] = [
  { titleKey: 'about.detail.1.title', bodyKey: 'about.detail.1.body' },
  { titleKey: 'about.detail.2.title', bodyKey: 'about.detail.2.body' },
  { titleKey: 'about.detail.3.title', bodyKey: 'about.detail.3.body' },
  { titleKey: 'about.detail.4.title', bodyKey: 'about.detail.4.body' },
];

export default function About() {
  const { t } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-[#111315] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
              {t('about.eyebrow')}
            </p>
            <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.5rem)] font-[700] text-[#F4F1EC] leading-[1.1]">
              {t('about.heading.1')}
              <br />
              <span className="italic font-[300] text-[#F4F1EC]/50">{t('about.heading.2')}</span>
            </h2>
          </div>
          <p className="text-[#F4F1EC]/50 text-base font-light leading-relaxed md:mb-1">
            {t('about.lead')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-20">
          {credentials.map((c, i) => (
            <CredentialBlock key={c.labelKey} cred={c} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {details.map((d, i) => (
            <DetailBlock key={d.titleKey} detail={d} index={i} />
          ))}
        </div>

        <div className="mt-20">
          <div className="overflow-hidden aspect-[21/8]">
            <img
              src="/media/studio/06.jpg"
              alt={t('about.imgAlt')}
              loading="lazy"
              className="w-full h-full object-cover object-center grayscale opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialBlock({ cred, index }: { cred: Cred; index: number }) {
  const { t } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`bg-[#111315] p-8 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <span className="font-['Fraunces'] text-[2.2rem] font-[700] text-[#F4F1EC] block leading-none mb-1">
        {cred.value}
      </span>
      <span className="text-[#F4F1EC]/70 text-sm font-medium block mb-0.5">{t(cred.labelKey)}</span>
      <span className="text-[#F4F1EC]/30 text-xs font-light">{t(cred.subKey)}</span>
    </div>
  );
}

function DetailBlock({ detail, index }: { detail: Detail; index: number }) {
  const { t } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="w-8 h-px bg-[#C0362C] mb-5" />
      <h3 className="text-[#F4F1EC] font-semibold text-base mb-3">{t(detail.titleKey)}</h3>
      <p className="text-[#F4F1EC]/50 text-sm font-light leading-relaxed">{t(detail.bodyKey)}</p>
    </div>
  );
}
