import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "./providers";
import { SITE } from "@/constants/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "US university admissions",
    "college admissions consultant",
    "scholarships",
    "study in USA",
    "admissions strategy",
    "Bangladesh college counseling",
    "CollegePeak",
  ],
  authors: [{ name: SITE.name }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/logos/cp.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logos/cp.png",
    apple: "/logos/cp.png",
  },
  other: {
    "color-scheme": "light only",
    "supported-color-schemes": "light",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    slogan: SITE.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 7, 27 Shaptak Square, Road 16, Dhanmondi",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: [SITE.facebook],
  };

  return (
    <html lang="en" className={`light ${inter.variable} ${sora.variable}`} style={{ colorScheme: "light" }}>
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
        <meta name="theme-color" content="#FAFAF8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Providers>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
