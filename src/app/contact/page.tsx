import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SubmitButton from "@/components/ui/SubmitButton";

export const metadata: Metadata = { title: "Contact Us", description: "Contact Stay Out For Good — reach out for support, partnership, or general inquiries." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get In Touch" h1="We'd Love to" em="Hear From You." sub="Whether you're a returning citizen seeking support, a church ready to partner, or someone who just wants to learn more — reach out and let's connect." breadcrumb="Contact" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <span className="section-label">Contact Information</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-6" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Here to Help, <em className="not-italic text-gold">Every Step of the Way.</em></h2>
            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: "📞", title: "Phone", content: <a href="tel:+16012183429" className="text-sm text-gold no-underline hover:underline">(601) 218-3429</a> },
                { icon: "✉️", title: "General Email", content: <a href="mailto:info@lelandfamilyministries.com" className="text-sm text-gold no-underline hover:underline">info@lelandfamilyministries.com</a> },
                { icon: "✉️", title: "Ministry Email", content: <a href="mailto:libbie@lelandfamilyministries.com" className="text-sm text-gold no-underline hover:underline">libbie@lelandfamilyministries.com</a> },
                { icon: "📍", title: "Mailing Address", content: <p className="text-sm text-gray-500">6308 Sweetwater Dr.<br />Lakeland, Florida 33811</p> },
                { icon: "📬", title: "Donation Mail", content: <p className="text-sm text-gray-500">105 Elizabeth Ave<br />Madison, Mississippi 39110</p> },
              ].map((item) => (
                <div key={item.title} className="resource-card">
                  <div className="resource-icon">{item.icon}</div>
                  <div><h4 className="font-semibold text-navy text-[0.95rem] mb-0.5">{item.title}</h4>{item.content}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">For partnership inquiries, also reach us at: <a href="mailto:Stayoutforgoodministry@gmail.com" className="text-gold no-underline hover:underline">Stayoutforgoodministry@gmail.com</a></p>
          </div>

          <div className="bg-navy rounded-xl p-10">
            <span className="section-label" style={{ color: "#e8b86d" }}>Send a Message</span>
            <h3 className="font-serif font-bold text-white text-[1.6rem] leading-tight mb-2">How Can We Help?</h3>
            <p className="text-sm text-white/50 mb-8 leading-relaxed">Fill out the form and a member of our team will get back to you as soon as possible.</p>
            <div className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1"><label className="form-label">First Name *</label><input className="form-input" type="text" placeholder="Jane" /></div>
                <div className="flex flex-col gap-1"><label className="form-label">Last Name *</label><input className="form-input" type="text" placeholder="Smith" /></div>
              </div>
              <div className="flex flex-col gap-1"><label className="form-label">Email Address *</label><input className="form-input" type="email" placeholder="jane@example.com" /></div>
              <div className="flex flex-col gap-1"><label className="form-label">Phone Number</label><input className="form-input" type="tel" placeholder="(601) 555-0100" /></div>
              <div className="flex flex-col gap-1">
                <label className="form-label">I Am A... *</label>
                <select className="form-input bg-navy/40">
                  {["Select one...", "Returning Citizen", "Church / Congregation", "Jail or Prison Ministry", "Donor / Supporter", "Volunteer", "Other"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1"><label className="form-label">Message *</label><textarea className="form-input min-h-[120px] resize-y" placeholder="How can we help you?" /></div>
              <SubmitButton label="Send My Message →" successLabel="✓ Message Sent! We'll be in touch." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
