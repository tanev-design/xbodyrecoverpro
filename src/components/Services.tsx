import { useScrollReveal } from '../hooks/useScrollReveal';

const BOOKING_URL = 'https://studio24.bg';

const services = [
  {
    tag: '20 МИН',
    title: 'X-Body Dry Suit тренировка',
    body: 'Пълна мускулна активация с ново поколение Dry Suit технология. Без мокри електроди — само прецизен импулс, персонализирана програма и изразен резултат в рамките на едно работно обедно. Подходящо за всяко ниво.',
    image: 'https://images.pexels.com/photos/4162492/pexels-photo-4162492.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '90%',
    statLabel: 'мускулни влакна',
  },
  {
    tag: 'ПРОГРАМИ',
    title: 'Скулптиране и редукция на мазнини',
    body: 'Многосесийни пакети с прогресивни протоколи за видима промяна в силуета. Комбинираме EMS тренировки с хранително консултиране и проследяване на телесния състав.',
    image: 'https://images.pexels.com/photos/6551136/pexels-photo-6551136.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '4–16',
    statLabel: 'сесии на пакет',
  },
  {
    tag: 'РЕХАБИЛИТАЦИЯ',
    title: 'Възстановяване, стойка и рехабилитация',
    body: 'Специализирани протоколи за хора с болки в гърба, постурални дисбаланси или рехабилитация след травма. Работим с физиотерапевтични параметри и внимателна прогресия.',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '1:1',
    statLabel: 'личен треньор',
  },
];

export default function Services() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-[#F4F1EC] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
            Услуги
          </p>
          <h2 className="font-['Fraunces'] text-[clamp(2rem,4vw,3.5rem)] font-700 text-[#111315] leading-[1.1] max-w-lg">
            Три направления.
            <br />
            <span className="italic font-300 text-[#111315]/50">Един резултат.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.tag} service={s} index={i} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#111315] text-[#F4F1EC] text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-[#1e2226] transition-colors duration-200"
          >
            Резервирай сесия
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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
          alt={service.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
        />
      </div>
      <div>
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-3">
          {service.tag}
        </p>
        <h3 className="font-['Fraunces'] text-[1.4rem] font-700 text-[#111315] mb-3 leading-[1.2]">
          {service.title}
        </h3>
        <p className="text-[#111315]/60 text-sm font-light leading-relaxed mb-6">
          {service.body}
        </p>
        <div className="flex items-baseline gap-2 pt-4 border-t border-[#111315]/10">
          <span className="font-['Fraunces'] text-2xl font-700 text-[#111315]">{service.stat}</span>
          <span className="text-xs uppercase tracking-widest text-[#111315]/40 font-medium">{service.statLabel}</span>
        </div>
      </div>
    </div>
  );
}
