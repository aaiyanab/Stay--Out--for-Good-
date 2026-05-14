"use client";
import { useState } from "react";
import SubmitButton from "@/components/ui/SubmitButton";

const AMOUNTS = ["$25", "$50", "$100", "$250", "$500", "$1,000"];
const FREQS = ["One-Time", "Weekly", "Monthly", "Yearly"];

export default function DonateForm() {
  const [amount, setAmount] = useState("$100");
  const [freq, setFreq] = useState("One-Time");
  return (
    <div className="bg-navy rounded-xl p-10">
      <span className="section-label" style={{ color: "#e8b86d" }}>Online Donation</span>
      <h3 className="font-serif font-bold text-white text-[1.6rem] leading-tight mb-2">Give Today & Change a Life.</h3>
      <p className="text-sm text-white/50 leading-relaxed mb-8">All donations go directly toward our programs.</p>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {AMOUNTS.map((a) => (
          <button key={a} onClick={() => setAmount(a)}
            className={`py-3 rounded-md font-semibold text-base border transition-all duration-200 cursor-pointer ${amount === a ? "bg-gold/20 border-gold text-white" : "bg-white/[0.07] border-white/15 text-white/80 hover:bg-gold/20 hover:border-gold hover:text-white"}`}>{a}</button>
        ))}
      </div>
      <input type="number" placeholder="Or enter a custom amount ($)" onChange={() => setAmount("")} className="form-input mb-5" />
      <span className="block text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-white/40 mb-2">Frequency</span>
      <div className="flex gap-1.5 flex-wrap mb-6">
        {FREQS.map((f) => (
          <button key={f} onClick={() => setFreq(f)}
            className={`px-3.5 py-1.5 rounded text-sm border cursor-pointer transition-all duration-200 ${freq === f ? "bg-gold/18 border-gold text-gold-light" : "bg-white/[0.06] border-white/12 text-white/60 hover:bg-gold/18 hover:border-gold hover:text-gold-light"}`}>{f}</button>
        ))}
      </div>
      <hr className="border-none border-t border-white/10 my-6" />
      <div className="flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="flex flex-col gap-1"><label className="form-label">First Name *</label><input className="form-input" type="text" placeholder="Jane" /></div>
          <div className="flex flex-col gap-1"><label className="form-label">Last Name *</label><input className="form-input" type="text" placeholder="Smith" /></div>
        </div>
        <div className="flex flex-col gap-1"><label className="form-label">Email *</label><input className="form-input" type="email" placeholder="jane@example.com" /></div>
        <div className="flex flex-col gap-1"><label className="form-label">Phone *</label><input className="form-input" type="tel" placeholder="(601) 555-0100" /></div>
        <label className="flex gap-2.5 items-start cursor-pointer">
          <input type="checkbox" className="mt-1 flex-shrink-0 accent-gold" />
          <span className="text-[0.8rem] text-white/50 leading-relaxed">I agree to receive text/SMS messages from Stay Out For Good. Reply STOP to unsubscribe.</span>
        </label>
        <SubmitButton label="Complete My Donation →" successLabel="✓ Thank You! Processing..." />
      </div>
    </div>
  );
}
