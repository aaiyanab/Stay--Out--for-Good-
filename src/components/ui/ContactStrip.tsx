import { PHONE_HREF, PHONE, EMAIL_GENERAL } from "@/lib/utils";

interface ContactStripProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function ContactStrip({
  title = "We're Here to Help.",
  subtitle = "Have questions or need support? Reach out — we'd love to hear from you.",
  dark = true,
}: ContactStripProps) {
  return (
    <div className={`px-[8%] py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 flex-wrap ${dark ? "bg-navy" : "bg-cream-warm border-t border-navy/12"}`}>
      <div>
        <h3 className={`font-serif font-bold text-2xl mb-1 ${dark ? "text-white" : "text-navy"}`}>{title}</h3>
        <p className={`text-sm ${dark ? "text-white/55" : "text-gray-500"}`}>{subtitle}</p>
      </div>
      <div className="flex gap-8 flex-wrap">
        <a href={PHONE_HREF} className="flex flex-col gap-0.5 no-underline group">
          <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-gold">Call Us</span>
          <strong className={`font-medium text-[0.95rem] transition-colors group-hover:text-gold-light ${dark ? "text-white/85" : "text-navy"}`}>{PHONE}</strong>
        </a>
        <a href={`mailto:${EMAIL_GENERAL}`} className="flex flex-col gap-0.5 no-underline group">
          <span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-gold">Email Us</span>
          <strong className={`font-medium text-[0.95rem] transition-colors group-hover:text-gold-light ${dark ? "text-white/85" : "text-navy"}`}>{EMAIL_GENERAL}</strong>
        </a>
      </div>
    </div>
  );
}
