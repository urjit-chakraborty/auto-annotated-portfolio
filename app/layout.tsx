import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kontrail LLC - Web Development & Digital Marketing Agency',
  description: 'Kontrail is a full-service digital agency specializing in web development, design, and digital marketing. Transform your business with custom solutions.',
  keywords: 'web development, digital marketing, design services, social media management, custom tech solutions, Salisbury, Maryland',
  authors: [{ name: 'Kontrail LLC' }],
  openGraph: {
    title: 'Kontrail LLC - Web Development & Digital Marketing Agency',
    description: 'Transform your business with custom web development, design, and digital marketing solutions.',
    url: 'https://kontrail.com',
    siteName: 'Kontrail LLC',
    images: [
      {
        url: 'https://kontrail.com/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Kontrail LLC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontrail LLC - Web Development & Digital Marketing Agency',
    description: 'Transform your business with custom web development, design, and digital marketing solutions.',
    images: ['https://kontrail.com/twitter-image.jpg'], // Add your Twitter image
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://kontrail.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kontrail LLC",
              "url": "https://kontrail.com",
              "logo": "https://kontrail.com/logo.png",
              "description": "Full-service digital agency specializing in web development, design, and digital marketing",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Salisbury",
                "addressRegion": "MD",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-443-944-7346",
                "contactType": "customer service",
                "email": "kontrailagency@gmail.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/kontrail",
                "https://twitter.com/kontrail",
                "https://www.facebook.com/kontrail"
              ]
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}