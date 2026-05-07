import { MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const BOOKING_URL = 'https://studio24.bg';

const hours = [
  { days: 'Пон – Пет', time: '08:00 – 20:00' },
  { days: 'Събота',    time: '12:00 – 19:00' },
  { days: 'Неделя',   time: '10:00 – 19:00' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0d0f10] border-t border-white/5">
      {/* Map + Info */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        {/* Address & Map */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
            Адрес
          </p>
          <div className="flex gap-3 mb-5">
            <MapPin size={16} className="text-[#F4F1EC]/40 mt-0.5 shrink-0" />
            <div>
              <p className="text-[#F4F1EC] font-medium text-sm">ул. Модар 24</p>
              <p className="text-[#F4F1EC]/50 text-sm">Западен район, Пловдив 4000</p>
            </div>
          </div>
          {/* Embedded map */}
          <div className="w-full h-44 overflow-hidden mt-4 opacity-70 hover:opacity-100 transition-opacity">
            <iframe
              title="X-Body Recover Pro location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.5!2d24.7330!3d42.1420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDA4JzMxLjIiTiAyNMKwNDMnNTkuMiJF!5e0!3m2!1sbg!2sbg!4v1700000000000!5m2!1sbg!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.85) contrast(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Hours */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
            Работно време
          </p>
          <div className="flex gap-3 mb-5">
            <Clock size={16} className="text-[#F4F1EC]/40 mt-0.5 shrink-0" />
            <div className="flex flex-col gap-3">
              {hours.map((h) => (
                <div key={h.days} className="flex gap-4">
                  <span className="text-[#F4F1EC]/50 text-sm w-28 font-light">{h.days}</span>
                  <span className="text-[#F4F1EC] text-sm font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Social */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C0362C] mb-6">
            Свържи се с нас
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#C0362C] text-[#F4F1EC] text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-[#a82e25] transition-colors duration-200 mb-6"
          >
            Резервирай сесия
          </a>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/recoverproplovdiv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F4F1EC]/40 hover:text-[#F4F1EC] transition-colors text-sm"
            >
              <Instagram size={16} />
              <span>@recoverproplovdiv</span>
            </a>
          </div>
          <div className="flex gap-4 mt-3">
            <a
              href="https://www.facebook.com/X-Body-Recover-Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F4F1EC]/40 hover:text-[#F4F1EC] transition-colors text-sm"
            >
              <Facebook size={16} />
              <span>X-Body-Recover-Pro</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 md:px-10 py-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <img
          src="/logotransperant.png"
          alt="X-Body Recover Pro"
          className="h-7 w-auto brightness-0 invert opacity-50"
        />
        <p className="text-[#F4F1EC]/20 text-xs font-light">
          © {new Date().getFullYear()} X-Body Recover Pro · ул. Модар 24, Пловдив
        </p>
      </div>
    </footer>
  );
}
