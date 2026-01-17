import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://cityboymeme.com";
const siteName = "City Boy Meme Generator";
const siteDescription = "Create hilarious City Boy memes instantly with our free online generator. Add custom text, choose fonts and colors. Download high-quality memes. No signup!";

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
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q4Z8QQ93M3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q4Z8QQ93M3');
            `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v2u4issfvq");
            `,
          }}
        />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
