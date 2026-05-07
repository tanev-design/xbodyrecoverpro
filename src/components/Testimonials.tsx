import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n/I18nProvider';

// Structured slots — replace with real Studio24 review content per locale.
type Review = { name: string; date: string; bg: string; en: string; rating: number };
const reviews: Review[] = [
  {
    name: 'Мария К. / Maria K.',
    date: '2025',
    bg: 'Невероятно ефективно. Преди се притеснявах от EMS тренировките, но Dry Suit системата е много по-комфортна от очакваното. 8 сесии и виждам реална разлика.',
    en: 'Genuinely effective. I was hesitant about EMS at first, but the Dry Suit is far more comfortable than I expected. 8 sessions in and I can see a real difference.',
    rating: 5,
  },
  {
    name: 'Стефан Д. / Stefan D.',
    date: '2025',
    bg: 'Работя дълги часове и нямам време за зала. 20 минути обед и усещам, че съм тренирал цял ден. Треньорите са изключително компетентни.',
    en: 'I work long hours and have no time for a regular gym. 20 minutes at lunch and it feels like a full day of training. The trainers really know what they are doing.',
    rating: 5,
  },
  {
    name: 'Елена Р. / Elena R.',
    date: '2025',
    bg: 'Дойдох с хронична болка в гърба. След протокола за рехабилитация болката значително намаля. Препоръчвам на всеки с постурални проблеми.',
    en: 'I came in with chronic back pain. After the rehab protocol it has eased significantly. I would recommend it to anyone with posture issues.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { t, locale } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-[#F4F1EC] py-28 md:py-36">
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
            <ReviewCard key={r.name} review={r} body={r[locale]} index={i} />
          ))}
        </div>

        <div className="mt-14 flex items-center gap-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-[#C0362C] text-[#C0362C]" />
            ))}
          </div>
          <span className="font-['Fraunces'] text-2xl font-[700] text-[#111315]">5.0</span>
          <span className="text-[#111315]/40 text-sm font-light">· {t('rev.source')}</span>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, body, index }: { review: Review; body: string; index: number }) {
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
        <span className="text-[#111315]/35 text-xs">{review.date}</span>
      </div>
    </div>
  );
}
