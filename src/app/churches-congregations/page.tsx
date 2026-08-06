import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";

export const metadata: Metadata = { title: "For Churches & Congregations", description: "Start a Stay Out For Good reentry ministry at your church with training, curriculum, and ongoing support." };

export default function ChurchesPage() {
  return (
    <>
      <PageHero eyebrow="For Your Church" h1="Start a Stay Out For Good™" em="Reentry Ministry at Your Church." sub="The Church has a powerful role to play in reentry. Many men and women leave incarceration wanting a new life, but they need more than good intentions — they need biblical structure, healthy community, and people who will walk alongside them." breadcrumb="Churches & Congregations" />

      <section className="relative h-72 overflow-hidden">
        <Image src="/images/worship.jpg" alt="Church congregation worshipping together" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/55 flex items-center justify-center">
          <p className="font-serif text-white text-2xl italic text-center max-w-xl px-4">&ldquo;The Church is not a museum for good people. It is a hospital for the broken.&rdquo;</p>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">Why Churches</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>The Church Has a <em className="not-italic text-gold">Powerful Role to Play.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Many men and women leave incarceration wanting a new life, but without spiritual support, practical preparation, healthy accountability, mentorship, and community, it can be difficult to stay on the right path.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Stay Out For Good™ trains churches to launch a full reentry ministry pathway — providing structure, compassion, biblical truth, and ongoing support for returning citizens in your community.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8]">You do not need to have all the answers. You need a willing heart, a committed team, and a structure that works. We will train you and walk alongside you every step of the way.</p>
          </div>
          <div className="flex flex-col gap-3">
            {[{ icon:"🎓",title:"Teach the 12-Week Reentry Course",desc:"A Christ-centered course that walks participants through biblical truth, practical reentry preparation, and the 10 Biblical Reentry Steps." },{ icon:"👥",title:"Host Weekly Reentry Life Groups",desc:"Ongoing weekly groups that provide discipleship, step study, prayer, accountability, and community for graduates and returning citizens." },{ icon:"🤝",title:"Train Congregation Members as Mentors",desc:"We provide mentor training and a mentor guide so your congregation can walk one-on-one with returning citizens." },{ icon:"📖",title:"Use Biblical Structure",desc:"Our curriculum gives your ministry a clear, safe, and biblically grounded framework that protects both volunteers and participants." },{ icon:"🌐",title:"Connect to a Broader Network",desc:"Partner churches join a growing national network of reentry ministries equipped and supported by Stay Out For Good™." }].map((r) => (
              <div key={r.title} className="resource-card"><div className="resource-icon">{r.icon}</div><div><h4 className="font-semibold text-navy text-[0.95rem] mb-1">{r.title}</h4><p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <span className="section-label">The Reentry Ministry Model</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>A Complete Ministry <em className="not-italic text-gold">Pathway.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {[
              { n:"01",title:"The 12-Week Course",items:["Biblical truth and practical reentry preparation","Introduction to the 10 Biblical Reentry Steps","Participant stepbooks and facilitator guide","Designed for jails, prisons, churches, and community ministries"] },
              { n:"02",title:"Reentry Life Groups",items:["Weekly Christ-centered life groups after graduation","Deeper step study of the 10 Biblical Reentry Steps","Continued prayer, accountability, and encouragement","Online option available for released participants"] },
              { n:"03",title:"Reentry Mentorship",items:["Trained congregation members serve as mentors","Biblical step-study guide for one-on-one meetings","Consistent, accountable relationship after release","Practical support and spiritual encouragement"] },
              { n:"04",title:"Ongoing Support",items:["Ministry coaching and training for church leaders","Curriculum updates and facilitator resources","Connection to the national Stay Out For Good™ network","Ongoing support as your ministry grows"] },
            ].map((p) => (
              <div key={p.n} className="bg-cream-warm p-8">
                <span className="block font-serif text-[3rem] font-black text-gold/18 leading-none mb-1">{p.n}</span>
                <h3 className="font-serif font-bold text-navy text-lg mb-4">{p.title}</h3>
                <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
                  {p.items.map((item) => <li key={item} className="text-sm text-gray-600 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-gold before:font-bold leading-snug">{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24 border-t border-navy/12">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="section-label text-center block">Ready to Begin?</span>
          <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Start Your Church&apos;s <em className="not-italic text-gold">Reentry Ministry Today.</em></h2>
          <p className="text-[1rem] text-gray-600 leading-[1.75] mb-10 max-w-[520px] mx-auto">Contact us to learn more about launching a Stay Out For Good™ Reentry Ministry at your church. Our team will walk alongside you every step of the way.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Contact Us to Get Started →</Link>
            <Link href="/training" className="btn-outline-navy">Register for Training</Link>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
}
