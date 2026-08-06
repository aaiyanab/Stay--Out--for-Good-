import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  h1: string;
  em: string;
  sub: string;
  breadcrumb: string;
}

export default function PageHero({ eyebrow, h1, em, sub, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-navy px-[8%] pt-36 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:"radial-gradient(circle at 75% 40%, rgba(201,147,58,0.08) 0%, transparent 55%)" }} />
      <nav className="flex items-center gap-2 text-[0.78rem] text-white/40 mb-6 relative z-10">
        <Link href="/" className="text-white/40 no-underline hover:text-gold-light transition-colors">Home</Link>
        <span className="text-white/20">/</span>
        <strong className="text-gold-light font-medium">{breadcrumb}</strong>
      </nav>
      <div className="eyebrow mb-4 relative z-10">{eyebrow}</div>
      <h1 className="font-serif font-black text-white leading-[1.1] mb-5 relative z-10" style={{ fontSize:"clamp(2.4rem, 5vw, 4rem)" }}>
        {h1}<br /><em className="not-italic text-gold-light">{em}</em>
      </h1>
      <p className="text-[1.05rem] text-white/65 leading-[1.75] max-w-[580px] font-light relative z-10">{sub}</p>
    </section>
  );
}
