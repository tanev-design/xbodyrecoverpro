import { Facebook, Instagram } from 'lucide-react';

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/recoverproplovdiv',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/p/X-Body-Recover-Pro-61583968023438/',
    icon: Facebook,
  },
];

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-2 md:bottom-8 md:right-6" aria-label="Social links">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center border border-white/10 bg-[#111315]/92 text-[#F4F1EC]/75 shadow-lg transition-colors duration-200 hover:border-[#C0362C]/70 hover:bg-[#C0362C] hover:text-[#F4F1EC]"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
