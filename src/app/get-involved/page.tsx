import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";
import SubmitButton from "@/components/ui/SubmitButton";

export const metadata: Metadata = { title: "Get Involved", description: "Volunteer, donate, share your story, and join our online re-entry community." };

const ways = [
  { icon: "🙋", title: "Volunteer Your Time", desc: "Discover volunteer roles that match your skills — from mentoring individuals and facilitating life groups to helping at events and supporting church ministries. Your time can truly change a life.", cta: "Sign Up to Volunteer", href: "/contact" },
  { icon: "💛", title: "Support Our Cause", desc: "Your generous donations help us provide essential resources and programs for re-entry individuals. Every contribution — big or small — creates lasting change and empowers returning citizens to rebuild with dignity.", cta: "Make a Donation", href: "/donate" },
  { icon: "🤝", title: "Partner with Us", desc: "Organizations, churches, and businesses can partner with Stay Out For Good to extend our reach, share resources, and create a stronger network of support for returning citizens in your community.", cta: "Explore Partnership", href: "/partnership" },
  { icon: "📅", title: "Join Our Events", desc: "Participate in upcoming events to connect with the community and support our mission. Graduations, workshops, outreach days, and community gatherings are all opportunities to show up and make a difference.", cta: "See Events", href: "/contact" },
  { icon: "📣", title: "Spread the Word", desc: "Share our mission with your church, social network, and community. Sometimes the most powerful thing you can do is tell someone about a resource that could change their life — or the life of someone they love.", cta: "Subscribe & Share", href: "/newsletter" },
  { icon: "✍️", title: "Share Your Story", desc: "Have a story of transformation or support? Your experience can inspire others and spread hope across the community. We'd love to hear from you and share your journey with others walking a similar path.", cta: "Share Your Story", href: "#story-form" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero eyebrow="Join the Movement" h1="Be the Change" em="You Want to See." sub="Whether you're looking to volunteer, donate, share your story, or join our online community — there are many meaningful ways to support individuals re-entering society and help us build a brighter future together." breadcrumb="Get Involved" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[580px] mx-auto mb-14">
            <span className="section-label">How to Get Involved</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Many Ways to Make <em className="not-italic text-gold">a Real Difference.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {ways.map((w) => (
              <div key={w.title} className="bg-cream p-10 flex flex-col">
                <span className="block text-[2rem] mb-5">{w.icon}</span>
                <h3 className="font-serif font-bold text-navy text-xl mb-3">{w.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">{w.desc}</p>
                <Link href={w.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors no-underline group">
                  {w.cta} <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label" style={{ color: "#e8b86d" }}>Online Reentry Community</span>
            <h2 className="font-serif font-bold text-white leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Join Our Online <em className="not-italic text-gold-light">Community.</em></h2>
            <p className="text-[1rem] text-white/60 leading-[1.8] mb-4">Whether you&apos;re a returning citizen, a supporter, or a ministry partner — our online re-entry community is a place to connect, encourage one another, and grow together in faith and purpose.</p>
            <p className="text-[1rem] text-white/60 leading-[1.8] mb-8">Access virtual life groups, join discussions, find resources, and be part of a network of people all committed to one thing: staying out for good.</p>
            <Link href="/contact" className="btn-primary">Join the Community →</Link>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: "💻", title: "Weekly Online Life Groups", desc: "Join a virtual life group meeting each week — Christ-centered discussions, mentorship, and peer community from wherever you are." },
              { icon: "🙏", title: "Prayer & Encouragement", desc: "Receive and offer prayer, encouragement, and spiritual support within a community that truly understands your journey." },
              { icon: "📚", title: "Resources & Devotionals", desc: "Access faith-based materials, devotionals, and re-entry resources curated to support your growth and daily walk with God." },
              { icon: "🌐", title: "National Network", desc: "Connect with returning citizens, mentors, churches, and ministry partners from across the country." },
            ].map((c) => (
              <div key={c.title} className="dark-card flex gap-4 items-start">
                <div className="w-10 h-10 flex-shrink-0 rounded-md bg-gold/12 flex items-center justify-center text-lg">{c.icon}</div>
                <div><h4 className="font-semibold text-white text-[0.95rem] mb-1">{c.title}</h4><p className="text-sm text-white/50 leading-relaxed">{c.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24" id="story-form">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">Your Story Matters</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Inspire Others with <em className="not-italic text-gold">Your Journey.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Have a story of transformation or support? Your experience can be a powerful tool for change — inspiring others who are walking a similar path and showing the community what is possible through faith and perseverance.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8]">We&apos;d love to share your story through our blog, newsletter, and events. Fill out the form and a member of our team will reach out to connect with you.</p>
          </div>
          <div className="bg-cream-warm border border-navy/12 rounded-xl p-10">
            <span className="section-label">Share Your Story</span>
            <h3 className="font-serif font-bold text-navy text-[1.5rem] leading-tight mb-2">Tell Us Your Story.</h3>
            <p className="text-sm text-gray-500 mb-8">We&apos;d love to hear from you — your journey of transformation and faith.</p>
            <div className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1"><label className="form-label-light">First Name *</label><input className="form-input-light" type="text" placeholder="Jane" /></div>
                <div className="flex flex-col gap-1"><label className="form-label-light">Last Name *</label><input className="form-input-light" type="text" placeholder="Smith" /></div>
              </div>
              <div className="flex flex-col gap-1"><label className="form-label-light">Email *</label><input className="form-input-light" type="email" placeholder="jane@example.com" /></div>
              <div className="flex flex-col gap-1"><label className="form-label-light">Phone</label><input className="form-input-light" type="tel" placeholder="(601) 555-0100" /></div>
              <div className="flex flex-col gap-1"><label className="form-label-light">Your Story *</label><textarea className="form-input-light min-h-[130px] resize-y" placeholder="Share your story of transformation, hope, or how Stay Out For Good has impacted your life..." /></div>
              <SubmitButton label="Submit My Story →" successLabel="✓ Thank you! We'll be in touch." />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24 border-t border-navy/12">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="section-label text-center block">Ready to Begin?</span>
          <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Join Us in Our <em className="not-italic text-gold">Mission Today.</em></h2>
          <p className="text-[1rem] text-gray-600 leading-[1.75] mb-10 max-w-[500px] mx-auto">Whether through volunteering, donating, or participating in our community — your support is invaluable. Let&apos;s make a difference together.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/donate" className="btn-primary">Make a Donation →</Link>
            <Link href="/contact" className="btn-outline-navy">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactStrip title="Let's Connect." subtitle="Have questions about getting involved? We'd love to hear from you." />
    </>
  );
}
