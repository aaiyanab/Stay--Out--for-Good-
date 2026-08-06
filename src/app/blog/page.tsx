import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
export const metadata: Metadata = { title: "Blog", description: "Stories of transformation, reentry insights, and faith-based encouragement from Stay Out For Good." };
export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Stories & Insights" h1="Stories of Faith," em="Hope & Transformation." sub="Welcome to the Stay Out For Good™ blog — a community hub where stories of transformation come to life, faith-based encouragement is shared, and the journey of reentry is explored with honesty and hope." breadcrumb="Blog" />
      <section className="bg-cream-warm px-[8%] py-24">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="bg-navy rounded-xl p-14">
            <span className="block text-[3rem] mb-4">✍️</span>
            <h3 className="font-serif font-bold text-white text-2xl mb-3">Articles Coming Soon</h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-[400px] mx-auto mb-8">We are working on bringing you inspiring stories of transformation, reentry insights, ministry updates, and faith-based encouragement. Check back soon — great content is on its way.</p>
            <Link href="/newsletter" className="btn-primary">Subscribe to Be Notified →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
