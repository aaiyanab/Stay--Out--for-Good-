import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ContactStrip from "@/components/ui/ContactStrip";
import TrainingForm from "@/components/sections/TrainingForm";

export const metadata: Metadata = {
  title: "Reentry Ministry Training",
  description: "Register for Stay Out For Good™ Reentry Ministry Training — learn how your church or ministry can launch a biblical reentry pathway.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Reentry Ministry Training"
        h1="Train Your Church to"
        em="Make a Lasting Impact."
        sub="Learn how your church or ministry can start a Stay Out For Good™ Reentry Ministry and make a lasting difference in the lives of men and women returning home from incarceration."
        breadcrumb="Training"
      />

      {/* FLYER SECTION */}
      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label">Upcoming Training</span>
            <h2 className="font-serif font-bold text-navy leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>
              Reentry Ministry<br /><em className="not-italic text-gold">Training Event.</em>
            </h2>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-4">
              You are invited to our Reentry Ministry Training — a powerful workshop designed to equip church leaders, jail and prison ministry volunteers, and community partners with the tools and biblical framework to launch a Stay Out For Good™ Reentry Ministry.
            </p>
            <p className="text-[1rem] text-gray-600 leading-[1.8] mb-6">
              This training covers the 12-week reentry course, the 10 Biblical Reentry Steps, how to lead Reentry Life Groups, how to train mentors, and how to connect returning citizens to your church and community.
            </p>
            <div className="flex flex-col gap-3">
              <div className="resource-card">
                <div className="resource-icon">📅</div>
                <div><h4 className="font-semibold text-navy text-[0.95rem] mb-0.5">Date</h4><p className="text-sm text-gray-500">Saturday, August 22, 2026</p></div>
              </div>
              <div className="resource-card">
                <div className="resource-icon">🕘</div>
                <div><h4 className="font-semibold text-navy text-[0.95rem] mb-0.5">Time</h4><p className="text-sm text-gray-500">9:00 AM – 12:00 PM</p></div>
              </div>
              <div className="resource-card">
                <div className="resource-icon">📍</div>
                <div><h4 className="font-semibold text-navy text-[0.95rem] mb-0.5">Location</h4><p className="text-sm text-gray-500">Imprint Ministries<br />1503 6th St SE, Winter Haven, FL 33880</p></div>
              </div>
              <div className="resource-card">
                <div className="resource-icon">📞</div>
                <div><h4 className="font-semibold text-navy text-[0.95rem] mb-0.5">Questions?</h4><p className="text-sm text-gray-500">Call Libbie Wendley<br />(601) 218-3429</p></div>
              </div>
            </div>
          </div>

          {/* Flyer image */}
          <div className="rounded-xl overflow-hidden border border-navy/12 shadow-sm">
            <Image
              src="/images/training-flyer.png"
              alt="Stay Out For Good Reentry Ministry Training Flyer"
              width={600}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section className="bg-navy px-[8%] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <div>
            <span className="section-label" style={{ color: "#e8b86d" }}>Register</span>
            <h2 className="font-serif font-bold text-white leading-[1.2] mb-5" style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)" }}>
              Reserve Your<br /><em className="not-italic text-gold-light">Spot Today.</em>
            </h2>
            <p className="text-[1rem] text-white/60 leading-[1.8] mb-4">
              Fill out the form to register for an upcoming Stay Out For Good™ Reentry Ministry Training. Trainings are held periodically throughout the year for churches, jail and prison ministries, and community organizations.
            </p>
            <p className="text-[1rem] text-white/60 leading-[1.8] mb-8">
              After registering, you will receive a confirmation with training details, location, and any materials you need to bring.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center text-sm text-white/60"><span className="text-gold font-bold">→</span>Free to attend</div>
              <div className="flex gap-3 items-center text-sm text-white/60"><span className="text-gold font-bold">→</span>Open to churches, jail &amp; prison ministries, and community partners</div>
              <div className="flex gap-3 items-center text-sm text-white/60"><span className="text-gold font-bold">→</span>Multiple trainings held throughout the year</div>
              <div className="flex gap-3 items-center text-sm text-white/60"><span className="text-gold font-bold">→</span>Questions? Call (601) 218-3429</div>
            </div>
          </div>
          <TrainingForm />
        </div>
      </section>

      <ContactStrip title="Questions About Training?" subtitle="Reach out and we'd love to help you get connected." />
    </>
  );
}
