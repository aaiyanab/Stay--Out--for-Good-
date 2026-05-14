import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";
import DonateForm from "@/components/sections/DonateForm";

export const metadata: Metadata = { title: "Donate", description: "Donate to Stay Out For Good and help transform lives through faith-based re-entry ministry." };

export default function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Make a Difference" h1="Your Gift Transforms" em="Lives & Communities." sub="Every contribution — big or small — plays a vital role in empowering returning citizens to rebuild with dignity, purpose, and lasting hope. Thank you for believing in second chances." breadcrumb="Donate" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Your Impact</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Every Dollar Funds <em className="not-italic text-gold">Real Change.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Your support helps us provide crucial resources — from faith-based curriculum and mentorship to life skills training and community connection — for individuals re-entering society.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8]">By donating to Stay Out for Good, you help offer essential services that empower individuals to rebuild with dignity and purpose, and strengthen the communities they return to.</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-navy/12 border border-navy/12 rounded-lg overflow-hidden">
            {[{ v: "16", s: "wk", l: "Courses funded by donations" }, { v: "52", s: "wk", l: "Year of life group support" }, { v: "100", s: "%", l: "Goes toward ministry programs" }, { v: "∞", s: "", l: "Lives changed through your gift" }].map((s) => (
              <div key={s.l} className="stat-cell">
                <span className="block font-serif text-[2.75rem] font-black text-navy leading-none">{s.v}<span className="text-gold">{s.s}</span></span>
                <span className="block text-[0.8rem] text-gray-500 mt-1">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <span className="section-label">Programs Supported</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>What Your <em className="not-italic text-gold">Donation Funds.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {[
              { icon: "📚", title: "Curriculum & Materials", desc: "Funding the 16-week re-entry course guides, participant handouts, and life group curriculum." },
              { icon: "🤝", title: "Mentorship Programs", desc: "Connecting returning citizens with dedicated mentors, sponsors, and faith leaders." },
              { icon: "💼", title: "Life Skills Training", desc: "Supporting employment preparation, financial literacy, housing assistance, and community engagement." },
              { icon: "⛪", title: "Church Ministry Support", desc: "Equipping and training local churches to launch and sustain re-entry ministries." },
              { icon: "🏛", title: "Prison & Jail Outreach", desc: "Extending the ministry inside correctional facilities to prepare individuals before release." },
              { icon: "🌐", title: "Community Events", desc: "Organizing gatherings, graduations, and outreach events that celebrate transformation." },
            ].map((p) => (
              <div key={p.title} className="bg-cream-warm p-8">
                <span className="block text-2xl mb-4">{p.icon}</span>
                <h3 className="font-serif font-bold text-navy text-[1.05rem] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <span className="section-label">Ways to Give</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Choose How You <em className="not-italic text-gold">Want to Help.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-8">Every form of giving makes a difference.</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: "💳", title: "Online Donation", desc: "Give quickly and securely using the form. Choose your amount and frequency." },
                { icon: "✉️", title: "Mail a Check", desc: "Payable to Stay Out for Good · 105 Elizabeth Ave, Madison, MS 39110" },
                { icon: "🎁", title: "In-Kind Donations", desc: "Donate materials, venue space, or other resources. Contact us to discuss." },
                { icon: "🤲", title: "Volunteer Your Time", desc: "Give as a mentor, facilitator, or event volunteer." },
              ].map((w) => (
                <div key={w.title} className="resource-card">
                  <div className="resource-icon">{w.icon}</div>
                  <div><h4 className="font-semibold text-navy text-[0.95rem] mb-1">{w.title}</h4><p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <DonateForm />
        </div>
      </section>

      <ContactStrip title="Questions About Giving?" subtitle="We'd love to help you find the best way to support the mission." />
    </>
  );
}
