import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_NAME = "Stay Out For Good";
export const PHONE = "(601) 218-3429";
export const PHONE_HREF = "tel:+16012183429";
export const EMAIL_GENERAL = "info@lelandfamilyministries.com";
export const EMAIL_LIBBIE = "libbie@lelandfamilyministries.com";
export const EMAIL_MINISTRY = "Stayoutforgoodministry@gmail.com";
export const ADDRESS_MINISTRY = "6308 Sweetwater Dr, Lakeland, FL 33811";
export const ADDRESS_DONATIONS = "105 Elizabeth Ave, Madison, MS 39110";

// Square donation link — replace with your actual Square payment link
export const SQUARE_DONATE_URL = "https://square.link/YOUR_SQUARE_LINK_HERE";

// Formspree form IDs
export const FORMSPREE_CONTACT_URL = "https://formspree.io/f/mwleloln";
export const FORMSPREE_TRAINING_URL = "https://formspree.io/f/mvkpkakq";

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Who We Serve", href: "/#audience" },
  { label: "How It Works", href: "/#how" },
  { label: "Training", href: "/training" },
  { label: "Get Involved", href: "/#get-involved" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  whoWeServe: [
    { label: "Returning Citizens", href: "/returning-citizens" },
    { label: "Churches & Congregations", href: "/churches-congregations" },
    { label: "Jail & Prison Ministry", href: "/jail-prison-ministry" },
  ],
  ministry: [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/#how" },
    { label: "Training", href: "/training" },
    { label: "Blog", href: "/blog" },
    { label: "Newsletter", href: "/newsletter" },
  ],
  getInvolved: [
    { label: "Donate", href: "/donate" },
    { label: "Become a Partner", href: "/partnership" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Register for Training", href: "/training" },
    { label: "Contact Us", href: "/contact" },
  ],
};
