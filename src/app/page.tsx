import type { Metadata } from "next";
import Link from "next/link";
import BulletList from "@/components/ui/BulletList";
import ContactStrip from "@/components/ui/ContactStrip";

export const metadata: Metadata = {
  title: "Stay Out For Good — National Re-Entry Ministry",
  description: "A national faith-based re-entry initiative walking alongside returning citizens and their families as they rebuild with dignity, purpose, and faith.",
};

const audienceCards = [
  {
    icon: "🕊",
    tag: "For You",
    title: "Returning Citizens",
    desc: "Navigate life after incarceration with spiritual grounding, practical tools, and a community that believes in you.",
    items: ["15-week faith-based re-entry course", "Available in-person and online", "Year-long weekly life group after graduation", "Prayer, mentorship & encouragement"],
    cta: "Get Support",
    href: "/returning-citizens",
  },
  {
    icon: "⛪",
    tag: "For Your Church",
    title: "Churches & Congregations",
    desc: "Equip your church to launch a re-entry ministry that transforms lives right in your own community.",
    items: ["Step-by-step training & support", "Full 15-week course curriculum", "Ongoing mentorship & outreach resources", "Network of faith-driven partners"],
    cta: "Start a Ministry",
    href: "/churches-congregations",
  },
  {
    icon: "🤝",
    tag: "Beyond the Walls",
    title: "Jail & Prison Ministries",
    desc: "Already serving inside? We'll help you extend your ministry into the community with a proven framework.",
    items: ["Extend your reach beyond the facility", "Proven re-entry framework & curriculum", "Support for local jails, prisons & communities", "Ongoing guidance from our network"],
    cta: "Expand Your Ministry",
    href: "/jail-prison-ministry",
  },
];

const steps = [
  { n: "1", title: "Enroll", desc: "Join the 15-week faith-based re-entry course — in-person or online — wherever you are in the country." },
  { n: "2", title: "Learn", desc: "Gain spiritual grounding and practical tools to navigate housing, employment, family, and faith after release." },
  { n: "3", title: "Graduate", desc: "Complete the course and celebrate your milestone with a community that has walked alongside you every step." },
  { n: "4", title: "Thrive", desc: "Join a year-long weekly life group — prayer, mentorship, and ongoing community support for lasting transformation." },
];

const actionLinks = [
  { label: "Make a Donation", href: "/donate" },
  { label: "Become a Partner Organization", href: "/partnership" },
  { label: "Join Our Online Reentry Community", href: "/get-involved" },
  { label: "Read the Blog & Recent Articles", href: "/blog" },
  { label: "View the Newsletter", href: "/newsletter" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen bg-navy flex items-center relative overflow-hidden px-[5%] pt-[120px] pb-20">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(201,147,58,0.08) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 40%)" }} />
        <div className="absolute top-0 bottom-0 left-1/2 right-0 opacity-[0.06] pointer-events-none overflow-hidden">
          <div className="absolute h-[200%] w-px bg-gradient-to-b from-transparent via-white to-transparent top-[-50%] left-[10%]" style={{ transform: "rotate(15deg)" }} />
          <div className="absolute h-[200%] w-px bg-gradient-to-b from-transparent via-white to-transparent top-[-50%] left-[40%]" style={{ transform: "rotate(15deg)" }} />
        </div>
        <div className="max-w-2xl relative z-10">
          <div className="eyebrow mb-6">A National Re-Entry Ministry</div>
          <h1 className="font-serif font-black text-white leading-[1.08] mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
            Second Chances.<br />
            <em className="not-italic text-gold-light">Restored Lives.</em><br />
            Real Hope.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10 font-light">
            Stay Out for Good is Leland Family Ministries&apos; national re-entry initiative — walking alongside released inmates and their families as they rebuild with dignity, purpose, and faith.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="#audience" className="btn-primary">Find Your Path Forward</Link>
            <Link href="#how" className="btn-outline-white">How It Works</Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-[5%] flex items-center gap-3 text-white/35 text-[0.75rem] tracking-[0.12em] uppercase z-10">
          <div className="w-10 h-px bg-white/25 relative overflow-hidden">
            <div className="absolute inset-0 bg-gold scroll-line-inner" />
          </div>
          Scroll to explore
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-cream-warm px-[8%] py-24" id="about">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <span className="section-label">About the Ministry</span>
            <h2 className="font-serif font-bold text-navy leading-[1.15] mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Built on Faith.<br /><em className="not-italic text-gold">Proven in Community.</em>
            </h2>
            <p className="text-[1.05rem] text-gray-600 leading-[1.8] mb-4">At Leland Family Ministries, we believe in the power of faith to transform communities. Stay Out for Good is our national re-entry initiative — designed to walk alongside returning citizens and their families as they rebuild their lives.</p>
            <p className="text-[1.05rem] text-gray-600 leading-[1.8]">Whether you&apos;re a returning citizen seeking support, a church ready to make a difference, or a jail and prison ministry looking to expand your impact — this is your starting place.</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-navy/12 border border-navy/12 rounded-lg overflow-hidden">
            {[
              { v: "15", s: "wk", l: "Faith-based re-entry course" },
              { v: "1", s: "yr", l: "Weekly life group commitment" },
              { v: "100", s: "%", l: "Faith-driven & community-led" },
              { v: "2", s: " paths", l: "In-person & online options" },
            ].map((s) => (
              <div key={s.l} className="stat-cell">
                <span className="block font-serif text-[2.75rem] font-black text-navy leading-none">{s.v}<span className="text-gold">{s.s}</span></span>
                <span className="block text-[0.8rem] text-gray-500 mt-1">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ── */}
      <section className="bg-cream px-[5%] py-24" id="audience">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[580px] mx-auto mb-16">
            <span className="section-label">Who We Serve</span>
            <h2 className="font-serif font-bold text-navy leading-[1.15] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Wherever You Are,<br /><em className="not-italic text-gold">We Meet You There.</em>
            </h2>
            <p className="text-[1.05rem] text-gray-600 leading-[1.75]">Stay Out for Good serves three distinct communities — each with tailored resources, curriculum, and ongoing support.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {audienceCards.map((card) => (
              <Link key={card.href} href={card.href} className="bg-cream-warm p-8 md:p-10 no-underline text-gray-900 block transition-colors duration-200 hover:bg-white group">
                <div className="w-12 h-12 rounded-lg bg-navy/6 flex items-center justify-center text-2xl mb-6 transition-colors duration-200 group-hover:bg-gold/12">{card.icon}</div>
                <span className="section-label">{card.tag}</span>
                <h3 className="font-serif font-bold text-navy text-2xl mb-4 leading-tight">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{card.desc}</p>
                <BulletList items={card.items} />
                <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                  {card.cta} <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-navy px-[8%] py-24" id="how">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-[560px] mb-14">
            <span className="section-label" style={{ color: "#e8b86d" }}>How It Works</span>
            <h2 className="font-serif font-bold text-white leading-[1.15] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              A Clear Path<br /><em className="not-italic text-gold-light">Forward.</em>
            </h2>
            <p className="text-[1.05rem] text-white/55 leading-[1.75]">Our proven framework walks returning citizens from their first day of freedom through a full year of supported community life.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            <div className="hidden lg:block absolute top-7 h-px bg-gold/30" style={{ left: "calc(12.5% + 28px)", right: "calc(12.5% + 28px)" }} />
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto mb-6 font-serif text-xl font-bold text-gold-light relative z-10">{s.n}</div>
                <h4 className="font-serif font-bold text-white text-lg mb-3">{s.title}</h4>
                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="bg-cream px-[8%] py-24 flex items-center justify-center">
        <div className="max-w-[820px] text-center">
          <span className="block font-serif text-[6rem] leading-[0.5] text-gold opacity-40 mb-4">&ldquo;</span>
          <blockquote className="font-serif text-navy italic leading-relaxed mb-8 m-0" style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.8rem)" }}>
            We believe in second chances, restored lives, and the power of faith to transform not just individuals — but entire communities.
          </blockquote>
          <p className="text-sm font-semibold tracking-[0.12em] uppercase text-gray-400">
            <strong className="block text-gold mb-1">Leland Family Ministries</strong>
            The Heart Behind Stay Out for Good
          </p>
        </div>
      </section>

      {/* ── GET INVOLVED ── */}
      <section className="bg-cream-warm px-[8%] py-24" id="get-involved">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
          <div>
            <span className="section-label">Get Involved</span>
            <h2 className="font-serif font-bold text-navy leading-[1.15] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Join the<br /><em className="not-italic text-gold">Movement.</em>
            </h2>
            <p className="text-[1.05rem] text-gray-600 leading-[1.75] mb-2">There are many ways to be part of what God is doing through Stay Out for Good.</p>
            <div className="flex flex-col gap-3 mt-8">
              {actionLinks.map((l) => (
                <Link key={l.href} href={l.href} className="action-link">
                  <span className="font-medium text-[0.95rem]">{l.label}</span>
                  <span className="text-gold font-bold">→</span>
                </Link>
              ))}
            </div>
          </div>
          {/* Newsletter form */}
          <div className="bg-navy rounded-xl p-10">
            <span className="section-label" style={{ color: "#e8b86d" }}>Stay in the Know</span>
            <h3 className="font-serif font-bold text-white text-[1.75rem] leading-tight mb-3">Sign up for the latest news and updates.</h3>
            <p className="text-sm text-white/55 leading-relaxed mb-8">Get stories of restoration, ministry updates, and resources delivered to your inbox.</p>
            <div className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1"><label className="form-label">First Name *</label><input className="form-input" type="text" placeholder="Jane" /></div>
                <div className="flex flex-col gap-1"><label className="form-label">Last Name *</label><input className="form-input" type="text" placeholder="Smith" /></div>
              </div>
              <div className="flex flex-col gap-1"><label className="form-label">Email Address *</label><input className="form-input" type="email" placeholder="jane@example.com" /></div>
              <div className="flex flex-col gap-1"><label className="form-label">Phone Number</label><input className="form-input" type="tel" placeholder="(601) 555-0100" /></div>
              <button className="mt-1.5 bg-gold text-white rounded font-semibold py-3.5 text-sm tracking-wide cursor-pointer border-none transition-colors duration-200 hover:bg-gold-light">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
