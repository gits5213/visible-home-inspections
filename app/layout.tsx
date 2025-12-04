import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visible Home Inspections LLC - Professional Home Inspections in New York",
  description: "Licensed, insured home inspections for buyers, sellers, and investors across New York City and surrounding areas. Digital reports within 24 hours.",
  keywords: "home inspection, New York, NYC, home inspector, buyer inspection, pre-listing inspection, condo inspection",
  icons: {
    icon: '/images/visibleHomeInspectionLLCLogo.png',
    shortcut: '/images/visibleHomeInspectionLLCLogo.png',
    apple: '/images/visibleHomeInspectionLLCLogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
