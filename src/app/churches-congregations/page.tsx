import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";

export const metadata: Metadata = { title: "For Churches & Congregations", description: "Equip your church to launch a faith-based re-entry ministry with Stay Out For Good." };

const phases = [
  { n: "01", weeks: "Weeks 1–4", title: "Relationship Basics", items: ["Build a personal relationship with God", "Identify mentors and build friendships", "Navigate romantic relationships wisely", "Establish a supportive network"] },
  { n: "02", weeks: "Weeks 5–8", title: "Spiritual Growth", items: ["Develop personal devotion habits", "Engage in local church involvement", "Build spiritual accountability", "Strengthen faith as a guiding force"] },
  { n: "03", weeks: "Weeks 9–12", title: "Life Skills", items: ["Time management & financial literacy", "Employment preparation", "Home buying fundamentals", "Biblical framework for daily life"] },
  { n: "04", weeks: "Weeks 13–16", title: "Lasting Impact", items: ["Leave a personal legacy", "Overcome setbacks with resilience", "Give back to the community", "Cross the finish line — Graduation"] },
];

const offerings = [
  { icon: "🎓", title: "Unlimited Ministry Coaching", desc: "Professional coaching equipping leaders with strategies and insights to foster successful, impactful ministry outcomes." },
  { icon: "🔄", title: "Ongoing Training", desc: "Continuous training sessions keeping your ministry at the forefront with the latest tools and best practices." },
  { icon: "🏛", title: "Advisory Board Membership", desc: "Partner churches may join the Reentry Advisory Board — contributing to ministry direction and strategy." },
  { icon: "📋", title: "Course Guides", desc: "Detailed guides give church leaders a clear, structured roadmap including lesson plans and discussion prompts." },
  { icon: "📄", title: "Participant Handouts", desc: "Practical, easy-to-use handouts complement the course content — reinforcing learning with insights and exercises." },
  { icon: "📢", title: "Marketing Resources", desc: "Flyers, social media templates, and promotional materials to raise awareness and attract participants." },
];

export default function ChurchesPage() {
  return (
    <>
      <PageHero eyebrow="For Your Church" h1="Be a Beacon of" em="Hope & Renewal." sub="Churches play a pivotal role in the re-entry journey — serving as places of acceptance, encouragement, and transformation. Stay Out for Good equips your congregation with everything needed to launch and sustain a life-changing re-entry ministry." breadcrumb="Churches & Congregations" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Our Foundation</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Faith, Community,<br /><em className="not-italic text-gold">Second Chances.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Stay Out For Good Reentry Ministries is a faith-based program dedicated to empowering individuals transitioning from incarceration. Grounded in the belief that everyone deserves a second chance, we equip individuals with essential skills, resources, and spiritual guidance.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8]">Through structured courses, life skills training, and spiritual mentorship, we foster personal growth, strengthen family bonds, and encourage meaningful community engagement. Churches are the backbone of this mission — and we&apos;re here to support yours every step of the way.</p>
          </div>
          <div className="bg-navy rounded-xl p-10">
            <span className="block text-[0.68rem] font-bold tracking-[0.2em] uppercase text-gold-light mb-4">Mission Statement</span>
            <h3 className="font-serif font-bold text-white text-xl mb-4 leading-snug">Transforming Lives. Strengthening Communities.</h3>
            <p className="text-sm text-white/65 leading-relaxed mb-4">At Stay Out For Good, our mission is to transform lives by strengthening the bonds between individuals, their families, communities, and God.</p>
            <p className="text-sm text-white/65 leading-relaxed">We are committed to creating a supportive environment where individuals transitioning from incarceration can rediscover their purpose and build a brighter future — reducing recidivism and inspiring lasting change.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[580px] mx-auto mb-14">
            <span className="section-label">The Re-Entry Course</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>A 16-Week Journey Through <em className="not-italic text-gold">Four Phases.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {phases.map((p) => (
              <div key={p.n} className="bg-cream-warm p-8">
                <span className="block font-serif text-[3rem] font-black text-gold/18 leading-none mb-1">{p.n}</span>
                <span className="block text-[0.68rem] font-bold tracking-[0.15em] uppercase text-gold mb-2">{p.weeks}</span>
                <h3 className="font-serif font-bold text-navy text-lg mb-4">{p.title}</h3>
                <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
                  {p.items.map((item) => <li key={item} className="text-sm text-gray-600 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-gold before:font-bold leading-snug">{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label" style={{ color: "#e8b86d" }}>After the Course</span>
            <h2 className="font-serif font-bold text-white leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Weekly Re-Entry <em className="not-italic text-gold-light">Life Groups.</em></h2>
            <p className="text-[1rem] text-white/60 leading-[1.8] mb-4">After completing the 16-week course, participants are invited to join ongoing, Christ-centered weekly life groups — meeting throughout the year to provide mentorship, discipleship, and a safe community space.</p>
            <p className="text-[1rem] text-white/60 leading-[1.8] mb-8">Each week, the group dives into God&apos;s Word, applying scriptural principles to the real challenges of daily life after incarceration — fostering lasting spiritual growth and personal transformation.</p>
            <Link href="/contact" className="btn-primary">Partner with Us →</Link>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: "📖", title: "Biblical Teaching", desc: "Scripture-rooted discussions applying God's Word to everyday life after incarceration." },
              { icon: "🤝", title: "Peer Support", desc: "Building trust and genuine community through shared experiences and mutual encouragement." },
              { icon: "🙏", title: "Mentorship & Prayer", desc: "Spiritual guidance, intercession, and dedicated mentors committed to walking alongside each participant." },
              { icon: "🌱", title: "Continued Discipleship", desc: "Developing integrity, accountability, and healthy habits that sustain long-term transformation." },
            ].map((el) => (
              <div key={el.title} className="dark-card flex gap-4 items-start">
                <div className="w-10 h-10 flex-shrink-0 rounded-md bg-gold/12 flex items-center justify-center text-lg">{el.icon}</div>
                <div><h4 className="font-semibold text-white text-[0.95rem] mb-1">{el.title}</h4><p className="text-sm text-white/50 leading-relaxed">{el.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-[560px] mb-12">
            <span className="section-label">What We Provide</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Everything Your Church <em className="not-italic text-gold">Needs to Succeed.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {offerings.map((o) => (
              <div key={o.title} className="bg-cream p-8">
                <span className="block text-2xl mb-4">{o.icon}</span>
                <h3 className="font-serif font-bold text-navy text-[1rem] mb-2">{o.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24 border-t border-navy/12">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="section-label text-center block">Ready to Begin?</span>
          <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Start Your Church&apos;s <em className="not-italic text-gold">Re-Entry Ministry Today.</em></h2>
          <p className="text-[1rem] text-gray-600 leading-[1.75] mb-10 max-w-[520px] mx-auto">Join a growing network of faith-driven churches transforming communities across the country. Let us work hand in hand to ensure every person has the opportunity to thrive.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Contact Us to Get Started →</Link>
            <Link href="/partnership" className="btn-outline-navy">Explore Partnership</Link>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
