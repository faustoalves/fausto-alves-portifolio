import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono, Inter, Urbanist } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fausto Alves - Senior Frontend Developer",
  description: "Fausto Alves - Senior Frontend Developer",
  keywords: [
    "Fausto Alves",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "HTML Developer",
    "CSS Developer",
  ],
  authors: [{ name: "Fausto Alves", url: siteUrl }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Fausto Alves - Senior Frontend Developer",
    description: "Fausto Alves - Senior Frontend Developer",
    url: siteUrl,
    siteName: "Fausto Alves",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/faustoalves/image/upload/v1769095321/portifolio/about/me-3d_xtl6oc.png",
        width: 1200,
        height: 630,
        alt: "Fausto Alves - Senior Frontend Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${urbanist.variable} ${geistMono.variable}`}
    >
      <body className="antialiased max-w-screen overflow-x-hidden min-h-screen">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9DHSG5WJMB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9DHSG5WJMB');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
