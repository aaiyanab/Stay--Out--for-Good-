import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactStrip from "@/components/ui/ContactStrip";

export const metadata: Metadata = {
  title: "Stay Out For Good — National Reentry Ministry",
  description: "A Christ-centered reentry ministry helping men and women prepare for life after incarceration through biblical truth, mentorship, and community.",
};

const audienceCards = [
  {
    icon: "🕊",
    tag: "For You",
    title: "Returning Citizens",
    desc: "Find support as you prepare for release or rebuild your life after incarceration through biblical teaching, practical tools, mentorship, and Christ-centered community.",
    items: ["12-week Christ-centered reentry course", "10 Biblical Reentry Steps", "Weekly Reentry Life Groups after graduation", "One-on-one mentorship and encouragement", "Available through local ministries or online support"],
    cta: "Get Support",
    href: "/returning-citizens",
  },
  {
    icon: "⛪",
    tag: "For Your Church",
    title: "Churches & Congregations",
    desc: "Equip your church to launch a reentry ministry that serves returning citizens with structure, compassion, biblical truth, and ongoing support.",
    items: ["Training to launch the 12-week reentry course", "Full course curriculum and participant resources", "Weekly Reentry Life Group model", "Mentor training and mentor guide", "Tools to support returning citizens in your community"],
    cta: "Start a Ministry",
    href: "/churches-congregations",
  },
  {
    icon: "🤝",
    tag: "Beyond the Walls",
    title: "Jail & Prison Ministries",
    desc: "Already serving inside a jail or prison? Stay Out For Good™ can help you add a structured biblical reentry pathway that prepares men and women for life after release.",
    items: ["12-week reentry course for jails and prisons", "10 Biblical Reentry Steps curriculum", "Participant stepbooks and facilitator resources", "Connection to churches, mentors, and life groups after release", "In-person and online reentry ministry options"],
    cta: "Expand Your Ministry",
    href: "/jail-prison-ministry",
  },
];

const steps = [
  { n: "1", title: "Learn", desc: "Participants begin with the Stay Out For Good™ 12-week reentry course, introduced to biblical truth, practical reentry preparation, personal responsibility, and the 10 Biblical Reentry Steps." },
  { n: "2", title: "Work the Steps", desc: "Participants begin applying the 10 Biblical Reentry Steps as a pathway for truth, surrender, responsibility, healing, accountability, discipline, restoration, and purpose." },
  { n: "3", title: "Graduate", desc: "After completing the 12-week course, participants are encouraged to continue through weekly Reentry Life Groups, mentorship, and ongoing support." },
  { n: "4", title: "Grow", desc: "Graduates can enroll in weekly Reentry Life Groups for a deeper step study and continued biblical encouragement, prayer, accountability, and community." },
  { n: "5", title: "Walk With Support", desc: "Released participants may be paired with trained reentry mentors who walk with them one-on-one through continued step-study work and practical application after release." },
  { n: "6", title: "Connect Online", desc: "If there is not yet a Stay Out For Good™ ministry in a participant's local community, they may join the online reentry ministry for biblical support, step study, encouragement, and connection." },
];

const actionLinks = [
  { label: "Make a Donation", href: "/donate" },
  { label: "Start a Reentry Ministry", href: "/churches-congregations" },
  { label: "Become a Reentry Mentor", href: "/get-involved" },
  { label: "Request Reentry Support", href: "/returning-citizens" },
  { label: "Become a Partner Organization", href: "/partnership" },
  { label: "Join the Online Reentry Ministry", href: "/get-involved" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen bg-navy flex items-center relative overflow-hidden px-[5%] pt-[120px] pb-20">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image src="/images/hero-corridor.jpg" alt="Man walking toward freedom" fill className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
        </div>

        <div className="max-w-2xl relative z-10">
          <div className="eyebrow mb-6">A National Reentry Ministry</div>
          <h1 className="font-serif font-black text-white leading-[1.08] mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
            Second Chances.<br />
            <em className="not-italic text-gold-light">Restored Lives.</em><br />
            Real Hope.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10 font-light">
            Stay Out For Good™ is a Christ-centered reentry ministry of Leland Family Ministries, helping men and women prepare for life after incarceration and build a new foundation through biblical truth, personal responsibility, practical reentry preparation, mentorship, and ongoing support.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="#audience" className="btn-primary">Find Your Path Forward</Link>
            <Link href="/training" className="inline-flex items-center gap-2 bg-gold-light/20 border border-gold-light text-gold-light px-6 py-3 rounded font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-gold-light hover:text-navy">Register for Training</Link>
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
              Built on Faith.<br /><em className="not-italic text-gold">Focused on Lasting Change.</em>
            </h2>
            <p className="text-[1.05rem] text-gray-600 leading-[1.8] mb-4">At Leland Family Ministries, we believe reentry must be more than a class, a checklist, or a short-term program. True reentry requires transformation, biblical truth, personal responsibility, healthy support, and ongoing accountability.</p>
            <p className="text-[1.05rem] text-gray-600 leading-[1.8]">Stay Out For Good™ is our national reentry ministry created to help incarcerated and formerly incarcerated men and women rebuild their lives in Christ — through the 12-week reentry course, the 10 Biblical Reentry Steps, weekly Reentry Life Groups, one-on-one mentorship, and online reentry support.</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-navy/12 border border-navy/12 rounded-lg overflow-hidden">
            {[
              { v: "12", s: "wk", l: "Christ-centered reentry course" },
              { v: "10", s: "", l: "Biblical Reentry Steps" },
              { v: "100", s: "%", l: "Faith-driven and community-led" },
              { v: "2", s: " paths", l: "In-person and online support" },
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
            <p className="text-[1.05rem] text-gray-600 leading-[1.75]">Stay Out For Good™ serves returning citizens, churches, congregations, jail ministries, prison ministries, and community partners with a clear biblical reentry pathway, practical resources, training, and ongoing support.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {audienceCards.map((card) => (
              <Link key={card.href} href={card.href} className="bg-cream-warm p-8 md:p-10 no-underline text-gray-900 block transition-colors duration-200 hover:bg-white group">
                <div className="w-12 h-12 rounded-lg bg-navy/6 flex items-center justify-center text-2xl mb-6 transition-colors duration-200 group-hover:bg-gold/12">{card.icon}</div>
                <span className="section-label">{card.tag}</span>
                <h3 className="font-serif font-bold text-navy text-2xl mb-4 leading-tight">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{card.desc}</p>
                <ul className="list-none m-0 p-0 flex flex-col gap-2 mb-7">
                  {card.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-gold before:font-bold">{item}</li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
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
            <p className="text-[1.05rem] text-white/55 leading-[1.75]">Stay Out For Good™ provides a clear reentry pathway that begins with biblical teaching and continues through life groups, mentorship, and online support when local ministry is not yet available.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mb-5 font-serif text-lg font-bold text-gold-light">{s.n}</div>
                <h4 className="font-serif font-bold text-white text-lg mb-3">{s.title}</h4>
                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE with sunset image ── */}
      <section className="relative px-[8%] py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/sunset-hands.jpg" alt="Hands raised at sunset in worship" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="max-w-[820px] text-center relative z-10">
          <span className="block font-serif text-[6rem] leading-[0.5] text-gold opacity-40 mb-4">&ldquo;</span>
          <blockquote className="font-serif text-white italic leading-relaxed mb-8 m-0" style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.8rem)" }}>
            We believe second chances require more than good intentions. Lasting change comes through Christ, truth, responsibility, accountability, and a community willing to walk alongside men and women as they rebuild their lives.
          </blockquote>
          <p className="text-sm font-semibold tracking-[0.12em] uppercase text-white/70">
            <strong className="block text-gold-light mb-1">Leland Family Ministries</strong>
            The Heart Behind Stay Out For Good™
          </p>
        </div>
      </section>

      {/* ── GET INVOLVED ── */}
      <section className="bg-cream-warm px-[8%] py-24" id="get-involved">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
          <div>
            <span className="section-label">Get Involved</span>
            <h2 className="font-serif font-bold text-navy leading-[1.15] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Join the<br /><em className="not-italic text-gold">Mission.</em>
            </h2>
            <p className="text-[1.05rem] text-gray-600 leading-[1.75] mb-2">There are many ways to be part of what God is doing through Stay Out For Good™. Whether you want to start a ministry, become a mentor, support the work financially, partner with us, or connect someone to reentry support — your involvement can help men and women build a new life and stay out for good.</p>
            <div className="flex flex-col gap-3 mt-8">
              {actionLinks.map((l) => (
                <Link key={l.href + l.label} href={l.href} className="action-link">
                  <span className="font-medium text-[0.95rem]">{l.label}</span>
                  <span className="text-gold font-bold">→</span>
                </Link>
              ))}
            </div>
          </div>
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
              <button className="mt-1.5 bg-gold text-white rounded font-semibold py-3.5 text-sm tracking-wide cursor-pointer border-none transition-colors duration-200 hover:bg-gold-light">Subscribe →</button>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
