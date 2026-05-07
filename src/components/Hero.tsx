// EUR/BGN dual-display until 2026-08-08
// After 2026-08-08: remove BGN display, show EUR only

const BOOKING_URL = 'https://studio24.bg';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#111315] overflow-hidden flex flex-col justify-end">
      {/* Background photo treatment */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6455927/pexels-photo-6455927.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover object-center opacity-25 grayscale"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111315]/60 via-[#111315]/40 to-[#111315]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-24 pt-40 md:pt-48 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-8">
            X-Body EMS · Dry Suit система · Пловдив
          </p>

          {/* Headline */}
          <h1 className="font-['Fraunces'] text-[clamp(3rem,8vw,7rem)] font-700 leading-[1.0] text-[#F4F1EC] mb-6">
            20 минути.
            <br />
            <span className="italic font-300 text-[#F4F1EC]/70">Цяло тяло.</span>
          </h1>

          {/* Sub */}
          <p className="text-[#F4F1EC]/60 text-[clamp(1rem,2vw,1.2rem)] font-light leading-relaxed max-w-xl mb-4">
            Една сесия в Dry Suit заменя часове конвенционални тренировки.
            Без мокри електроди. Без опашки. Само ти, треньор и измерим резултат.
          </p>

          {/* Time math callout */}
          <div className="flex items-baseline gap-3 mb-12 mt-8">
            <span className="font-['Fraunces'] text-[clamp(2.5rem,5vw,4.5rem)] font-700 text-[#F4F1EC] leading-none">20</span>
            <span className="text-[#F4F1EC]/50 text-lg font-light uppercase tracking-widest">мин = 90-мин тренировка</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C0362C] text-[#F4F1EC] text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-[#a82e25] transition-colors duration-200"
            >
              Резервирай сесия
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#F4F1EC]/20 text-[#F4F1EC]/70 text-[13px] font-medium tracking-[0.15em] uppercase hover:border-[#F4F1EC]/50 hover:text-[#F4F1EC] transition-colors duration-200"
            >
              Как работи
            </a>
          </div>

          {/* Price anchor */}
          <p className="mt-10 text-[#F4F1EC]/35 text-sm font-light">
            {/* EUR/BGN dual-display until 2026-08-08 */}
            Начална цена от{' '}
            <span className="text-[#F4F1EC]/70 font-medium">€23.01 / 45.00 лв</span>
            {' '}за сесия
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-[#F4F1EC] animate-pulse" />
      </div>
    </section>
  );
}
