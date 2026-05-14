import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Stay Out For Good — National Re-Entry Ministry", template: "%s | Stay Out For Good" },
  description: "Stay Out For Good is a national faith-based re-entry ministry helping returning citizens, churches, and jail/prison ministries build second chances through community and faith.",
  keywords: ["re-entry ministry", "prison ministry", "returning citizens", "faith-based", "second chances"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stayoutforgood.org",
    siteName: "Stay Out For Good",
    title: "Stay Out For Good — National Re-Entry Ministry",
    description: "Walking alongside returning citizens and their families as they rebuild with dignity, purpose, and faith.",
  },
  twitter: { card: "summary_large_image" },
  metadataBase: new URL("https://stayoutforgood.org"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
