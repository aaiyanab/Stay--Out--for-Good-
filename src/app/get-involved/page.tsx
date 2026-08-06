import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";
import SubmitButton from "@/components/ui/SubmitButton";

export const metadata: Metadata = { title: "Get Involved", description: "Volunteer, donate, start a ministry, become a mentor, or partner with Stay Out For Good." };

const ways = [
  { icon:"💛",title:"Make a Donation",desc:"Help provide curriculum, training, mentor guides, online ministry support, and reentry resources.",cta:"Make a Donation",href:"/donate" },
  { icon:"⛪",title:"Start a Reentry Ministry",desc:"Bring the Stay Out For Good™ 12-week course, life groups, and mentorship model to your church or ministry.",cta:"Start a Ministry",href:"/churches-congregations" },
  { icon:"🤝",title:"Become a Reentry Mentor",desc:"Learn how to walk one-on-one with a released participant using biblical encouragement, accountability, prayer, and step-study support.",cta:"Learn More",href:"/contact" },
  { icon:"🙋",title:"Request Reentry Support",desc:"For returning citizens who need help connecting with a local ministry or online reentry support.",cta:"Request Support",href:"/returning-citizens" },
  { icon:"🌐",title:"Become a Partner Organization",desc:"Partner with us to help provide resources, referrals, training, and support for returning citizens.",cta:"Explore Partnership",href:"/partnership" },
  { icon:"💻",title:"Join the Online Reentry Ministry",desc:"For released participants who do not yet have a local Stay Out For Good™ ministry in their community.",cta:"Join Online",href:"/contact" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero eyebrow="Get Involved" h1="Join the" em="Mission." sub="There are many ways to be part of what God is doing through Stay Out For Good™. Whether you want to start a ministry, become a mentor, support the work financially, partner with us, or connect someone to reentry support — your involvement can help men and women build a new life and stay out for good." breadcrumb="Get Involved" />

      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[580px] mx-auto mb-14">
            <span className="section-label">How to Get Involved</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-4" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Many Ways to Make <em className="not-italic text-gold">a Real Difference.</em></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/12 border border-navy/12 rounded-xl overflow-hidden">
            {ways.map((w) => (
              <div key={w.title} className="bg-cream p-10 flex flex-col">
                <span className="block text-[2rem] mb-5">{w.icon}</span>
                <h3 className="font-serif font-bold text-navy text-xl mb-3">{w.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">{w.desc}</p>
                <Link href={w.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors no-underline group">{w.cta} <span className="transition-transform group-hover:translate-x-1 inline-block">→</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-[8%] py-24" id="story-form">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">Your Story Matters</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize:"clamp(1.75rem,3.5vw,2.5rem)" }}>Inspire Others with <em className="not-italic text-gold">Your Journey.</em></h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">Have a story of transformation or support? Your experience can be a powerful tool for change — inspiring others who are walking a similar path.</p>
            <p className="text-[1rem] text-gray-600 leading-[1.8]">Fill out the form and a member of our team will reach out to connect with you about sharing your story through our blog, newsletter, and events.</p>
          </div>
          <div className="bg-cream-warm border border-navy/12 rounded-xl p-10">
            <span className="section-label">Share Your Story</span>
            <h3 className="font-serif font-bold text-navy text-[1.5rem] leading-tight mb-2">Tell Us Your Story.</h3>
            <p className="text-sm text-gray-500 mb-8">Your journey of transformation and faith can change someone else's life.</p>
            <div className="flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1"><label className="form-label-light">First Name *</label><input className="form-input-light" type="text" placeholder="Jane" /></div>
                <div className="flex flex-col gap-1"><label className="form-label-light">Last Name *</label><input className="form-input-light" type="text" placeholder="Smith" /></div>
              </div>
              <div className="flex flex-col gap-1"><label className="form-label-light">Email *</label><input className="form-input-light" type="email" placeholder="jane@example.com" /></div>
              <div className="flex flex-col gap-1"><label className="form-label-light">Your Story *</label><textarea className="form-input-light min-h-[130px] resize-y" placeholder="Share your story of transformation, hope, or how Stay Out For Good™ has impacted your life..." /></div>
              <SubmitButton label="Submit My Story →" successLabel="✓ Thank you! We'll be in touch." />
            </div>
          </div>
        </div>
      </section>
      <ContactStrip title="Let's Connect." subtitle="Have questions about getting involved? We'd love to hear from you." />
    </>
  );
}
