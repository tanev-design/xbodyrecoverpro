import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Обличаш Dry Suit',
    body: 'Специалният костюм разпределя импулсите равномерно — без мокри електроди, без лепила, без дискомфорт.',
  },
  {
    number: '02',
    title: 'Треньорът настройва програмата',
    body: 'Интензитетът е персонализиран спрямо твоите цели — силова работа, рехабилитация или скулптиране.',
  },
  {
    number: '03',
    title: '20 минути активна работа',
    body: 'EMS импулсите активират 90% от мускулните влакна едновременно. Конвенционалните упражнения достигат 30–40%.',
  },
  {
    number: '04',
    title: 'Измерим напредък',
    body: 'Всяка сесия се документира. Виждаш данните, коригираш плана, следваш резултата.',
  },
];

export default function HowItWorks() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="bg-[#111315] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
            Процесът
          </p>
          <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.5rem)] font-700 text-[#F4F1EC] leading-[1.1] mb-20 max-w-xl">
            Четири стъпки.<br />
            <span className="italic font-300 text-[#F4F1EC]/60">Едно решение.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`bg-[#111315] p-8 md:p-10 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <span className="font-['Fraunces'] text-[3.5rem] font-700 text-[#C0362C]/20 leading-none block mb-6">
        {step.number}
      </span>
      <h3 className="text-[#F4F1EC] font-semibold text-base mb-3">{step.title}</h3>
      <p className="text-[#F4F1EC]/50 text-sm font-light leading-relaxed">{step.body}</p>
    </div>
  );
}
