import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './header';
import { Footer } from './components';

// Reuse the Geist font bundled with Next.js; no external font requests.
const geist = localFont({ src: './fonts/geist-latin.woff2', weight: '100 900', display: 'swap', variable: '--font-geist' });

export const metadata: Metadata = {
  icons: { icon: '/logo.png' },
  title: 'LUPAD-Ta Travel & Tours | Your next island story',
  description: 'Explore Dumaguete, Siquijor, Apo Island, Cebu and Bohol with LUPAD-Ta Travel & Tours. Browse packages and plan your trip with our local team.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={geist.variable}><body><Header />{children}<Footer /></body></html>;
}

