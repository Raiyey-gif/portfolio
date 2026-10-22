import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Federant } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const federant = Federant({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-federant",
});

const title = "Raisah Kirana Candra (Ranandra) | Full-Stack Developer";
const description =
  "Portfolio of Raisah Kirana Candra, also known as Ranandra: a full-stack developer building fast, clear interfaces with Next.js, React and WebGL.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title,
  description,
  applicationName: "Ranandra",
  authors: [{ name: "Raisah Kirana Candra", url: SITE }],
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "Ranandra", type: "website" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  verification: {
    google: "Qhx2LBoo1tmR82N79CVF0oPOlNvKPtUiMFnqQQBmymM",
  },
};

export const viewport: Viewport = { themeColor: "#120805" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": SITE + "/#person",
      name: "Raisah Kirana Candra (Ranandra)",
      alternateName: "Ranandra",
      jobTitle: "Web Developer",
      url: SITE,
      email: "mailto:ranandra313@gmail.com",
      sameAs: ["https://github.com/Raiyey-gif", "https://www.linkedin.com/in/ranandra/"],
    },
    {
      "@type": "WebSite",
      "@id": SITE + "/#website",
      url: SITE,
      name: "Ranandra",
      publisher: { "@id": SITE + "/#person" },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${federant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
