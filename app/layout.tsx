import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './header';
import { Footer } from './components';

// Reuse the Geist font bundled with Next.js; no external font requests.
const geist = localFont({ src: './fonts/geist-latin.woff2', weight: '100 900', display: 'swap', variable: '--font-geist' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')),
  icons: { icon: '/logo.png' },
  title: 'LUPAD-Ta Travel & Tours | Dumaguete Tour Packages & Island Trips',
  description: 'Explore Dumaguete, Siquijor, Apo Island, Cebu and more with LUPAD-Ta Travel & Tours. Discover tour packages and customized Philippine travel itineraries from Dumaguete City.',
  openGraph: { type: 'website', locale: 'en_PH', siteName: 'LUPAD-Ta Travel & Tours' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={geist.variable}><body><Header />{children}<Footer /></body></html>;
}

