import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";
import SubmitButton from "@/components/ui/SubmitButton";

export const metadata: Metadata = { title: "Newsletter", description: "Subscribe to the Stay Out For Good newsletter for stories of transformation, ministry updates, and ways to get involved." };

const expects = [
  { icon: "❤️", title: "Transformation Stories", desc: "Heartwarming, real stories of individuals whose lives have been changed through faith, community, and the re-entry journey." },
  { icon: "📅", title: "Events & Workshops", desc: "Notifications about upcoming events, graduations, workshops, and opportunities to connect with the ministry near you." },
  { icon: "🙋", title: "Volunteer Opportunities", desc: "First access to volunteer openings, mentorship opportunities, and ways to plug into the mission wherever you are." },
  { icon: "✝️", title: "Faith & Encouragement", desc: "Uplifting messages, scripture reflections, and quotes to inspire your journey and remind you why this mission matters." },
];

export default function NewsletterPage() {
  return (
    <>
      <PageHero eyebrow="Stay Connected" h1="Stay Informed," em="Stay Inspired." sub="Our newsletter is your gateway to staying connected with the Stay Out for Good ministry. Monthly updates, transformation stories, upcoming events, and opportunities to make a difference — delivered right to your inbox." breadcrumb="Newsletter" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">What to Expect</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>More Than a Newsletter.<br /><em className="not-italic text-gold">A Community.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">By subscribing, you become part of a growing community of supporters, returning citizens, church partners, and ministry leaders — all united around one mission: helping people Stay Out For Good.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8]">Whether you&apos;re looking to get involved, stay inspired, or simply keep up with our journey — our newsletter is designed to keep you engaged, informed, and uplifted every month.</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {expects.map((e) => (
              <div key={e.title} className="bg-cream p-7">
                <span className="block text-2xl mb-3">{e.icon}</span>
                <h4 className="font-semibold text-navy text-[0.95rem] mb-2">{e.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <div>
            <span className="section-label">Subscribe Today</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Join Our Growing <em className="not-italic text-gold">Community.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Fill out the form to subscribe and join thousands of supporters, partners, and returning citizens staying connected to the Stay Out for Good mission.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-8">We respect your privacy. You can unsubscribe at any time.</p>
            <div className="flex flex-col gap-3">
              {["Published monthly", "No spam, ever", "Unsubscribe anytime", "Free to join"].map((item) => (
                <div key={item} className="flex gap-3 items-center text-sm text-gray-600"><span className="text-gold font-bold text-base">→</span>{item}</div>
              ))}
            </div>
          </div>
          <div className="bg-navy rounded-xl p-10">
            <span className="section-label" style={{ color: "#e8b86d" }}>Stay in the Know</span>
            <h3 className="font-serif font-bold text-white text-[1.6rem] leading-tight mb-2">Sign Up for Updates & Inspiration.</h3>
            <p className="text-sm text-white/50 mb-8">Complete the form below to receive our monthly newsletter.</p>
            <div className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1"><label className="form-label">First Name *</label><input className="form-input" type="text" placeholder="Jane" /></div>
                <div className="flex flex-col gap-1"><label className="form-label">Last Name *</label><input className="form-input" type="text" placeholder="Smith" /></div>
              </div>
              <div className="flex flex-col gap-1"><label className="form-label">Email Address *</label><input className="form-input" type="email" placeholder="jane@example.com" /></div>
              <div className="flex flex-col gap-1"><label className="form-label">Phone Number</label><input className="form-input" type="tel" placeholder="(601) 555-0100" /></div>
              <label className="flex gap-2.5 items-start cursor-pointer">
                <input type="checkbox" className="mt-1 flex-shrink-0 accent-gold" />
                <span className="text-[0.8rem] text-white/50 leading-relaxed">I agree to receive text/SMS messages from Stay Out For Good. Reply STOP to unsubscribe.</span>
              </label>
              <label className="flex gap-2.5 items-start cursor-pointer">
                <input type="checkbox" className="mt-1 flex-shrink-0 accent-gold" />
                <span className="text-[0.8rem] text-white/50 leading-relaxed">I agree to receive automated voice messages. Dial 1 to stop receiving calls.</span>
              </label>
              <SubmitButton label="Subscribe to the Newsletter →" successLabel="✓ You're Subscribed!" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24 border-t border-navy/12">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-[500px] mb-12">
            <span className="section-label">Recent Issues</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>What We&apos;ve <em className="not-italic text-gold">Been Sharing.</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {[
              { title: "First Edition: Welcome to the Community", desc: "Our inaugural newsletter introducing the Stay Out For Good mission, our team, and the stories that will define this community." },
              { title: "Faith in Action: Church Partners Making a Difference", desc: "Spotlighting churches across the country who are launching re-entry ministries and transforming their communities through faith." },
              { title: "Graduation Season: Celebrating Our First Graduates", desc: "A special issue celebrating graduates of our 16-week re-entry course and the journeys that brought them to this milestone." },
            ].map((issue) => (
              <div key={issue.title} className="bg-cream p-8">
                <span className="block text-[0.7rem] font-bold tracking-[0.15em] uppercase text-gold mb-2">Coming Soon · 2025</span>
                <h3 className="font-serif font-bold text-navy text-[1rem] mb-2">{issue.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{issue.desc}</p>
                <span className="inline-block bg-gold/12 text-gold text-[0.68rem] font-bold px-2.5 py-1 rounded tracking-wide">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip title="Questions About the Newsletter?" subtitle="Reach out and we'd be happy to help." />
    </>
  );
}
