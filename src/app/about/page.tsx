import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";

export const metadata: Metadata = { title: "About Us", description: "Learn about Stay Out For Good and the Leland Family Ministries mission to transform lives through faith-based reentry ministry." };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" h1="About Stay Out" em="For Good™." sub="A Christ-centered reentry ministry of Leland Family Ministries created to help men and women prepare for life after incarceration and continue receiving support after release." breadcrumb="About Us" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">Who We Are</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Faith-Driven.<br /><em className="not-italic text-gold">Community-Rooted.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Stay Out For Good™ is a Christ-centered reentry ministry of Leland Family Ministries created to help men and women prepare for life after incarceration and continue receiving support after release.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">We believe reentry is not just about getting out of jail or prison. It is about building a new foundation. Many men and women leave incarceration with a desire to change, but without spiritual support, practical preparation, healthy accountability, mentorship, and community, it can be difficult to stay on the right path.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Stay Out For Good™ provides a complete reentry ministry model that can be taught inside county jails, prisons, churches, and community ministries. The model includes the 12-week reentry course, the 10 Biblical Reentry Steps, weekly Reentry Life Groups, reentry mentorship, and online support for released participants.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8]">Our goal is to help men and women build a new life in Christ and stay out for good.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-navy rounded-xl p-8">
              <span className="block text-[0.68rem] font-bold tracking-[0.2em] uppercase text-gold-light mb-3">Mission</span>
              <p className="text-sm text-white/75 leading-relaxed">The mission of Stay Out For Good™ is to equip incarcerated and formerly incarcerated men and women with biblical truth, practical reentry preparation, personal accountability, mentorship, and Christ-centered community support so they can rebuild their lives and walk toward lasting freedom.</p>
            </div>
            <div className="bg-gold/8 border border-gold/25 rounded-xl p-8">
              <span className="block text-[0.68rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">Vision</span>
              <p className="text-sm text-gray-600 leading-relaxed">Our vision is to see churches, jail ministries, prison ministries, and community partners across the nation equipped to serve returning citizens with a clear biblical reentry pathway. We want every man and woman leaving incarceration to have access to spiritual support, practical preparation, healthy accountability, and people willing to walk with them as they rebuild their lives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <span className="section-label">Our Core Values</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>What We <em className="not-italic text-gold">Stand For.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {[{ icon:"✝️",title:"Faith-First",desc:"We believe lasting transformation begins with a personal relationship with God. Every program, resource, and community we build is rooted in the Word." },{ icon:"🤝",title:"Community",desc:"No one walks this journey alone. We are committed to building genuine, supportive community around every returning citizen." },{ icon:"🕊",title:"Second Chances",desc:"Every person has inherent worth and the capacity for change. We believe every life deserves a second chance." },{ icon:"💪",title:"Empowerment",desc:"Through practical life skills, biblical wisdom, and ongoing guidance, we empower individuals to build self-sufficient, purpose-driven lives." },{ icon:"❤️",title:"Compassion",desc:"We lead with love, grace, and dignity — treating each person with the compassion and respect they deserve as a child of God." },{ icon:"🌱",title:"Transformation",desc:"We believe deep, lasting change is possible. Our programs cultivate lifelong transformation in the whole person — spirit, mind, and body." }].map((v) => (
              <div key={v.title} className="bg-cream-warm p-8"><span className="block text-2xl mb-4">{v.icon}</span><h3 className="font-serif font-bold text-navy text-[1.05rem] mb-2">{v.title}</h3><p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24 flex items-center justify-center border-t border-navy/12">
        <div className="max-w-[820px] text-center">
          <span className="block font-serif text-[6rem] leading-[0.5] text-gold opacity-40 mb-4">&ldquo;</span>
          <blockquote className="font-serif text-navy italic leading-relaxed mb-8 m-0" style={{ fontSize:"clamp(1.35rem,2.5vw,1.8rem)" }}>We believe second chances require more than good intentions. Lasting change comes through Christ, truth, responsibility, accountability, and a community willing to walk alongside men and women as they rebuild their lives.</blockquote>
          <p className="text-sm font-semibold tracking-[0.12em] uppercase text-gray-400"><strong className="block text-gold mb-1">Leland Family Ministries</strong>The Heart Behind Stay Out For Good™</p>
        </div>
      </section>

      <section className="bg-cream-warm px-[8%] py-24 border-t border-navy/12">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="section-label text-center block">Get Involved</span>
          <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Ready to Join the <em className="not-italic text-gold">Mission?</em></h2>
          <p className="text-[1rem] text-gray-600 leading-[1.75] mb-10 max-w-[520px] mx-auto">Whether you are a returning citizen, a church, a jail and prison ministry, or a supporter — there is a place for you in the Stay Out For Good™ family.</p>
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
