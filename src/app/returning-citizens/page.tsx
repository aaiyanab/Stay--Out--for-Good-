import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";

export const metadata: Metadata = { title: "For Returning Citizens", description: "Are you returning home or recently released? Stay Out For Good is here to help you rebuild your life." };

export default function ReturningCitizensPage() {
  return (
    <>
      <PageHero eyebrow="For You" h1="Are You Returning Home or" em="Recently Released?" sub="You do not have to walk this road alone. Stay Out For Good™ was created to help men and women rebuild their lives after incarceration through biblical truth, practical reentry preparation, encouragement, accountability, mentorship, and ongoing support." breadcrumb="Returning Citizens" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">You Belong Here</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>We Are Here to <em className="not-italic text-gold">Help You Take the Next Right Step.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Whether you are preparing for release, recently released, or trying to stay on the right path, we want to help you find support, community, and a clear pathway forward.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-6">Depending on what is available in your area, we may be able to help connect you with a local Stay Out For Good™ ministry, a church or ministry partner, a weekly Reentry Life Group, a trained reentry mentor, or online reentry ministry support.</p>
            <div className="flex flex-col gap-3">
              {["A local Stay Out For Good™ ministry","A church or ministry partner","A weekly Reentry Life Group","A trained reentry mentor","Online reentry ministry support","Reentry resources in your community"].map((item) => (
                <div key={item} className="flex gap-3 items-center text-sm text-gray-600"><span className="text-gold font-bold">→</span>{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image src="/images/returning-smiling.jpg" alt="Man smiling and finding community" fill={false} width={600} height={450} className="w-full h-auto object-cover rounded-xl" />
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden order-2 lg:order-1">
            <Image src="/images/returning-bridge.jpg" alt="Man walking on a bridge toward a new beginning" fill={false} width={600} height={450} className="w-full h-auto object-cover rounded-xl" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="section-label">If There Is No Local Ministry Yet</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Online Reentry <em className="not-italic text-gold">Support Is Available.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">If there is not currently a Stay Out For Good™ ministry in your community, you may still be able to connect with our online reentry ministry.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-6">Through the online ministry, released participants can receive biblical encouragement, step-study support, prayer, accountability, and connection to others who are serious about rebuilding their lives.</p>
          </div>
        </div>
      </section>

      <section className="bg-navy px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label" style={{ color:"#e8b86d" }}>The Reentry Pathway</span>
            <h2 className="font-serif font-bold text-white leading-[1.2] mb-5" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>How We Can <em className="not-italic text-gold-light">Help You.</em></h2>
            <p className="text-[1rem] text-white/60 leading-[1.8] mb-6">Stay Out For Good™ provides a clear reentry pathway built on biblical truth and practical support — designed to help you stay out for good.</p>
            <div className="flex flex-col gap-3">
              {[{ icon:"📖",title:"12-Week Christ-Centered Reentry Course",desc:"A biblically based course that prepares you for successful reentry through teaching, discussion, and practical application." },{ icon:"🪜",title:"10 Biblical Reentry Steps",desc:"A step-by-step biblical pathway covering truth, surrender, responsibility, healing, accountability, discipline, restoration, and purpose." },{ icon:"👥",title:"Weekly Reentry Life Groups",desc:"Weekly gatherings that provide continued discipleship, support, accountability, and encouragement after graduation." },{ icon:"🤝",title:"One-on-One Mentorship",desc:"A trained mentor who will walk alongside you using a biblical step-study guide and practical reentry support." },{ icon:"💻",title:"Online Reentry Ministry",desc:"For released participants who do not yet have a local Stay Out For Good™ ministry in their community." }].map((r) => (
                <div key={r.title} className="dark-card flex gap-4 items-start"><div className="w-10 h-10 flex-shrink-0 rounded-md bg-gold/12 flex items-center justify-center text-lg">{r.icon}</div><div><h4 className="font-semibold text-white text-[0.95rem] mb-1">{r.title}</h4><p className="text-sm text-white/50 leading-relaxed">{r.desc}</p></div></div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-10">
            <span className="section-label" style={{ color:"#e8b86d" }}>Request Reentry Support</span>
            <h3 className="font-serif font-bold text-white text-[1.5rem] leading-tight mb-2">What to Do Next.</h3>
            <p className="text-sm text-white/50 mb-8 leading-relaxed">Fill out the form below and tell us about yourself and what kind of support you are looking for. Someone from our ministry will review it and follow up as we are able.</p>
            <div className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1"><label className="form-label">First Name *</label><input className="form-input" type="text" placeholder="Jane" /></div>
                <div className="flex flex-col gap-1"><label className="form-label">Last Name *</label><input className="form-input" type="text" placeholder="Smith" /></div>
              </div>
              <div className="flex flex-col gap-1"><label className="form-label">Email Address *</label><input className="form-input" type="email" placeholder="jane@example.com" /></div>
              <div className="flex flex-col gap-1"><label className="form-label">Phone Number *</label><input className="form-input" type="tel" placeholder="(601) 555-0100" /></div>
              <div className="flex flex-col gap-1"><label className="form-label">City &amp; State *</label><input className="form-input" type="text" placeholder="City, State" /></div>
              <div className="flex flex-col gap-1">
                <label className="form-label">Current Status *</label>
                <select className="form-input bg-navy/40">
                  <option>Preparing for release</option>
                  <option>Recently released</option>
                  <option>Released — need continued support</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="form-label">Type of Support Needed</label>
                <select className="form-input bg-navy/40">
                  <option>Local ministry connection</option>
                  <option>Online Reentry Life Group</option>
                  <option>One-on-one mentorship</option>
                  <option>Not sure — need guidance</option>
                </select>
              </div>
              <div className="flex flex-col gap-1"><label className="form-label">Additional Notes</label><textarea className="form-input min-h-[80px] resize-y" placeholder="Tell us anything else that would help us connect you with the right support..." /></div>
              <button className="w-full bg-gold text-white font-semibold py-4 rounded-md text-base tracking-wide border-none cursor-pointer transition-colors duration-200 hover:bg-gold-light mt-1">Submit Reentry Support Request →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24 border-t border-navy/12">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="section-label text-center block">Take the First Step</span>
          <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Ready to Start Your <em className="not-italic text-gold">Journey Today?</em></h2>
          <p className="text-[1rem] text-gray-600 leading-[1.75] mb-10 max-w-[520px] mx-auto">Whether you are looking to grow spiritually, find accountability, build healthy community, or connect to a local ministry — we are here every step of the way.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Contact Us →</Link>
            <Link href="/training" className="btn-outline-navy">Register for Training</Link>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}
