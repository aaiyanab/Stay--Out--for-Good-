import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default:"Stay Out For Good™ — National Reentry Ministry", template:"%s | Stay Out For Good™" },
  description: "Stay Out For Good™ is a Christ-centered reentry ministry of Leland Family Ministries, helping men and women prepare for life after incarceration.",
  metadataBase: new URL("https://stayoutforgood.org"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body><Navbar /><main>{children}</main><Footer /></body>
    </html>
  );
}
