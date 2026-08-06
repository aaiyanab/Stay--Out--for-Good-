import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";

export const metadata: Metadata = { title: "Jail & Prison Ministry", description: "Help your jail or prison ministry add a structured biblical reentry pathway with Stay Out For Good." };

export default function JailPrisonPage() {
  return (
    <>
      <PageHero eyebrow="Beyond the Walls" h1="Build a Bridge to" em="Lasting Transformation." sub="Already serving inside a jail or prison? Stay Out For Good™ can help you add a structured biblical reentry pathway that prepares men and women for life after release — and keeps them connected to support after they leave." breadcrumb="Jail & Prison Ministry" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">A Structured Reentry Pathway</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Inside the Walls.<br /><em className="not-italic text-gold">Beyond the Walls.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Stay Out For Good™ helps jail and prison ministries move beyond weekly encouragement alone by providing a structured reentry course and a clear pathway for continued support after release.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-8">Our model includes the 12-week reentry course, the 10 Biblical Reentry Steps, weekly Reentry Life Groups, one-on-one mentorship, and online reentry support — giving participants a complete biblical foundation before and after release.</p>
            <Link href="/contact" className="btn-primary">Get Started Today →</Link>
          </div>
          <div className="grid grid-cols-2 gap-px bg-navy/12 border border-navy/12 rounded-lg overflow-hidden">
            {[{ v:"12",s:"wk",l:"Christ-centered reentry course" },{ v:"10",s:"",l:"Biblical Reentry Steps" },{ v:"2",s:" phases",l:"Inside and beyond the walls" },{ v:"∞",s:"",l:"Coaching and ongoing support" }].map((s) => (
              <div key={s.l} className="stat-cell"><span className="block font-serif text-[2.75rem] font-black text-navy leading-none">{s.v}<span className="text-gold">{s.s}</span></span><span className="block text-[0.8rem] text-gray-500 mt-1">{s.l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <span className="section-label">What We Provide</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Everything You Need <em className="not-italic text-gold">to Begin.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {[{ icon:"📚",title:"12-Week Reentry Course",desc:"A complete Christ-centered course with participant stepbooks, facilitator guide, and the 10 Biblical Reentry Steps curriculum." },{ icon:"🪜",title:"10 Biblical Reentry Steps",desc:"A step-by-step biblical pathway for truth, surrender, responsibility, healing, accountability, discipline, restoration, and purpose." },{ icon:"👥",title:"Reentry Life Groups",desc:"Weekly life group curriculum for continued step study, prayer, accountability, and community after graduation." },{ icon:"🤝",title:"Mentor Training & Guide",desc:"Train volunteers to walk one-on-one with released participants using a biblical step-study mentor guide." },{ icon:"💻",title:"Online Reentry Ministry",desc:"Access to online reentry ministry for participants who release to areas without a local Stay Out For Good™ ministry." },{ icon:"🎓",title:"Leader Training & Coaching",desc:"Ongoing training, coaching, and support so your ministry team stays equipped and effective." }].map((p) => (
              <div key={p.title} className="bg-cream-warm p-8"><span className="block text-2xl mb-4">{p.icon}</span><h3 className="font-serif font-bold text-navy text-[1.05rem] mb-2">{p.title}</h3><p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-[8%] py-24">
        <div className="max-w-[760px] mx-auto text-center">
          <span className="section-label text-center block" style={{ color:"#e8b86d" }}>Ready to Get Started?</span>
          <h2 className="font-serif font-bold text-white leading-[1.2] mb-4" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Let&apos;s Build a Ministry That <em className="not-italic text-gold-light">Sets People Free.</em></h2>
          <p className="text-[1rem] text-white/60 leading-[1.75] mb-10 max-w-[520px] mx-auto">Contact us to learn more, ask questions, and explore how Stay Out For Good™ fits your ministry&apos;s unique mission.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Contact Us Today →</Link>
            <Link href="/training" className="btn-outline-white">Register for Training</Link>
          </div>
        </div>
      </section>
      <ContactStrip dark={false} title="Questions? We're Here." subtitle="Reach out — we'd love to help you explore how Stay Out For Good™ fits your ministry." />
    </>
  );
}
