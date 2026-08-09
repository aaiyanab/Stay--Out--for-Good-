"use client";
import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

const FORMSPREE_URL = "https://formspree.io/f/mwleloln";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        h1="We'd Love to"
        em="Hear From You."
        sub="Whether you're a returning citizen seeking support, a church ready to partner, or someone who just wants to learn more — reach out and let's connect."
        breadcrumb="Contact"
      />

      <section className="relative h-64 overflow-hidden">
        <Image src="/images/join-us.jpg" alt="Join the Stay Out For Good community" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
          <h2 className="font-serif text-white text-3xl font-bold text-center">
            Join Us. <span className="text-gold-light">You Are Welcome Here.</span>
          </h2>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <span className="section-label">Contact Information</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-6" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>
              Here to Help, <em className="not-italic text-gold">Every Step of the Way.</em>
            </h2>
            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: "📞", title: "Phone", content: <a href="tel:+16012183429" className="text-sm text-gold no-underline hover:underline">(601) 218-3429</a> },
                { icon: "✉️", title: "General Email", content: <a href="mailto:info@lelandfamilyministries.com" className="text-sm text-gold no-underline hover:underline">info@lelandfamilyministries.com</a> },
                { icon: "✉️", title: "Ministry Email", content: <a href="mailto:libbie@lelandfamilyministries.com" className="text-sm text-gold no-underline hover:underline">libbie@lelandfamilyministries.com</a> },
                { icon: "📍", title: "Ministry Address", content: <p className="text-sm text-gray-500">6308 Sweetwater Dr.<br />Lakeland, Florida 33811</p> },
                { icon: "📬", title: "Donation Mail", content: <p className="text-sm text-gray-500">105 Elizabeth Ave<br />Madison, Mississippi 39110</p> },
              ].map((item) => (
                <div key={item.title} className="resource-card">
                  <div className="resource-icon">{item.icon}</div>
                  <div><h4 className="font-semibold text-navy text-[0.95rem] mb-0.5">{item.title}</h4>{item.content}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              For partnership inquiries: <a href="mailto:Stayoutforgoodministry@gmail.com" className="text-gold no-underline hover:underline">Stayoutforgoodministry@gmail.com</a>
            </p>
          </div>

          <div className="bg-navy rounded-xl p-10">
            <span className="section-label" style={{ color: "#e8b86d" }}>Send a Message</span>
            <h3 className="font-serif font-bold text-white text-[1.6rem] leading-tight mb-2">How Can We Help?</h3>
            <p className="text-sm text-white/50 mb-8 leading-relaxed">Fill out the form and a member of our team will get back to you as soon as possible.</p>

            {submitted ? (
              <div className="text-center py-10">
                <span className="block text-[3rem] mb-4">✓</span>
                <h3 className="font-serif font-bold text-white text-2xl mb-3">Message Sent!</h3>
                <p className="text-sm text-white/60 leading-relaxed">Thank you for reaching out. Someone from our team will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="flex flex-col gap-1">
                    <label className="form-label">First Name *</label>
                    <input className="form-input" type="text" name="firstName" placeholder="Jane" required />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="form-label">Last Name *</label>
                    <input className="form-input" type="text" name="lastName" placeholder="Smith" required />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="form-label">Email Address *</label>
                  <input className="form-input" type="email" name="email" placeholder="jane@example.com" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" type="tel" name="phone" placeholder="(601) 555-0100" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="form-label">I Am A... *</label>
                  <select className="form-input bg-navy/40" name="type" required defaultValue="">
                    <option value="" disabled>Select one...</option>
                    <option>Returning Citizen</option>
                    <option>Church / Congregation</option>
                    <option>Jail or Prison Ministry</option>
                    <option>Donor / Supporter</option>
                    <option>Volunteer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="form-label">Message *</label>
                  <textarea className="form-input min-h-[120px] resize-y" name="message" placeholder="How can we help you?" required />
                </div>
                {error && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold text-white font-semibold py-4 rounded-md text-base tracking-wide border-none cursor-pointer transition-colors duration-200 hover:bg-gold-light disabled:opacity-60 disabled:cursor-default mt-1"
                >
                  {loading ? "Sending..." : "Send My Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
