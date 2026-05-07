import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n/useI18n';
import { GoogleLogo } from './GoogleRating';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/MJk1azd7xgKBBHJL8';

type Review = {
  name: string;
  date: { bg: string; en: string };
  bg: string;
  en: string;
  rating: number;
};

// Written Google reviews visible on the X-Body Recover Pro Maps listing
// on 2026-05-07. Listing rating: 5.0 from 8 Google reviews.
const reviews: Review[] = [
  {
    name: 'Милена Димитрова',
    date: { bg: 'преди месец', en: 'a month ago' },
    bg: 'Страхотни треньори и много ефективни EMS тренировки! Професионално отношение, индивидуално внимание и мотивираща атмосфера. Всяка тренировка е добре структурирана и съобразена с индивидуалните цели, а резултатите са видими още след първите няколко посещения.',
    en: 'Great trainers and very effective EMS workouts! Professional attitude, individual attention and motivating atmosphere. Each workout is well structured and tailored to individual goals, and the results are visible after the first few visits.',
    rating: 5,
  },
  {
    name: 'Martin Kovachev',
    date: { bg: 'преди 3 месеца', en: '3 months ago' },
    bg: 'Страхотни професионалисти перфектна обстановка. За краткото време което ходя се чувствам съвсем в друга форма.',
    en: "Great professionals, perfect environment. In the short time I've been going, I feel in a completely different shape.",
    rating: 5,
  },
  {
    name: 'Люсиана Гърбева',
    date: { bg: 'преди 3 месеца', en: '3 months ago' },
    bg: 'Невероятно място! Обичам места, на които работят само професионалисти в сферата си.',
    en: 'Amazing place! I love places where only professionals in their field work.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { t, locale } = useI18n();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#F4F1EC] py-28 md:py-36 border-t border-[#111315]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-16 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
              {t('rev.eyebrow')}
            </p>
            <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.5rem)] font-[700] text-[#111315] leading-[1.1] max-w-lg">
              {t('rev.heading.1')}
              <br />
              <span className="italic font-[300] text-[#111315]/40">{t('rev.heading.2')}</span>
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="border-y border-[#111315]/10 py-8 flex lg:flex-col justify-between gap-6">
            <div>
              <GoogleLogo className="mb-4 text-xl" />
              <span className="text-[#111315]/45 text-sm font-light">{t('rev.source')}</span>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-end lg:self-start text-[11px] font-semibold tracking-[0.15em] uppercase text-[#111315]/60 hover:text-[#111315] underline-offset-4 hover:underline"
            >
              Google Maps
            </a>
          </div>

          <div className="relative bg-white min-h-[540px] sm:min-h-[460px] md:min-h-[420px] lg:min-h-[440px] xl:min-h-[410px] overflow-hidden">
            {reviews.map((review, index) => (
              <ReviewSlide
                key={review.name}
                review={review}
                body={review[locale]}
                dateLabel={review.date[locale]}
                active={index === active}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3" aria-label="Choose review">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 transition-all duration-300 ${
                index === active ? 'w-9 bg-[#C0362C]' : 'w-2.5 bg-[#111315]/20 hover:bg-[#111315]/40'
              }`}
              aria-label={`Show review from ${review.name}`}
              aria-current={index === active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewSlide({
  review,
  body,
  dateLabel,
  active,
}: {
  review: Review;
  body: string;
  dateLabel: string;
  active: boolean;
}) {
  return (
    <article
      className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-between transition-all duration-700 ease-out ${
        active ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
      }`}
      aria-hidden={!active}
    >
      <div>
        <div className="flex gap-1 mb-8">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={15} className="fill-[#C0362C] text-[#C0362C]" />
          ))}
        </div>
        <p className="font-['Fraunces'] text-[clamp(1.12rem,2vw,1.9rem)] text-[#111315] leading-[1.22]">
          “{body}”
        </p>
      </div>

      <div className="pt-8 mt-8 border-t border-[#111315]/10 flex items-center justify-between gap-4">
        <span className="text-[#111315] font-semibold text-sm">{review.name}</span>
        <span className="text-[#111315]/35 text-xs whitespace-nowrap">{dateLabel}</span>
      </div>
    </article>
  );
}
