import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n/I18nProvider';
import type { DictKey } from '../i18n/dict';

type Member = {
  initials: string;
  nameKey: DictKey;
  bioKey: DictKey;
  roleKey: DictKey;
};

const team: Member[] = [
  { initials: 'АГ', nameKey: 'team.t1.name', bioKey: 'team.t1.bio', roleKey: 'team.role.trainer' },
  { initials: 'ЗВ', nameKey: 'team.t2.name', bioKey: 'team.t2.bio', roleKey: 'team.role.trainer' },
];

const teamEN: Member[] = [
  { initials: 'AG', nameKey: 'team.t1.name', bioKey: 'team.t1.bio', roleKey: 'team.role.trainer' },
  { initials: 'ZV', nameKey: 'team.t2.name', bioKey: 'team.t2.bio', roleKey: 'team.role.trainer' },
];

export default function Team() {
  const { t, locale } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const members = locale === 'bg' ? team : teamEN;

  return (
    <section id="team" className="bg-[#F4F1EC] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-20 grid md:grid-cols-2 gap-10 items-end ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
              {t('team.eyebrow')}
            </p>
            <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.5rem)] font-[700] text-[#111315] leading-[1.1]">
              {t('team.heading.1')}
              <br />
              <span className="italic font-[300] text-[#111315]/45">{t('team.heading.2')}</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#111315]/8">
          {members.map((m, i) => (
            <MemberCard key={m.nameKey} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member, index }: { member: Member; index: number }) {
  const { t } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`bg-[#F4F1EC] p-10 md:p-14 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="flex flex-col gap-8">
        <div className="flex items-baseline gap-6 border-b border-[#111315]/10 pb-6">
          <span
            aria-hidden="true"
            className="font-['Fraunces'] text-[clamp(3.5rem,7vw,5.5rem)] font-[700] text-[#C0362C] leading-none"
          >
            {member.initials}
          </span>
          <div>
            <h3 className="font-['Fraunces'] text-[1.6rem] md:text-[1.9rem] font-[700] text-[#111315] leading-[1.1]">
              {t(member.nameKey)}
            </h3>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#111315]/40 mt-2">
              {t(member.roleKey)}
            </p>
          </div>
        </div>
        <p className="text-[#111315]/70 text-base font-light leading-relaxed">
          {t(member.bioKey)}
        </p>
      </div>
    </article>
  );
}
