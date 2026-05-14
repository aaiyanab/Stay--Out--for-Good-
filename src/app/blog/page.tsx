import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Blog", description: "Stories of transformation, re-entry insights, and faith-based encouragement from Stay Out For Good." };

const posts = [
  { icon: "🕊", tag: "Transformation", title: "What Does a Second Chance Really Look Like?", excerpt: "An honest look at the challenges, breakthroughs, and small victories that define life after incarceration — and the faith that makes it possible." },
  { icon: "⛪", tag: "Church Ministry", title: "How One Church Launched a Re-Entry Ministry in 90 Days", excerpt: "A step-by-step story of how a small congregation became a beacon of hope for returning citizens in their community." },
  { icon: "📖", tag: "Faith & Resilience", title: "Five Scriptures That Carry Returning Citizens Through the Hardest Days", excerpt: "These five passages have brought comfort, direction, and renewed purpose to those navigating the most difficult transition of their lives." },
  { icon: "🤝", tag: "Community", title: "The Power of a Life Group: Why You Don't Have to Walk Alone", excerpt: "Graduates of the 16-week course share how weekly life groups have sustained their transformation long after graduation day." },
];

const categories = ["Transformation Stories", "Church Ministry", "Faith & Resilience", "Life Skills", "Community & Connection", "Ministry Updates"];

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Stories & Insights" h1="Stories of Faith," em="Hope & Transformation." sub="Welcome to the Stay Out for Good blog — a community hub where stories of transformation come to life, faith-based encouragement is shared, and the journey of re-entry is explored with honesty and hope." breadcrumb="Blog" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
          <div>
            <div className="bg-navy rounded-xl p-10 text-center mb-3">
              <span className="block text-[3rem] mb-4">✍️</span>
              <h3 className="font-serif font-bold text-white text-2xl mb-3">Articles Coming Soon</h3>
              <p className="text-sm text-white/60 leading-relaxed max-w-[400px] mx-auto mb-8">We&apos;re working on bringing you inspiring stories of transformation, re-entry insights, ministry updates, and faith-based encouragement. Check back soon — great content is on its way.</p>
              <Link href="/newsletter" className="btn-primary">Subscribe to Be Notified →</Link>
            </div>
            <div className="flex flex-col gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
              {posts.map((p) => (
                <div key={p.title} className="bg-cream p-8 flex gap-5 items-start">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg bg-gradient-to-br from-gold/15 to-navy/8 flex items-center justify-center text-[1.75rem]">{p.icon}</div>
                  <div className="flex-1">
                    <span className="block text-[0.68rem] font-bold tracking-[0.15em] uppercase text-gold mb-1">{p.tag}</span>
                    <h3 className="font-serif font-bold text-navy text-lg mb-1 leading-snug">{p.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-2">{p.excerpt}</p>
                    <span className="inline-block bg-gold/12 text-gold text-[0.68rem] font-bold px-2.5 py-1 rounded tracking-wide">Coming Soon</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
            <div className="bg-cream border border-navy/12 rounded-lg p-6">
              <h3 className="font-serif font-bold text-navy text-base mb-4">Search</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Search articles..." className="flex-1 bg-white border border-navy/12 rounded px-3 py-2 text-sm outline-none focus:border-gold transition-colors" />
                <button className="bg-gold text-white px-3 py-2 rounded text-sm font-bold hover:bg-gold-light transition-colors">→</button>
              </div>
            </div>
            <div className="bg-cream border border-navy/12 rounded-lg p-6">
              <h3 className="font-serif font-bold text-navy text-base mb-4">Categories</h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {categories.map((c) => <li key={c}><span className="text-sm text-gray-600 flex items-center gap-2 before:content-['→'] before:text-gold before:font-bold">{c}</span></li>)}
              </ul>
            </div>
            <div className="bg-navy rounded-lg p-6">
              <h4 className="font-serif font-bold text-white text-base mb-2">Stay Informed</h4>
              <p className="text-[0.83rem] text-white/55 leading-relaxed mb-4">Get new articles delivered to your inbox.</p>
              <input type="email" placeholder="Your email address" className="w-full bg-white/8 border border-white/15 rounded px-3 py-2.5 text-white text-sm placeholder-white/30 outline-none focus:border-gold transition-colors mb-2" />
              <button className="w-full bg-gold text-white font-semibold py-2.5 rounded text-sm border-none cursor-pointer transition-colors hover:bg-gold-light">Subscribe →</button>
            </div>
            <div className="bg-cream border border-navy/12 rounded-lg p-6">
              <h3 className="font-serif font-bold text-navy text-base mb-4">Quick Links</h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {[["Returning Citizens", "/returning-citizens"], ["For Churches", "/churches-congregations"], ["Jail & Prison Ministry", "/jail-prison-ministry"], ["Newsletter", "/newsletter"], ["Donate", "/donate"], ["Contact Us", "/contact"]].map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-sm text-gray-600 no-underline hover:text-gold transition-colors flex items-center gap-2 before:content-['→'] before:text-gold before:font-bold">{label}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <div className="bg-navy px-[8%] py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 flex-wrap">
        <div><h3 className="font-serif font-bold text-white text-2xl mb-1">Have a Story to Share?</h3><p className="text-sm text-white/55">We&apos;d love to feature your story of transformation on the blog.</p></div>
        <div className="flex gap-8 flex-wrap">
          <Link href="/get-involved#story-form" className="flex flex-col gap-0.5 no-underline group"><span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-gold">Share</span><strong className="text-white/85 font-medium hover:text-gold-light transition-colors">Your Story →</strong></Link>
          <a href="mailto:info@lelandfamilyministries.com" className="flex flex-col gap-0.5 no-underline group"><span className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-gold">Email Us</span><strong className="text-white/85 font-medium hover:text-gold-light transition-colors">info@lelandfamilyministries.com</strong></a>
        </div>
      </div>
    </>
  );
}
