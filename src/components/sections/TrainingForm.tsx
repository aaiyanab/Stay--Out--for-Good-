"use client";
import { useState } from "react";
// PLACEHOLDER: Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
// Go to formspree.io → create a form → copy the ID (e.g. xpwzabcd)
// Then update FORMSPREE_TRAINING_URL in src/lib/utils.ts
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORMSPREE_ID";

export default function TrainingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
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
      }
    } catch {
      // Handle error silently — user can try again
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-xl p-10 text-center">
        <span className="block text-[3rem] mb-4">✓</span>
        <h3 className="font-serif font-bold text-white text-2xl mb-3">You&apos;re Registered!</h3>
        <p className="text-sm text-white/60 leading-relaxed">Thank you for registering. Someone from our team will follow up with training details and confirmation. We look forward to seeing you there!</p>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-10">
      <span className="section-label" style={{ color: "#e8b86d" }}>Training Registration</span>
      <h3 className="font-serif font-bold text-white text-[1.5rem] leading-tight mb-2">Sign Up for Training.</h3>
      <p className="text-sm text-white/50 mb-8 leading-relaxed">Fill out the form below to register for an upcoming Reentry Ministry Training.</p>

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
          <label className="form-label">Phone Number *</label>
          <input className="form-input" type="tel" name="phone" placeholder="(601) 555-0100" required />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label">Church / Organization Name</label>
          <input className="form-input" type="text" name="organization" placeholder="Your church or ministry" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label">City &amp; State *</label>
          <input className="form-input" type="text" name="location" placeholder="Winter Haven, FL" required />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label">I Am Representing *</label>
          <select className="form-input bg-navy/40" name="representing" required>
            <option value="">Select one...</option>
            <option>A Church or Congregation</option>
            <option>A Jail or Prison Ministry</option>
            <option>A Nonprofit or Community Organization</option>
            <option>I am an Individual</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label">Number of People Attending</label>
          <input className="form-input" type="number" name="attendees" placeholder="1" min="1" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label">Any Questions or Notes</label>
          <textarea className="form-input min-h-[80px] resize-y" name="notes" placeholder="Any questions or special accommodations..." />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold text-white font-semibold py-4 rounded-md text-base tracking-wide border-none cursor-pointer transition-colors duration-200 hover:bg-gold-light disabled:opacity-60 disabled:cursor-default mt-1"
        >
          {loading ? "Submitting..." : "Register for Training →"}
        </button>
        <p className="text-[0.75rem] text-white/35 text-center mt-1">
          After submitting, you will receive confirmation details. Space is limited.
        </p>
      </form>
    </div>
  );
}
