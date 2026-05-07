import { Star } from 'lucide-react';

export function GoogleLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center font-sans text-sm font-semibold tracking-[-0.02em] ${className}`} aria-label="Google">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC04]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

export function GoogleStars({ size = 14 }: { size?: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} className="fill-[#FBBC04] text-[#FBBC04]" />
      ))}
    </span>
  );
}

export default function GoogleRating({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <GoogleLogo />
      <GoogleStars />
      <span className="text-current">5.0</span>
    </span>
  );
}
