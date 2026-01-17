import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://cityboymeme.com";
const siteName = "City Boy Meme Generator";
const siteDescription = "Free online City Boy meme generator - create hilarious City Boy memes in seconds. Add custom text, stickers, and download instantly. No signup required!";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "City Boy Meme Generator - Free Online Meme Maker",
    template: "%s | City Boy Meme"
  },
  description: siteDescription,
  keywords: [
    "city boy meme",
    "meme generator",
    "free meme maker",
    "online meme creator",
    "city boy meme maker",
    "create memes",
    "funny memes",
    "meme templates"
  ],
  authors: [{ name: "City Boy Meme" }],
  creator: "City Boy Meme",
  publisher: "City Boy Meme",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "City Boy Meme Generator - Free Online Meme Maker",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "City Boy Meme Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "City Boy Meme Generator - Free Online Meme Maker",
    description: siteDescription,
    images: [`${siteUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://cityboymeme.com/" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
