import { useScrollReveal } from '../hooks/useScrollReveal';

const BOOKING_URL = 'https://studio24.bg';

// EUR/BGN dual-display until 2026-08-08
// Fixed peg: 1 EUR = 1.95583 лв
// After 2026-08-08: remove BGN column and лв display, show EUR only
const packages = [
  { sessions: 1,  eur: '€23.01',  bgn: '45.00 лв',  highlight: false },
  { sessions: 4,  eur: '€85.90',  bgn: '168.00 лв', highlight: false },
  { sessions: 8,  eur: '€163.61', bgn: '320.00 лв', highlight: true  },
  { sessions: 12, eur: '€239.28', bgn: '468.00 лв', highlight: false },
  { sessions: 16, eur: '€310.87', bgn: '608.00 лв', highlight: false },
];

export default function Pricing() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="bg-[#111315] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-16 grid md:grid-cols-2 gap-10 items-end ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
              Цени
            </p>
            <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.5rem)] font-700 text-[#F4F1EC] leading-[1.1]">
              Прозрачни цени.
              <br />
              <span className="italic font-300 text-[#F4F1EC]/50">Без скрити такси.</span>
            </h2>
          </div>
          <p className="text-[#F4F1EC]/40 text-sm font-light leading-relaxed">
            {/* EUR/BGN dual-display until 2026-08-08 */}
            Цените се показват в евро и лева съгласно изискванията за двойно ценообразуване в сила до 08.08.2026 г.
            Фиксиран курс: 1 EUR = 1.95583 лв.
          </p>
        </div>

        {/* Price table */}
        <div className="mb-14">
          {/* Header row */}
          <div className="grid grid-cols-3 pb-3 border-b border-white/10 mb-1">
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#F4F1EC]/30">Пакет</span>
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#F4F1EC]/30 text-right">EUR</span>
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#F4F1EC]/30 text-right">BGN / лв</span>
          </div>

          {packages.map((pkg, i) => (
            <PriceRow key={pkg.sessions} pkg={pkg} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#C0362C] text-[#F4F1EC] text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-[#a82e25] transition-colors duration-200"
          >
            Резервирай първа сесия
          </a>
          <p className="text-[#F4F1EC]/30 text-sm font-light">
            Може да се свържете с нас за групови и корпоративни пакети.
          </p>
        </div>
      </div>
    </section>
  );
}

function PriceRow({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`grid grid-cols-3 py-5 border-b border-white/5 transition-all duration-700 ${
        pkg.highlight ? 'bg-white/3' : ''
      } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    >
      <div className="flex items-center gap-3">
        <span className="font-['Fraunces'] text-[1.6rem] font-700 text-[#F4F1EC] leading-none">
          {pkg.sessions}
        </span>
        <span className="text-[#F4F1EC]/40 text-xs uppercase tracking-widest font-medium">
          {pkg.sessions === 1 ? 'сесия' : 'сесии'}
        </span>
        {pkg.highlight && (
          <span className="hidden sm:inline text-[10px] font-semibold tracking-wider uppercase bg-[#C0362C] text-white px-2 py-0.5">
            Популярен
          </span>
        )}
      </div>
      <div className="text-right">
        {/* EUR/BGN dual-display until 2026-08-08 */}
        <span className="font-['Fraunces'] text-[1.4rem] font-700 text-[#F4F1EC]">{pkg.eur}</span>
      </div>
      <div className="text-right">
        <span className="text-[#F4F1EC]/50 text-base font-light">{pkg.bgn}</span>
      </div>
    </div>
  );
}
