import Link from "next/link";
import { cn } from "@/lib/utils";

/* ── PageHero ── */
interface PageHeroProps {
  eyebrow: string;
  h1: React.ReactNode;
  sub: string;
  breadcrumb: string;
  breadcrumbHref?: string;
}
export function PageHero({
  eyebrow,
  h1,
  sub,
  breadcrumb,
  breadcrumbHref = "/",
}: PageHeroProps) {
  return (
    <section className="bg-navy px-[8%] pt-36 pb-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 40%, rgba(201,147,58,0.08) 0%, transparent 55%)",
        }}
      />
      <nav className="breadcrumb">
        <Link href={breadcrumbHref} className="text-white/40 hover:text-gold-light transition-colors">
          Home
        </Link>
        <span className="text-white/20">/</span>
        <strong className="text-gold-light font-medium">{breadcrumb}</strong>
      </nav>
      <div className="eyebrow mb-4">{eyebrow}</div>
      <h1
        className="font-serif font-black text-white leading-[1.1] mb-5 relative z-10"
        style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
      >
        {h1}
      </h1>
      <p className="text-[1.05rem] text-white/65 leading-[1.75] max-w-[580px] font-light relative z-10">
        {sub}
      </p>
    </section>
  );
}

/* ── SectionHeading ── */
export function SectionHeading({
  label,
  children,
  className,
}: {
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {label && <span className="section-label">{label}</span>}
      <h2
        className="font-serif font-bold text-navy leading-[1.2] mb-5"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
      >
        {children}
      </h2>
    </div>
  );
}

/* ── ContactStrip ── */
export function ContactStrip({
  title,
  sub,
  dark = true,
}: {
  title: string;
  sub: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "px-[8%] py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 flex-wrap",
        dark ? "bg-navy" : "bg-cream-warm border-t border-navy/12"
      )}
    >
      <div>
        <h3
          className={cn(
            "font-serif font-bold text-2xl mb-1",
            dark ? "text-white" : "text-navy"
          )}
        >
          {title}
        </h3>
        <p className={cn("text-sm", dark ? "text-white/55" : "text-gray-500")}>
          {sub}
        </p>
      </div>
      <div className="flex gap-8 flex-wrap">
        <a href="tel:+16012183429" className="flex flex-col gap-0.5 no-underline group">
          <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-gold">
            Call Us
          </span>
          <strong
            className={cn(
              "font-medium transition-colors",
              dark
                ? "text-white/85 group-hover:text-gold-light"
                : "text-navy group-hover:text-gold"
            )}
          >
            (601) 218-3429
          </strong>
        </a>
        <a
          href="mailto:info@lelandfamilyministries.com"
          className="flex flex-col gap-0.5 no-underline group"
        >
          <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-gold">
            Email Us
          </span>
          <strong
            className={cn(
              "font-medium transition-colors",
              dark
                ? "text-white/85 group-hover:text-gold-light"
                : "text-navy group-hover:text-gold"
            )}
          >
            info@lelandfamilyministries.com
          </strong>
        </a>
      </div>
    </div>
  );
}

/* ── StatGrid ── */
interface Stat {
  num: string;
  suffix?: string;
  label: string;
}
export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-px bg-navy/12 border border-navy/12 rounded-lg overflow-hidden">
      {stats.map((s) => (
        <div key={s.label} className="stat-cell">
          <span className="block font-serif text-[2.75rem] font-black text-navy leading-none">
            {s.num}
            {s.suffix && <span className="text-gold">{s.suffix}</span>}
          </span>
          <span className="block text-[0.8rem] text-gray-500 mt-1">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── DonateForm ── */
export function DonateForm() {
  return (
    <div className="bg-navy rounded-xl p-10">
      <span className="section-label" style={{ color: "#e8b86d" }}>
        Online Donation
      </span>
      <h3 className="font-serif font-bold text-white text-[1.6rem] leading-tight mb-2">
        Give Today &amp; Change a Life.
      </h3>
      <p className="text-sm text-white/50 leading-relaxed mb-8">
        All donations go directly toward our programs.
      </p>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {["$25", "$50", "$100", "$250", "$500", "$1,000"].map((amt) => (
          <button key={amt} className="amount-btn">
            {amt}
          </button>
        ))}
      </div>
      <input
        className="form-input mb-5"
        type="number"
        placeholder="Or enter a custom amount ($)"
      />
      <span className="block text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-white/40 mb-2">
        Frequency
      </span>
      <div className="flex gap-1.5 flex-wrap mb-6">
        {["One-Time", "Weekly", "Monthly", "Yearly"].map((f) => (
          <button key={f} className="freq-tab">
            {f}
          </button>
        ))}
      </div>
      <hr className="border-none border-t border-white/10 my-6" />
      <div className="flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex flex-col gap-1">
            <label className="form-label">First Name *</label>
            <input className="form-input" type="text" placeholder="Jane" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="form-label">Last Name *</label>
            <input className="form-input" type="text" placeholder="Smith" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label">Email *</label>
          <input className="form-input" type="email" placeholder="jane@example.com" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label">Phone *</label>
          <input className="form-input" type="tel" placeholder="(601) 555-0100" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label">Address *</label>
          <input className="form-input" type="text" placeholder="123 Main St" />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex flex-col gap-1">
            <label className="form-label">City *</label>
            <input className="form-input" type="text" placeholder="Madison" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="form-label">State *</label>
            <input className="form-input" type="text" placeholder="MS" />
          </div>
        </div>
        <label className="flex gap-2.5 items-start cursor-pointer">
          <input type="checkbox" className="mt-1 flex-shrink-0 accent-gold" />
          <span className="text-[0.8rem] text-white/50 leading-relaxed">
            I agree to receive text/SMS messages from Stay Out For Good. Reply STOP to unsubscribe.
          </span>
        </label>
        <button className="w-full bg-gold text-white font-semibold py-4 rounded-md text-base tracking-wide cursor-pointer border-none transition-colors duration-200 hover:bg-gold-light">
          Complete My Donation →
        </button>
      </div>
    </div>
  );
}

/* ── NewsletterBox ── */
export function NewsletterBox() {
  return (
    <div className="bg-navy rounded-xl p-10">
      <span className="section-label" style={{ color: "#e8b86d" }}>
        Stay in the Know
      </span>
      <h3 className="font-serif font-bold text-white text-[1.75rem] leading-tight mb-3">
        Sign up for the latest news and updates.
      </h3>
      <p className="text-sm text-white/55 leading-relaxed mb-8">
        Get stories of restoration, ministry updates, and resources delivered to your inbox.
      </p>
      <div className="flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex flex-col gap-1">
            <label className="form-label">First Name *</label>
            <input className="form-input" type="text" placeholder="Jane" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="form-label">Last Name *</label>
            <input className="form-input" type="text" placeholder="Smith" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label">Email Address *</label>
          <input className="form-input" type="email" placeholder="jane@example.com" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label">Phone Number</label>
          <input className="form-input" type="tel" placeholder="(601) 555-0100" />
        </div>
        <button className="mt-1.5 w-full bg-gold text-white rounded font-semibold py-3.5 text-sm tracking-wide cursor-pointer border-none transition-colors duration-200 hover:bg-gold-light">
          Subscribe →
        </button>
      </div>
    </div>
  );
}
