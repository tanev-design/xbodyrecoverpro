import { useScrollReveal } from '../hooks/useScrollReveal';

const credentials = [
  { value: '5.0', label: 'Рейтинг', sub: 'Google Reviews' },
  { value: 'Dry Suit', label: 'Следващо поколение', sub: 'Без мокри електроди' },
  { value: '1:1', label: 'Личен треньор', sub: 'Всяка сесия' },
  { value: '2023', label: 'Официален партньор', sub: 'X-Body системи' },
];

const details = [
  {
    title: 'Официален X-Body партньор',
    body: 'Студиото работи изключително с оригинални X-Body устройства и лицензирани протоколи. Не компромиси в оборудването.',
  },
  {
    title: 'Dry Suit технология',
    body: 'Сухата система означава, че облечеш костюма и тренираш — без влага, без залепване, без неудобство. По-хигиенично, по-ефективно.',
  },
  {
    title: 'Персонализирани планове',
    body: 'Всеки клиент получава индивидуална програма с измерими цели. Следим напредъка сесия по сесия.',
  },
  {
    title: 'Централно местоположение',
    body: 'Западен район, ул. Модар 24. Собствен паркинг — идеален за бързо обедно или след работа.',
  },
];

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-[#111315] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`transition-all duration-700 mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
              За студиото
            </p>
            <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.5rem)] font-700 text-[#F4F1EC] leading-[1.1]">
              Клинична прецизност.
              <br />
              <span className="italic font-300 text-[#F4F1EC]/50">Частна обстановка.</span>
            </h2>
          </div>
          <p className="text-[#F4F1EC]/50 text-base font-light leading-relaxed md:mb-1">
            X-Body Recover Pro не е фитнес зала. Не е спа. Работим в пространството между физиотерапевтичен кабинет и елитно студио — с резултати, измерени в данни, не в обещания.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-20">
          {credentials.map((c, i) => (
            <CredentialBlock key={c.label} cred={c} index={i} />
          ))}
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {details.map((d, i) => (
            <DetailBlock key={d.title} detail={d} index={i} />
          ))}
        </div>

        {/* Photo */}
        <div className="mt-20">
          <div className="overflow-hidden aspect-[21/8]">
            <img
              src="https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="X-Body Recover Pro студио"
              className="w-full h-full object-cover object-center grayscale opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialBlock({ cred, index }: { cred: typeof credentials[0]; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`bg-[#111315] p-8 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <span className="font-['Fraunces'] text-[2.2rem] font-700 text-[#F4F1EC] block leading-none mb-1">
        {cred.value}
      </span>
      <span className="text-[#F4F1EC]/70 text-sm font-medium block mb-0.5">{cred.label}</span>
      <span className="text-[#F4F1EC]/30 text-xs font-light">{cred.sub}</span>
    </div>
  );
}

function DetailBlock({ detail, index }: { detail: typeof details[0]; index: number }) {
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
      <h3 className="text-[#F4F1EC] font-semibold text-base mb-3">{detail.title}</h3>
      <p className="text-[#F4F1EC]/50 text-sm font-light leading-relaxed">{detail.body}</p>
    </div>
  );
}
