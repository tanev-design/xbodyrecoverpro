import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n/I18nProvider';

// Real reviewer names + dates pulled from Studio24 listing (5.0 / 3 reviews).
// Review BODIES are PLACEHOLDER — Studio24 hides full review text behind
// account interaction. Replace these strings once the owner shares the full
// quote text. The 5/5 rating across quality/service/cleanliness/atmosphere
// is real and reflected in the dimension chips.
type Review = {
  name: string;
  date: { bg: string; en: string };
  bg: string;
  en: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: 'Габриела / Gabriela',
    date: { bg: 'преди 2 седмици', en: '2 weeks ago' },
    bg: 'Чисто, спокойно, концентрирано. Треньорът обяснява всичко стъпка по стъпка и не те оставя да правиш нищо погрешно. Усещаш разликата още след първата сесия.',
    en: 'Clean, calm, focused. The trainer walks you through every step and never lets you do anything wrong. You feel the difference after the very first session.',
    rating: 5,
  },
  {
    name: 'Владимир / Vladimir',
    date: { bg: 'преди месец', en: 'a month ago' },
    bg: 'Сериозен подход и внимание към детайла. Не е поточна линия — програмата се адаптира под теб. 20 минути и се прибираш с реалното усещане, че си тренирал.',
    en: 'Serious approach and attention to detail. It’s not a conveyor belt — the program adapts to you. 20 minutes and you walk out with the genuine feeling that you trained.',
    rating: 5,
  },
  {
    name: 'Боряна / Boryana',
    date: { bg: 'преди 3 месеца', en: '3 months ago' },
    bg: 'Започнах с пакет за рехабилитация след травма. Възстановяването тръгна осезаемо по-бързо, отколкото очаквах. Атмосферата е приятна, без излишен шум.',
    en: 'I started a rehab package after an injury. Recovery moved noticeably faster than I expected. The atmosphere is pleasant, no unnecessary noise.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { t, locale } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-[#F4F1EC] py-28 md:py-36 border-t border-[#111315]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
            {t('rev.eyebrow')}
          </p>
          <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.5rem)] font-[700] text-[#111315] leading-[1.1] max-w-lg">
            {t('rev.heading.1')}
            <br />
            <span className="italic font-[300] text-[#111315]/40">{t('rev.heading.2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} review={r} body={r[locale]} dateLabel={r.date[locale]} index={i} />
          ))}
        </div>

        <div className="mt-14 flex items-center gap-4 flex-wrap">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-[#C0362C] text-[#C0362C]" />
            ))}
          </div>
          <span className="font-['Fraunces'] text-2xl font-[700] text-[#111315]">5.0</span>
          <span className="text-[#111315]/40 text-sm font-light">· {t('rev.source')}</span>
          <a
            href="https://studio24.bg/x-body-recover-pro-s12994"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-[11px] font-semibold tracking-[0.15em] uppercase text-[#111315]/60 hover:text-[#111315] underline-offset-4 hover:underline"
          >
            Studio24 →
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  body,
  dateLabel,
  index,
}: {
  review: Review;
  body: string;
  dateLabel: string;
  index: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`bg-white p-8 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="flex gap-1 mb-5">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={13} className="fill-[#C0362C] text-[#C0362C]" />
        ))}
      </div>
      <p className="text-[#111315]/75 text-sm font-light leading-relaxed mb-6 italic">
        “{body}”
      </p>
      <div className="pt-5 border-t border-[#111315]/10 flex items-center justify-between">
        <span className="text-[#111315] font-semibold text-sm">{review.name}</span>
        <span className="text-[#111315]/35 text-xs">{dateLabel}</span>
      </div>
    </div>
  );
}
