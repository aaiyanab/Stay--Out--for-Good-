import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";
import SubmitButton from "@/components/ui/SubmitButton";
export const metadata: Metadata = { title: "Newsletter", description: "Subscribe to the Stay Out For Good newsletter for stories, updates, and ways to get involved." };
export default function NewsletterPage() {
  return (
    <>
      <PageHero eyebrow="Stay Connected" h1="Stay Informed," em="Stay Inspired." sub="Our newsletter is your gateway to staying connected with the Stay Out For Good™ ministry. Monthly updates, transformation stories, upcoming events, and opportunities to make a difference — delivered right to your inbox." breadcrumb="Newsletter" />
      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <div>
            <span className="section-label">Subscribe Today</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Join Our Growing <em className="not-italic text-gold">Community.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Fill out the form to subscribe and join supporters, partners, and returning citizens staying connected to the Stay Out For Good™ mission.</p>
            <div className="flex flex-col gap-3 mt-6">
              {["Published monthly","No spam, ever","Unsubscribe anytime","Free to join"].map((item) => (
                <div key={item} className="flex gap-3 items-center text-sm text-gray-600"><span className="text-gold font-bold">→</span>{item}</div>
              ))}
            </div>
          </div>
          <div className="bg-navy rounded-xl p-10">
            <span className="section-label" style={{ color:"#e8b86d" }}>Stay in the Know</span>
            <h3 className="font-serif font-bold text-white text-[1.6rem] leading-tight mb-2">Sign Up for Updates.</h3>
            <p className="text-sm text-white/50 mb-8">Receive our monthly newsletter with stories of restoration, ministry updates, and ways to get involved.</p>
            <div className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1"><label className="form-label">First Name *</label><input className="form-input" type="text" placeholder="Jane" /></div>
                <div className="flex flex-col gap-1"><label className="form-label">Last Name *</label><input className="form-input" type="text" placeholder="Smith" /></div>
              </div>
              <div className="flex flex-col gap-1"><label className="form-label">Email Address *</label><input className="form-input" type="email" placeholder="jane@example.com" /></div>
              <div className="flex flex-col gap-1"><label className="form-label">Phone Number</label><input className="form-input" type="tel" placeholder="(601) 555-0100" /></div>
              <SubmitButton label="Subscribe to the Newsletter →" successLabel="✓ You're Subscribed!" />
            </div>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}
