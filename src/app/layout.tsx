import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Tvam Software — Top Mobile App Development Company in India & USA',
  description:
    'Tvam Software crafts world-class mobile apps, AI solutions, and digital products. $869M+ funding raised by our apps. 50,000+ happy clients worldwide.',
  keywords: 'mobile app development, iOS development, Android development, AI solutions, React Native, Flutter',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
