import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";

export const metadata: Metadata = { title: "Jail & Prison Ministry", description: "Extend your jail and prison ministry beyond the walls with Stay Out For Good's proven re-entry framework." };

export default function JailPrisonPage() {
  return (
    <>
      <PageHero eyebrow="Beyond the Walls" h1="Build a Bridge to" em="Lasting Transformation." sub="Whether your ministry serves inside correctional facilities or walks alongside returning citizens in the community, Stay Out For Good offers a powerful, proven path forward — with the structure, support, and spiritual resources to make your impact last." breadcrumb="Jail & Prison Ministry" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">A Flexible Framework</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Inside the Walls.<br /><em className="not-italic text-gold">Beyond the Walls.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Jail and prison ministries may start this program inside correctional facilities or outside in their local community — depending on reach and access. Either way, we provide the complete structure, curriculum, and ongoing support to make your ministry effective and lasting.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-8">The program unfolds in two powerful phases: a 16-week foundational re-entry course, followed by year-round weekly life groups that sustain spiritual growth long after graduation.</p>
            <Link href="/contact" className="btn-primary">Get Started Today →</Link>
          </div>
          <div className="grid grid-cols-2 gap-px bg-navy/12 border border-navy/12 rounded-lg overflow-hidden">
            {[{ v: "16", s: "wk", l: "Faith-based re-entry course" }, { v: "52", s: "wk", l: "Year-round life group support" }, { v: "2", s: " modes", l: "In-facility or community-based" }, { v: "∞", s: "", l: "Coaching & ongoing support" }].map((s) => (
              <div key={s.l} className="stat-cell">
                <span className="block font-serif text-[2.75rem] font-black text-navy leading-none">{s.v}<span className="text-gold">{s.s}</span></span>
                <span className="block text-[0.8rem] text-gray-500 mt-1">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <span className="section-label">Two Phases</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>A Complete Re-Entry <em className="not-italic text-gold">System.</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-navy rounded-xl p-10">
              <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-gold-light mb-2">Phase One</span>
              <h3 className="font-serif font-bold text-white text-xl leading-snug mb-3">The Re-Entry Course</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">A 16-week, faith-based course offering practical biblical guidance, life skills, and spiritual encouragement — whether taught inside a facility or in a community setting.</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {["Biblical framework for rebuilding life after incarceration", "Four structured phases covering relationships, spirituality, life skills, and legacy", "Builds lifelong spiritual habits rooted in the Word", "Supports healthy relationships and accountability networks", "Leads seamlessly into Phase Two — Life Groups"].map((item) => (
                  <li key={item} className="text-sm text-white/60 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-gold before:font-bold leading-snug">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gold/8 border border-gold/25 rounded-xl p-10">
              <span className="block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-gold mb-2">Phase Two</span>
              <h3 className="font-serif font-bold text-navy text-xl leading-snug mb-3">Re-Entry Life Groups</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">After completing the course, participants join ongoing weekly life groups — Christ-centered support communities designed to sustain transformation all year long.</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {["In-person groups led by local ministry leaders", "Online option for those without a local group", "Follows the Stay Out For Good Life Group Curriculum", "A safe, loving space for continued spiritual growth", "Brings hope and consistency long after the course ends"].map((item) => (
                  <li key={item} className="text-sm text-gray-600 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-gold before:font-bold leading-snug">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-[500px] mb-12">
            <span className="section-label">Course Outline</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>16 Weeks. Four <em className="not-italic text-gold">Transformative Phases.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/12 border border-navy/12 rounded-t-xl overflow-hidden">
            {[
              { w: "Weeks 1–4", t: "Relationship Basics", items: ["Get Right with God", "Find a Mentor", "Make Some Friends", "Beware of Romantic Relationships"] },
              { w: "Weeks 5–8", t: "Spiritual Growth", items: ["Take It Slow", "Join a Good Church", "Acquire Accountability", "Do Your Devotions"] },
              { w: "Weeks 9–12", t: "Life Skills", items: ["Get a Job", "Buy a House", "Have Some Fun"] },
              { w: "Weeks 13–15", t: "Becoming a Pillar", items: ["When You Fall, Get Back Up", "Give Back", "Finish Strong"] },
            ].map((p) => (
              <div key={p.t} className="bg-cream p-8">
                <span className="block text-[0.68rem] font-bold tracking-[0.15em] uppercase text-gold mb-2">{p.w}</span>
                <h3 className="font-serif font-bold text-navy text-lg mb-4">{p.t}</h3>
                <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
                  {p.items.map((item) => <li key={item} className="text-sm text-gray-600 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-gold before:font-bold leading-snug">{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-navy rounded-b-xl px-10 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 flex-wrap">
            <div>
              <h4 className="font-serif font-bold text-white text-xl mb-1">Week 16: Graduation 🎓</h4>
              <p className="text-sm text-white/55">Celebrate the journey and launch into life with courage, community, and Christ.</p>
            </div>
            <Link href="/contact" className="btn-primary flex-shrink-0">Start This Ministry →</Link>
          </div>
        </div>
      </section>

      <section className="bg-navy px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label" style={{ color: "#e8b86d" }}>What We Provide</span>
            <h2 className="font-serif font-bold text-white leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Everything You Need <em className="not-italic text-gold-light">to Begin.</em></h2>
            <p className="text-[1rem] text-white/60 leading-[1.8] mb-4">Stay Out For Good equips your ministry with the full toolkit — curriculum, training, outreach resources, and ongoing coaching.</p>
            <p className="text-[1rem] text-white/60 leading-[1.8] mb-8">Our program helps you extend your care beyond the walls — into real, lasting discipleship that follows people through the hardest chapter of their lives.</p>
            <Link href="/contact" className="btn-primary">Contact Us to Learn More →</Link>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: "📚", title: "Re-Entry Course Curriculum", desc: "Complete 16-week curriculum with detailed teaching guides for every session." },
              { icon: "👥", title: "Life Group Curriculum & Facilitator Support", desc: "Full Life Group curriculum with a Leader Guide — perfect for ministry leaders and volunteers." },
              { icon: "🎓", title: "Leader Training & Ongoing Coaching", desc: "Comprehensive training plus continuous coaching to keep your ministry equipped and effective." },
              { icon: "📢", title: "Outreach Materials", desc: "Ready-to-use marketing resources to help you reach returning citizens and their families." },
              { icon: "🌐", title: "Online Group Platform Access", desc: "Access to our online platform for hosting and managing virtual life groups." },
            ].map((r) => (
              <div key={r.title} className="dark-card flex gap-4 items-start">
                <div className="w-10 h-10 flex-shrink-0 rounded-md bg-gold/12 flex items-center justify-center text-lg">{r.icon}</div>
                <div><h4 className="font-semibold text-white text-[0.95rem] mb-1">{r.title}</h4><p className="text-sm text-white/50 leading-relaxed">{r.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24 text-center border-t border-navy/12">
        <div className="max-w-[720px] mx-auto">
          <span className="block font-serif text-[6rem] leading-[0.5] text-gold opacity-30 mb-4">&ldquo;</span>
          <blockquote className="font-serif text-navy italic leading-relaxed mb-5 m-0" style={{ fontSize: "clamp(1.25rem,2.5vw,1.65rem)" }}>You will be like a well-watered garden, like a spring whose waters never fail.</blockquote>
          <p className="text-sm font-semibold tracking-[0.1em] uppercase text-gold">Isaiah 58:11</p>
        </div>
      </section>

      <section className="bg-navy px-[8%] py-24">
        <div className="max-w-[760px] mx-auto text-center">
          <span className="section-label text-center block" style={{ color: "#e8b86d" }}>Ready to Get Started?</span>
          <h2 className="font-serif font-bold text-white leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Let&apos;s Build a Ministry That <em className="not-italic text-gold-light">Sets People Free.</em></h2>
          <p className="text-[1rem] text-white/60 leading-[1.75] mb-10 max-w-[520px] mx-auto">You can begin your Stay Out For Good Re-Entry Ministry today. Contact us to learn more, ask questions, and explore how this fits your ministry&apos;s unique mission.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Contact Us Today →</Link>
            <Link href="/#audience" className="btn-outline-white">Explore All Ministries</Link>
          </div>
        </div>
      </section>

      <ContactStrip dark={false} title="Questions? We're Here." subtitle="Reach out — we'd love to help you explore how Stay Out For Good fits your ministry." />
    </>
  );
}
