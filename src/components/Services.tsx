import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n/useI18n';
import type { DictKey } from '../i18n/dict';

const BOOKING_URL = 'https://studio24.bg/en/x-body-recover-pro-s12994';

type Service = {
  tagKey: DictKey;
  titleKey: DictKey;
  bodyKey: DictKey;
  image: string;
  stat: string;
  statLabelKey: DictKey;
};

const services: Service[] = [
  { tagKey: 'srv.1.tag', titleKey: 'srv.1.title', bodyKey: 'srv.1.body', image: '/media/studio/02.jpg', stat: '90%',  statLabelKey: 'srv.1.statLabel' },
  { tagKey: 'srv.2.tag', titleKey: 'srv.2.title', bodyKey: 'srv.2.body', image: '/media/studio/03.jpg', stat: '4–16', statLabelKey: 'srv.2.statLabel' },
  { tagKey: 'srv.3.tag', titleKey: 'srv.3.title', bodyKey: 'srv.3.body', image: '/media/studio/04.jpg', stat: '1:1',  statLabelKey: 'srv.3.statLabel' },
];

export default function Services() {
  const { t } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-[#F4F1EC] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
            {t('srv.eyebrow')}
          </p>
          <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.5rem)] font-[700] text-[#111315] leading-[1.1] max-w-lg">
            {t('srv.heading.1')}
            <br />
            <span className="italic font-[300] text-[#111315]/50">{t('srv.heading.2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.tagKey} service={s} index={i} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#111315] text-[#F4F1EC] text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-[#1e2226] transition-colors duration-200"
          >
            {t('hero.cta.book')}
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { t } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`group transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="overflow-hidden mb-6 aspect-[4/3]">
        <img
          src={service.image}
          alt={t(service.titleKey)}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
        />
      </div>
      <div>
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-3">
          {t(service.tagKey)}
        </p>
        <h3 className="font-['Fraunces'] text-[1.4rem] font-[700] text-[#111315] mb-3 leading-[1.2]">
          {t(service.titleKey)}
        </h3>
        <p className="text-[#111315]/60 text-sm font-light leading-relaxed mb-6">
          {t(service.bodyKey)}
        </p>
        <div className="flex items-baseline gap-2 pt-4 border-t border-[#111315]/10">
          <span className="font-['Fraunces'] text-2xl font-[700] text-[#111315]">{service.stat}</span>
          <span className="text-xs uppercase tracking-widest text-[#111315]/40 font-medium">{t(service.statLabelKey)}</span>
        </div>
      </div>
    </div>
  );
}
