import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";
import SubmitButton from "@/components/ui/SubmitButton";

export const metadata: Metadata = { title: "Partnership", description: "Partner with Stay Out For Good to extend the reach of reentry ministry and transform communities." };

export default function PartnershipPage() {
  return (
    <>
      <PageHero eyebrow="Partner With Us" h1="Together We Can" em="Achieve So Much More." sub="Partnerships are the heartbeat of our mission. By joining forces with dedicated organizations, ministries, and individuals, we extend our reach, amplify our impact, and transform more lives together." breadcrumb="Partnership" />

      <section className="relative h-72 overflow-hidden">
        <Image src="/images/partnership-group.jpg" alt="Group of partners working together" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
          <p className="font-serif text-white text-2xl italic text-center max-w-xl px-4">&ldquo;Alone we can do so little; together we can do so much.&rdquo;</p>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Why Partnership Matters</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>The Cornerstone of <em className="not-italic text-gold">Lasting Change.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">At Stay Out For Good™, we believe that by joining forces with dedicated partners, we can build robust support networks that guide individuals from the confines of incarceration to the promise of transformation.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-8">Through collaboration, we offer comprehensive resources, spiritual guidance, and life skills that empower returning citizens. Together, we bridge gaps and foster a culture of hope and renewal.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="#partner-form" className="btn-primary">Become a Partner →</a>
              <Link href="/donate" className="btn-outline-navy">Donate Instead</Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image src="/images/hands-reaching.jpg" alt="Hands reaching together in partnership" fill={false} width={600} height={420} className="w-full h-auto object-cover rounded-xl" />
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <span className="section-label">How You Can Partner</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Four Ways to <em className="not-italic text-gold">Get Involved.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {[{ icon:"💰",title:"Financial Support",desc:"Your contributions are vital in funding our courses, materials, and resources. Financial support ensures we can continue providing high-quality, faith-based reentry programs." },{ icon:"🙋",title:"Volunteer Opportunities",desc:"Engage directly with participants by becoming a mentor, teacher, or group facilitator. Your involvement provides invaluable support and guidance." },{ icon:"🌐",title:"Community Collaboration",desc:"Collaborate with us to create a network of support for returning citizens — connecting local businesses, nonprofits, and ministry partners." },{ icon:"📦",title:"Resource Sharing",desc:"Share your resources — whether providing venues for programs, donating materials, or offering your expertise to enhance our ministry delivery." }].map((w) => (
              <div key={w.title} className="bg-cream-warm p-10"><span className="block text-[1.75rem] mb-5">{w.icon}</span><h3 className="font-serif font-bold text-navy text-xl mb-4">{w.title}</h3><p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24" id="partner-form">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <div>
            <span className="section-label">Ready to Partner?</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Let&apos;s Connect & <em className="not-italic text-gold">Make a Difference.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">We invite you to join us in making a lasting impact. Fill out the form and a member of our team will reach out to discuss how we can work together.</p>
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex gap-3 items-center text-sm text-gray-600"><span className="text-gold font-bold">→</span><a href="mailto:Stayoutforgoodministry@gmail.com" className="text-gold no-underline hover:underline">Stayoutforgoodministry@gmail.com</a></div>
              <div className="flex gap-3 items-center text-sm text-gray-600"><span className="text-gold font-bold">→</span><a href="tel:+16012183429" className="text-gold no-underline hover:underline">(601) 218-3429</a></div>
            </div>
          </div>
          <div className="bg-navy rounded-xl p-10">
            <span className="section-label" style={{ color:"#e8b86d" }}>Partnership Inquiry</span>
            <h3 className="font-serif font-bold text-white text-[1.5rem] leading-tight mb-2">Get in Touch.</h3>
            <p className="text-sm text-white/50 mb-8 leading-relaxed">Tell us about yourself and how you would like to partner with us.</p>
            <div className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1"><label className="form-label">First Name *</label><input className="form-input" type="text" placeholder="Jane" /></div>
                <div className="flex flex-col gap-1"><label className="form-label">Last Name *</label><input className="form-input" type="text" placeholder="Smith" /></div>
              </div>
              <div className="flex flex-col gap-1"><label className="form-label">Organization / Church</label><input className="form-input" type="text" placeholder="Your organization" /></div>
              <div className="flex flex-col gap-1"><label className="form-label">Email *</label><input className="form-input" type="email" placeholder="jane@example.com" /></div>
              <div className="flex flex-col gap-1"><label className="form-label">Phone</label><input className="form-input" type="tel" placeholder="(601) 555-0100" /></div>
              <div className="flex flex-col gap-1">
                <label className="form-label">Partnership Type *</label>
                <select className="form-input bg-navy/40">
                  {["Select how you'd like to partner...","Financial Support","Volunteer / Mentorship","Community Collaboration","Resource Sharing","Church Partnership","Other"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1"><label className="form-label">Your Interest</label><textarea className="form-input min-h-[90px] resize-y" placeholder="Share how you'd like to get involved..." /></div>
              <SubmitButton label="Submit Partnership Inquiry →" successLabel="✓ Submitted! We'll be in touch." />
            </div>
          </div>
        </div>
      </section>
      <ContactStrip title="Have More Questions?" subtitle="We'd love to connect and explore how we can work together." />
    </>
  );
}
