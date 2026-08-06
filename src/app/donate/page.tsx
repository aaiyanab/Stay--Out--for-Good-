import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";
import { SQUARE_DONATE_URL } from "@/lib/utils";

export const metadata: Metadata = { title: "Donate", description: "Donate to Stay Out For Good and help transform lives through faith-based reentry ministry." };

export default function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Make a Difference" h1="Your Gift Transforms" em="Lives & Communities." sub="Every contribution plays a vital role in empowering returning citizens to rebuild with dignity, purpose, and lasting hope. Thank you for believing in second chances." breadcrumb="Donate" />

      <section className="relative h-64 overflow-hidden">
        <Image src="/images/donate-hero.jpg" alt="Giving a donation" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
          <p className="font-serif text-white text-2xl italic text-center max-w-lg px-4">&ldquo;Give, and it will be given to you.&rdquo; — Luke 6:38</p>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Your Impact</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Every Dollar Funds <em className="not-italic text-gold">Real Change.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Your support helps us provide crucial resources — from faith-based curriculum and mentorship to life skills training and community connection — for individuals re-entering society.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8]">By donating to Stay Out For Good™, you help empower individuals to rebuild their lives with dignity and purpose, and strengthen the communities they return to.</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-navy/12 border border-navy/12 rounded-lg overflow-hidden">
            {[{ v:"12",s:"wk",l:"Courses funded by donations" },{ v:"10",s:"",l:"Biblical Reentry Steps taught" },{ v:"100",s:"%",l:"Goes toward ministry programs" },{ v:"∞",s:"",l:"Lives changed through your gift" }].map((s) => (
              <div key={s.l} className="stat-cell"><span className="block font-serif text-[2.75rem] font-black text-navy leading-none">{s.v}<span className="text-gold">{s.s}</span></span><span className="block text-[0.8rem] text-gray-500 mt-1">{s.l}</span></div>
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
            {[{ icon:"📚",title:"Curriculum & Materials",desc:"Funding the 12-week reentry course, stepbooks, participant handouts, and the 10 Biblical Reentry Steps curriculum." },{ icon:"🤝",title:"Mentorship Programs",desc:"Connecting returning citizens with trained mentors using biblical step-study guides and one-on-one support." },{ icon:"💼",title:"Life Skills Training",desc:"Supporting employment preparation, financial literacy, housing assistance, and community engagement." },{ icon:"⛪",title:"Church Ministry Support",desc:"Equipping and training local churches to launch and sustain reentry ministries in their communities." },{ icon:"🏛",title:"Prison & Jail Outreach",desc:"Extending the ministry inside correctional facilities to prepare individuals before release." },{ icon:"🌐",title:"Online Reentry Ministry",desc:"Funding the online reentry ministry for released participants without a local Stay Out For Good™ ministry." }].map((p) => (
              <div key={p.title} className="bg-cream-warm p-8"><span className="block text-2xl mb-4">{p.icon}</span><h3 className="font-serif font-bold text-navy text-[1.05rem] mb-2">{p.title}</h3><p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-[8%] py-24">
        <div className="max-w-[760px] mx-auto text-center">
          <span className="section-label text-center block" style={{ color:"#e8b86d" }}>Give Online</span>
          <h2 className="font-serif font-bold text-white leading-[1.2] mb-4" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Make a Secure Donation<br /><em className="not-italic text-gold-light">Through Square.</em></h2>
          <p className="text-[1rem] text-white/60 leading-[1.75] mb-10 max-w-[520px] mx-auto">Your donation is processed securely through Square. You can give a one-time gift or set up a recurring donation to support the ministry on an ongoing basis.</p>
          {/* SQUARE DONATE BUTTON — PLACEHOLDER
              Replace SQUARE_DONATE_URL in src/lib/utils.ts with your actual Square payment link
              Go to squareup.com → Online → Payment Links → Create a link */}
          <a href={SQUARE_DONATE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4 inline-flex">Donate Now via Square →</a>
          <p className="text-sm text-white/40 mt-6">All donations are processed securely through Square. Stay Out For Good™ is a ministry of Leland Family Ministries.</p>
          <div className="border-t border-white/10 mt-12 pt-10">
            <h3 className="font-serif font-bold text-white text-xl mb-6">Other Ways to Give</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="bg-white/5 border border-white/10 rounded-lg p-5"><h4 className="font-semibold text-white text-[0.95rem] mb-1">Mail a Check</h4><p className="text-sm text-white/50 leading-relaxed">Payable to Stay Out For Good<br />105 Elizabeth Ave, Madison, MS 39110</p></div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-5"><h4 className="font-semibold text-white text-[0.95rem] mb-1">In-Kind Donations</h4><p className="text-sm text-white/50 leading-relaxed">Donate materials, venue space, or other resources. <a href="mailto:info@lelandfamilyministries.com" className="text-gold-light no-underline hover:underline">Contact us</a> to discuss.</p></div>
            </div>
          </div>
        </div>
      </section>
      <ContactStrip title="Questions About Giving?" subtitle="We'd love to help you find the best way to support the mission." />
    </>
  );
}
