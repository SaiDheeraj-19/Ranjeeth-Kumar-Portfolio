import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: "Dr. C. Ranjeeth Kumar | Dean, AI Researcher & Institution Builder",
  description: "Senior academic leader, applied AI researcher, and institution builder. Specialized in bridging academia, industry, and innovation ecosystems.",
  openGraph: {
    title: "Dr. C. Ranjeeth Kumar | Executive Digital Profile",
    description: "15+ years of leadership in AI, Innovation, and Entrepreneurship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans selection:bg-brand-indigo/10 selection:text-brand-indigo antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
