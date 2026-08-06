import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-[5%]">
      <div className="text-center max-w-[560px]">
        <span className="block font-serif text-[6rem] font-black text-gold/30 leading-none mb-4">404</span>
        <h1 className="font-serif font-bold text-white text-4xl mb-4">Page Not Found</h1>
        <p className="text-white/60 text-lg leading-relaxed mb-10">The page you're looking for doesn't exist or may have been moved.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-primary">Back to Home →</Link>
          <Link href="/contact" className="btn-outline-white">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
