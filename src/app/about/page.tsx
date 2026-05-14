import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";

export const metadata: Metadata = { title: "About Us", description: "Learn about Stay Out For Good and the Leland Family Ministries mission to transform lives through faith-based re-entry ministry." };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" h1="Our Story, Our" em="Mission & Heart." sub="Stay Out For Good is a national re-entry ministry of Leland Family Ministries — founded on the belief that every person deserves a second chance, and that faith and community are the most powerful catalysts for lasting transformation." breadcrumb="About Us" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">Who We Are</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Faith-Driven.<br /><em className="not-italic text-gold">Community-Rooted.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Stay Out For Good is Leland Family Ministries&apos; national re-entry initiative — a faith-based program dedicated to empowering individuals transitioning from incarceration back into society.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Grounded in the belief that everyone deserves a second chance, we equip returning citizens with essential skills, resources, and spiritual guidance to rebuild their lives with dignity and purpose.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8]">Through structured courses, life skills training, and spiritual mentorship, we foster personal growth, strengthen family bonds, and encourage meaningful community engagement — reducing recidivism and inspiring lasting change across the country.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-navy rounded-xl p-8">
              <span className="block text-[0.68rem] font-bold tracking-[0.2em] uppercase text-gold-light mb-3">Mission Statement</span>
              <p className="text-sm text-white/75 leading-relaxed">At Stay Out For Good Reentry Ministries, our mission is to transform lives by strengthening the bonds between individuals, their families, communities, and God — creating a supportive environment where those transitioning from incarceration can rediscover their purpose and build a brighter future.</p>
            </div>
            <div className="bg-gold/8 border border-gold/25 rounded-xl p-8">
              <span className="block text-[0.68rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Our Vision</span>
              <p className="text-sm text-gray-600 leading-relaxed">A nation where every returning citizen has the faith-based support, practical resources, and loving community they need to stay out for good — and become pillars of hope in their families and neighborhoods.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <span className="section-label">Our Core Values</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>What We <em className="not-italic text-gold">Stand For.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {[
              { icon: "✝️", title: "Faith-First", desc: "We believe lasting transformation begins with a personal relationship with God. Every program, resource, and community we build is rooted in the Word and guided by the Spirit." },
              { icon: "🤝", title: "Community", desc: "No one walks this journey alone. We are committed to building genuine, supportive community around every returning citizen — through life groups, mentorship, and church partnerships." },
              { icon: "🕊", title: "Second Chances", desc: "Every person has inherent worth and the capacity for change. We stand firmly in the belief that every life deserves a second chance, and we work to make that possible." },
              { icon: "💪", title: "Empowerment", desc: "We don't just offer support — we equip. Through practical life skills, biblical wisdom, and ongoing guidance, we empower individuals to build self-sufficient, purpose-driven lives." },
              { icon: "❤️", title: "Compassion", desc: "We lead with love, grace, and dignity. Every interaction reflects our commitment to treating each person with the compassion and respect they deserve as a child of God." },
              { icon: "🌱", title: "Transformation", desc: "We believe deep, lasting change is possible. Our programs are designed not just to address immediate needs but to cultivate lifelong transformation in the whole person — spirit, mind, and body." },
            ].map((v) => (
              <div key={v.title} className="bg-cream-warm p-8">
                <span className="block text-2xl mb-4">{v.icon}</span>
                <h3 className="font-serif font-bold text-navy text-[1.05rem] mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24 flex items-center justify-center border-t border-navy/12">
        <div className="max-w-[820px] text-center">
          <span className="block font-serif text-[6rem] leading-[0.5] text-gold opacity-40 mb-4">&ldquo;</span>
          <blockquote className="font-serif text-navy italic leading-relaxed mb-8 m-0" style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.8rem)" }}>
            We believe in second chances, restored lives, and the power of faith to transform not just individuals — but entire communities.
          </blockquote>
          <p className="text-sm font-semibold tracking-[0.12em] uppercase text-gray-400">
            <strong className="block text-gold mb-1">Leland Family Ministries</strong>
            The Heart Behind Stay Out for Good
          </p>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24 border-t border-navy/12">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="section-label text-center block">Get Involved</span>
          <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>Ready to Join the <em className="not-italic text-gold">Mission?</em></h2>
          <p className="text-[1rem] text-gray-600 leading-[1.75] mb-10 max-w-[520px] mx-auto">Whether you&apos;re a returning citizen, a church, a jail and prison ministry, or a supporter — there&apos;s a place for you in the Stay Out For Good family.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/#audience" className="btn-primary">Find Your Path →</Link>
            <Link href="/contact" className="btn-outline-navy">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
