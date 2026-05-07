import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n/useI18n';
import type { DictKey } from '../i18n/dict';

const stepKeys: { number: string; titleKey: DictKey; bodyKey: DictKey }[] = [
  { number: '01', titleKey: 'how.s1.title', bodyKey: 'how.s1.body' },
  { number: '02', titleKey: 'how.s2.title', bodyKey: 'how.s2.body' },
  { number: '03', titleKey: 'how.s3.title', bodyKey: 'how.s3.body' },
  { number: '04', titleKey: 'how.s4.title', bodyKey: 'how.s4.body' },
];

export default function HowItWorks() {
  const { t } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="bg-[#111315] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
            {t('how.eyebrow')}
          </p>
          <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.5rem)] font-[700] text-[#F4F1EC] leading-[1.1] mb-20 max-w-xl">
            {t('how.heading.1')}<br />
            <span className="italic font-[300] text-[#F4F1EC]/60">{t('how.heading.2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {stepKeys.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof stepKeys[0]; index: number }) {
  const { t } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`bg-[#111315] p-8 md:p-10 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <span className="font-['Fraunces'] text-[3.5rem] font-[700] text-[#C0362C]/20 leading-none block mb-6">
        {step.number}
      </span>
      <h3 className="text-[#F4F1EC] font-semibold text-base mb-3">{t(step.titleKey)}</h3>
      <p className="text-[#F4F1EC]/50 text-sm font-light leading-relaxed">{t(step.bodyKey)}</p>
    </div>
  );
}
