import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";

export const metadata: Metadata = {
  title: "For Returning Citizens",
  description: "Support for returning citizens — 15-week faith-based re-entry course, online and in-person, plus year-round life groups.",
};

export default function ReturningCitizensPage() {
  return (
    <>
      <PageHero eyebrow="For You" h1="Welcome to Your" em="New Beginning." sub="You are not alone on this journey. Stay Out for Good walks alongside you as you rebuild your life with faith, community, practical tools, and people who genuinely believe in your potential." breadcrumb="Returning Citizens" />

      {/* WELCOME */}
      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">You Belong Here</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>A Community That <em className="not-italic text-gold">Believes in You.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Transitioning back into society is one of life&apos;s most challenging journeys — and you shouldn&apos;t have to do it alone. At Stay Out for Good, we offer resources, guidance, and a community committed to walking with you through every step.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">From re-entry courses and weekly life groups to personal sponsorship and local resource connections, we are here to empower you toward a fulfilling, successful, and purpose-driven life.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8]">Thank you for allowing us to be part of your story. We cannot wait to see the incredible impact you&apos;ll make.</p>
          </div>
          <div className="bg-navy rounded-xl p-10">
            <span className="block text-[0.68rem] font-bold tracking-[0.2em] uppercase text-gold-light mb-4">Our Promise to You</span>
            <p className="font-serif italic text-white/88 leading-relaxed text-[1.05rem] mb-6">&ldquo;We believe in your potential and are excited to see the incredible impact you will make in the world. Welcome to your new beginning.&rdquo;</p>
            <span className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-gold-light">Stay Out for Good · Leland Family Ministries</span>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="bg-cream px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <span className="section-label">Re-Entry Courses</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>A 15-Week Journey <em className="not-italic text-gold">Designed For You.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.7]">Choose the format that works for your life — online from anywhere, or in person through a local church or ministry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {[
              {
                badge: "📱 Online Course", title: "Online 15-Week Journey",
                desc: "Participate from anywhere using your phone or tablet — no transportation needed.",
                details: [["Duration", "15 Weeks"], ["When", "Every Tuesday at 7 PM Eastern"], ["Format", "Online via Zoom"], ["Family", "Family members welcome"]],
                items: ["Study from home — no transportation required", "Engage through your phone or mobile device", "Strengthen relationships with God, mentors, and loved ones", "Gain practical skills in employment, housing, and biblical living", "Discover your purpose and leave a lasting legacy"],
              },
              {
                badge: "⛪ Local Community Course", title: "In-Person Community Course",
                desc: "Experience the transformative re-entry course in person through local churches and jail and prison ministries.",
                details: [["Duration", "15 Weeks"], ["Location", "Local churches & ministries"], ["Format", "In-person, community-based"], ["Family", "Family members welcome"]],
                items: ["Face-to-face connection with peers and mentors", "Offered through local churches and correctional ministry partners", "Same proven curriculum and faith-based framework", "Build real, lasting relationships with people near you", "After registration we'll send course details and start dates"],
              },
            ].map((course) => (
              <div key={course.title} className="bg-cream-warm p-10">
                <span className="inline-flex items-center gap-1.5 bg-gold/12 text-gold text-[0.7rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded mb-5">{course.badge}</span>
                <h3 className="font-serif font-bold text-navy text-[1.4rem] mb-3 leading-snug">Stay Out for Good:<br />{course.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{course.desc}</p>
                <div className="bg-navy/4 border-l-[3px] border-gold rounded-r px-5 py-4 flex flex-col gap-2 mb-6">
                  {course.details.map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-sm text-gray-600"><strong className="text-navy min-w-[90px]">{k}:</strong>{v}</div>
                  ))}
                </div>
                <ul className="list-none m-0 p-0 flex flex-col gap-2.5 mb-8">
                  {course.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-gold before:font-bold">{item}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary">Register →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE GROUPS */}
      <section className="bg-navy px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-[560px] mb-14">
            <span className="section-label" style={{ color: "#e8b86d" }}>After You Graduate</span>
            <h2 className="font-serif font-bold text-white leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Weekly Re-Entry <em className="not-italic text-gold-light">Life Groups.</em></h2>
            <p className="text-[1rem] text-white/60 leading-[1.8]">After completing the 15-week course, graduates are invited into a year-long journey of continued growth, mentorship, and community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: "💻", tag: "Online", title: "Weekly Online Life Group", desc: "Meet weekly throughout the year via Zoom. A nurturing environment for continued growth in Christ." },
              { icon: "🏘", tag: "In Your Community", title: "Local Weekly Life Group", desc: "Meet in person with others in your community on a similar journey. Share experiences and grow together in faith." },
              { icon: "📍", tag: "Find Your Group", title: "Search Groups Near You", desc: "Use our easy search to find a local re-entry life group by city or zip code." },
            ].map((g) => (
              <Link key={g.title} href="/contact" className="dark-card no-underline block">
                <span className="block text-[1.75rem] mb-5">{g.icon}</span>
                <div className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-gold-light mb-2">{g.tag}</div>
                <h3 className="font-serif font-bold text-white text-xl mb-3 leading-snug">{g.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-5">{g.desc}</p>
                <span className="text-sm font-semibold text-gold-light">Join → </span>
              </Link>
            ))}
          </div>
          <div className="bg-gold/10 border border-gold/25 rounded-lg px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-wrap">
            <div className="flex-1">
              <h4 className="font-serif font-bold text-white text-xl mb-1">Find a Group Near You</h4>
              <p className="text-sm text-white/55">Enter your city or zip code to discover local re-entry life groups.</p>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              <input type="text" placeholder="City or Zip Code" className="form-input w-52" />
              <Link href="/contact" className="btn-primary">Search →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">Additional Support</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Every Resource You <em className="not-italic text-gold">Need to Succeed.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Re-integration is complex. Beyond our courses and life groups, we offer hands-on support to connect you with local resources, personal sponsors, and spiritual guidance.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8]">Don&apos;t know where to start? That&apos;s okay. Reach out and we&apos;ll figure it out together.</p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: "🗺", title: "Local Resource Assistance", desc: "We'll help you find housing, employment, and support services available in your community." },
              { icon: "🤝", title: "Re-Entry Sponsor", desc: "Connect with a sponsor who will pray for you, encourage you, and help you stay on track throughout the week." },
              { icon: "🌐", title: "Community Connections", desc: "Join local and online groups to connect with others who understand your journey and build lasting relationships." },
              { icon: "✝️", title: "Spiritual Guidance", desc: "Access mentorship and spiritual resources to grow in your faith and navigate the path ahead with confidence." },
            ].map((r) => (
              <div key={r.title} className="resource-card">
                <div className="resource-icon">{r.icon}</div>
                <div><h4 className="font-semibold text-navy text-[0.95rem] mb-1">{r.title}</h4><p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-[8%] py-24 border-t border-navy/12">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="section-label text-center block">Take the First Step</span>
          <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Ready to Start Your <em className="not-italic text-gold">Journey Today?</em></h2>
          <p className="text-[1rem] text-gray-600 leading-[1.75] mb-10 max-w-[520px] mx-auto">Whether you&apos;re looking to grow spiritually, strengthen relationships, or build essential life skills — we&apos;re here every step of the way.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Enroll in a Course →</Link>
            <Link href="/contact" className="btn-outline-navy">Join a Life Group</Link>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
