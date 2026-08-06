import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, PHONE_HREF, PHONE, EMAIL_GENERAL, EMAIL_LIBBIE, ADDRESS_MINISTRY } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/50 pt-16 pb-9 px-[8%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image src="/images/logo.jpg" alt="Stay Out For Good" width={40} height={40} className="rounded-full object-cover" />
            <Link href="/" className="font-serif text-[1.1rem] font-bold text-white no-underline">Stay Out <span className="text-gold-light">For Good™</span></Link>
          </div>
          <p className="text-sm leading-relaxed text-white/50 max-w-[260px] mb-5">A national reentry ministry of Leland Family Ministries, serving returning citizens, churches, and correctional ministry partners.</p>
          <div className="flex flex-col gap-1">
            <a href={PHONE_HREF} className="text-white/45 hover:text-gold-light transition-colors text-xs no-underline">{PHONE}</a>
            <a href={`mailto:${EMAIL_LIBBIE}`} className="text-white/45 hover:text-gold-light transition-colors text-xs no-underline">{EMAIL_LIBBIE}</a>
            <a href={`mailto:${EMAIL_GENERAL}`} className="text-white/45 hover:text-gold-light transition-colors text-xs no-underline">{EMAIL_GENERAL}</a>
          </div>
        </div>
        <div>
          <span className="block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/30 mb-4">Who We Serve</span>
          <ul className="list-none m-0 p-0 flex flex-col gap-2">
            {FOOTER_LINKS.whoWeServe.map((l) => <li key={l.href}><Link href={l.href} className="text-white/50 text-sm hover:text-gold-light transition-colors no-underline">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <span className="block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/30 mb-4">Ministry</span>
          <ul className="list-none m-0 p-0 flex flex-col gap-2">
            {FOOTER_LINKS.ministry.map((l) => <li key={l.href}><Link href={l.href} className="text-white/50 text-sm hover:text-gold-light transition-colors no-underline">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <span className="block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white/30 mb-4">Get Involved</span>
          <ul className="list-none m-0 p-0 flex flex-col gap-2">
            {FOOTER_LINKS.getInvolved.map((l) => <li key={l.href}><Link href={l.href} className="text-white/50 text-sm hover:text-gold-light transition-colors no-underline">{l.label}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35">
        <span>© 2025–2026 Stay Out For Good™ · Leland Family Ministries · All Rights Reserved.</span>
        <span>{ADDRESS_MINISTRY}</span>
      </div>
    </footer>
  );
}
